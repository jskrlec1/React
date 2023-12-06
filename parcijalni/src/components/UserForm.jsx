import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ onUserData }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(
          `GitHub API request failed with status: ${response.status}`
        );
      }

      const userData = await response.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!reposResponse.ok) {
        throw new Error(
          `GitHub API request failed with status: ${reposResponse.status}`
        );
      }

      const repositories = await reposResponse.json();
      userData.repositories = repositories;

      onUserData(userData);
    } catch (error) {
      console.error("Error fetching GitHub user data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label>
          GitHub korisničko ime:
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary ml-sm-2">
          Prikaži detalje
        </button>
      </div>
    </form>
  );
};

UserForm.propTypes = {
  onUserData: PropTypes.func.isRequired,
};

export default UserForm;
