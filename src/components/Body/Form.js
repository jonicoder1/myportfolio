import classes from "./Form.module.css";

const Form = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("form has been submitted");
  };

  return (
    <form>
      <div className={classes["control-group"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
