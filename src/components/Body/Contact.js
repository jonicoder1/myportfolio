import React, { useState } from "react";
import classes from "./Contact.module.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState(false);
  const [enteredLastName, setEnteredLastName] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState(false);
  const [enteredMessage, setEnteredMessage] = useState(false);

  // console.log(`Last name is ${enteredLastName}`);

  const setFirstNameHandler = (e) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };

  const setLastNameHandler = (e) => {
    setLastName(e.target.value);
    console.log(e.target.value);
  };

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const setMessageHandler = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (firstName.trim() === "" && enteredFirstName === false) {
      setEnteredFirstName(true);
      console.log(enteredFirstName);
    }

    if (lastName.trim() === "" && enteredLastName === false) {
      setEnteredLastName(true);
      console.log(enteredLastName);
    }

    if (email.trim() === "" && enteredEmail === false) {
      setEnteredEmail(true);
      console.log(enteredEmail);
    }

    if (message.trim() === "" && enteredMessage === false) {
      setEnteredMessage(true);
      console.log(enteredMessage);
    }

    if (firstName !== "" && lastName !== "" && email !== "" && message !== "") {
      console.log("form is Valid");
      console.log(enteredFirstName);
      console.log(enteredLastName);
      console.log(enteredEmail);
      console.log(enteredMessage);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setEnteredFirstName(false);
      setEnteredLastName(false);
      setEnteredEmail(false);
      setEnteredMessage(false);
    }
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
          {enteredFirstName && <p>Error</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Last Name</label>
          <input
            id="name"
            type="text"
            onChange={setLastNameHandler}
            value={lastName}
          />
          {enteredLastName && <p>Error</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Email</label>
          <input
            id="name"
            type="text"
            onChange={setEmailHandler}
            value={email}
          />
          {enteredEmail && <p>Error</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Message</label>
          <textarea
            id="name"
            type="comment"
            onChange={setMessageHandler}
            value={message}
            rows="5"
          />
          {enteredMessage && <p>Error</p>}
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
      <a href="mailto: jogucareers@gmail.com">
        <h3>Email me</h3>
      </a>
      <h4>Or</h4>
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
