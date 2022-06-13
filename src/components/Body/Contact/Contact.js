import React, { useState } from "react";
import classes from "./Contact.module.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState(true);
  const [enteredLastName, setEnteredLastName] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState(true);
  const [enteredMessage, setEnteredMessage] = useState(true);

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

    if (firstName.trim() === "") {
      setEnteredFirstName(false);
      return;
    }
    setEnteredFirstName(true);

    if (lastName.trim() === "") {
      setEnteredLastName(false);
      return;
    }
    setEnteredLastName(true);

    if (email.trim() === "") {
      setEnteredEmail(false);
      return;
    }
    setEnteredEmail(true);

    if (message.trim() === "") {
      setEnteredMessage(false);
      return;
    }
    setEnteredMessage(true);

    const valueIsValid =
      enteredFirstName && enteredLastName && enteredEmail && enteredMessage;

    if (valueIsValid) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      console.log(enteredFirstName);
      console.log(enteredLastName);
      console.log(enteredEmail);
      console.log(enteredMessage);
      console.log("form is Valid");
      alert("Your email has been sent!");
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
            name="fist-name"
            onChange={setFirstNameHandler}
            value={firstName}
          />
          {!enteredFirstName && <p>Error</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Last Name</label>
          <input
            id="name"
            type="text"
            name="last-name"
            onChange={setLastNameHandler}
            value={lastName}
          />
          {!enteredLastName && <p>Error</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Email</label>
          <input
            id="name"
            type="email"
            name="email"
            onChange={setEmailHandler}
            value={email}
          />
          {!enteredEmail && <p>Error</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Message</label>
          <textarea
            id="name"
            type="comment"
            name="message"
            onChange={setMessageHandler}
            value={message}
            rows="5"
          />
          {!enteredMessage && <p>Error</p>}
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
