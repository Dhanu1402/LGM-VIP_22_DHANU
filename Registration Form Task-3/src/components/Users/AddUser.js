import React, { useState } from 'react';
import validator from 'validator';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredFirstname, setEnteredFirstname] = useState('');
  const [enteredLastname, setEnteredLastname] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredGender, setEnteredGender] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredFirstname.trim().length === 0 || enteredLastname.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter valid name details (non-empty values).',
      });
      return;
    }
    if (enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    if (enteredGender.trim().length === 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    if (enteredDate.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid date (non-empty values).',
      });
      return;
    }
    if (enteredEmail.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid e-mail (non-empty values).',
      });
      return;
    }
    if (validator.isEmail(enteredEmail)) {
      console.log('ok')
    } else {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid e-mail.',
      });
      return;
    }
    props.onAddUser(enteredFirstname, enteredLastname, enteredAge, enteredGender, enteredDate, enteredEmail);
    setEnteredFirstname('');
    setEnteredLastname('');
    setEnteredAge('');
    setEnteredGender('');
    setEnteredDate('');
    setEnteredEmail('');
  };

  const firstnameChangeHandler = (event) => {
    setEnteredFirstname(event.target.value);
  };

  const lastnameChangeHandler = (event) => {
    setEnteredLastname(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            value={enteredFirstname}
            onChange={firstnameChangeHandler}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            value={enteredLastname}
            onChange={lastnameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
         <label htmlFor="gender">Gender</label>
          <input
            id="gender"
            type="text"
            value={enteredGender}
            onChange={genderChangeHandler}
          />
          <label htmlFor="date">D.O.B</label>
          <input
            id="dob"
            type="date"
            value={enteredDate}
            max='date.current-date'
            onChange={dateChangeHandler}
          />
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;