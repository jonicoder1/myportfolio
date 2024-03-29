import my_portuguese_certificate from "../../../images/certificates/my-portuguese-certificate.jpg";
import classes from "./Hobbies.module.css";
import img from "../../../images/me/me_at_bart.png";

const Hobbies = () => {
  return (
    <div className={classes.container}>
      <h1 id="hobbies">Hobbies</h1>
      <div className={classes.rowCont}>
        <div className={classes.row}>
          <h3 className="mb-3">Learning Languages</h3>
          <div>
            <p>English</p>
            <p>fluent</p>
          </div>
          <div>
            <p>Filipino</p>
            <p>Fluent</p>
          </div>
          <div>
            <a
              href={my_portuguese_certificate}
              target="_blank"
              rel="noreferrer"
            >
              Portuguese
            </a>
            <p>Intermediate</p>
          </div>
          <div>
            <p>Spanish</p>
            <p>Beginner</p>
          </div>
        </div>
        <div className={classes.row}>
          <img src={img} alt="img" className={classes.img} />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
