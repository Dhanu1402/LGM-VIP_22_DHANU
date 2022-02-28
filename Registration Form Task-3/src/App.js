import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (fName, lName, uAge, uGender, uDob, uemail) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { fname: fName, lname: lName, age: uAge, gender: uGender, dob: uDob, email: uemail, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
