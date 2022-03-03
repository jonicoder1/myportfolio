import React, { useState } from "react";
import classes from "./Contact.module.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const setFirstNameHandler = (e) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };

  const setLastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (firstName.trim() === "") {
      return setEnteredNameIsValid(true);
    }

    if (lastName.trim() === "") {
      return setEnteredLastNameIsValid(true);
    }

    console.log("form submit pressed");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={classes["control-group"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="name">First Name</label>
          <input
            id="name"
            type="text"
            onChange={setFirstNameHandler}
            value={firstName}
          />
          {enteredNameIsValid && <p>Error</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Last Name</label>
          <input
            id="name"
            type="text"
            onChange={setLastNameHandler}
            value={lastName}
          />
          {enteredLastNameIsValid && <p>Error</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Email</label>
          <input
            id="name"
            type="text"
            onChange={setEmailHandler}
            value={email}
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Comment</label>
          <textarea
            id="name"
            type="comment"
            onChange={setMessageHandler}
            value={message}
            rows="5"
          />
        </div>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

const Contact = () => {
  const [theState, setState] = useState(false);

  return (
    <div className={`${classes["contact"]} ${"container"}`} id="contact">
      <h1>Contact</h1>
      <h3>Or</h3>
      {!theState && (
        <button
          onClick={() => {
            setState(!theState);
          }}
        >
          Show Form
        </button>
      )}
      {theState && <Form />}
    </div>
  );
};

export default Contact;
