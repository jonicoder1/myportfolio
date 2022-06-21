import React, { useState } from "react";
import classes from "./Contact.module.css";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const setFirstNameHandler = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const setLastNameHandler = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const setEmailHandler = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const setMessageHandler = (e) => {
    setValues({ ...values, message: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email && values.message) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitFormHandler}>
        {submitted && valid ? (
          <div className={classes.success_message}>
            Form has been submitted!
          </div>
        ) : null}

        {submitted && !valid ? (
          <div className={classes.failed_message}>Form was not submitted! </div>
        ) : null}

        <div className={classes.form_control}>
          <input
            id="name"
            type="text"
            name="fist-name"
            onChange={setFirstNameHandler}
            placeholder="First Name"
            value={values.firstName}
          />
          {submitted && !values.firstName ? (
            <span className={classes.input_error_message}>
              please enter your name
            </span>
          ) : null}
        </div>
        <div className={classes.form_control}>
          <input
            id="name"
            type="text"
            name="last-name"
            onChange={setLastNameHandler}
            placeholder="Last Name"
            value={values.lastName}
          />
          {submitted && valid && !values.lastName ? (
            <span className={classes.input_error_message}>
              please enter your last name
            </span>
          ) : null}
        </div>
        <div className={classes.form_control}>
          <input
            id="name"
            type="email"
            name="email"
            onChange={setEmailHandler}
            placeholder="Email"
            value={values.email}
          />
          {submitted && valid && !values.email ? (
            <span className={classes.input_error_message}>
              please enter your email
            </span>
          ) : null}
        </div>
        <div className={classes.form_control}>
          <textarea
            id="name"
            type="comment"
            name="message"
            onChange={setMessageHandler}
            placeholder="Message"
            value={values.message}
            rows="5"
          />
          {submitted && valid && !values.message ? (
            <span className={classes.input_error_message}>
              please enter a comment
            </span>
          ) : null}
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <div className={classes.container} id="contact">
      <h1>Contact</h1>
      <Form />
    </div>
  );
};

export default Contact;
