import React from "react";
import PropTypes from "prop-types";

class UserDetails extends React.Component {
  render() {
    const { userData, onReset } = this.props;

    return (
      <div>
        <table className="table table-bordered table-striped mt-4">
          <thead className="thead-dark">
            <tr>
              <th colSpan="2">Detalji o korisniku</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avatar</td>
              <td>
                {userData.avatar_url && (
                  <img src={userData.avatar_url} alt="Avatar" />
                )}
              </td>
            </tr>
            <tr>
              <td>Ime</td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td>Lokacija</td>
              <td>{userData.location}</td>
            </tr>
            <tr>
              <td>Biografija</td>
              <td>{userData.bio}</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-bordered table-striped mt-4">
          <thead className="thead-dark">
            <tr>
              <th>Repositorij</th>
            </tr>
          </thead>
          <tbody>
            {userData.repositories.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-danger mt-2" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}

UserDetails.propTypes = {
  userData: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    bio: PropTypes.string,
    repositories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
