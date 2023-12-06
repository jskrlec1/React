import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleUserData = (data) => {
    setUserData(data);
  };

  const handleReset = () => {
    setUserData(null);
  };

  return (
    <div className="container text-center mt-5"> 
      {userData ? (
        <UserDetails userData={userData} onReset={handleReset} />
      ) : (
        <UserForm onUserData={handleUserData} />
      )}
    </div>
  );
};

export default App;

