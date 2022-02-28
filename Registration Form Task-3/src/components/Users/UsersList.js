import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <div>
        <table className={classes.base}>
          <caption className={classes.caption}>Successfully Enrolled</caption>
          <tr>
            <th className={classes.row}>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>D.O.B</th>
            <th>E-Mail</th>
          </tr>
          {props.users.map((user) => (
            <tr>
              <td className={classes.row}>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>  
        {/* <li key={user.id}>
          <b>First Name :-</b> {user.fname} <br></br>
          <b>Last Name :-</b> {user.lname} <br></br>
          <b>Age :-</b> {user.age} years <br></br>
          <b>Gender :-</b> {user.gender} <br></br>
          <b>D.O.B :-</b> {user.dob} <br></br>
          <b>E-Mail :-</b> {user.email} <br></br>
        </li> */}
      </div>
    </Card>
  );
};

export default UsersList;


// {props.users.map((user) => (
//   <table className={classes.base}>
//     <tr>
//       <th className={classes.row}>First Name</th>
//       <th>Last Name</th>
//       <th>Age</th>
//       <th>Gender</th>
//       <th>D.O.B</th>
//       <th>E-Mail</th>
//     </tr>
//     <tr>
//       <td>{user.fname}</td>
//       <td>{user.lname}</td>
//       <td>{user.age}</td>
//       <td>{user.gender}</td>
//       <td>{user.dob}</td>
//       <td>{user.email}</td>
//     </tr>
//   </table>

// ))}