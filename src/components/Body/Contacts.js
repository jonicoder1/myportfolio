import classes from "./Contacts.module.css";

import Github from "../../images/social_media/github.svg";
import LinkedIn from "../../images/social_media/linkedin.svg";
import Twitter from "../../images/social_media/twitter.svg";

const Contacts = () => {
  return (
    <div className={`${classes["contact"]} ${"container"}`} id="contact">
      <h1>Contact/Social</h1>
      <div class="text-align-center">
        <div class={classes["socialMedia"]}>
          <figure>
            <a href="https://github.com/jonisland" target="_blank">
              <img src={Github} alt="github" />
            </a>
            <figcaption>Github</figcaption>
          </figure>
          <figure>
            <a href="https://www.linkedin.com/in/jogu/" target="_blank">
              <img src={LinkedIn} alt="linkedin" />
            </a>
            <figcaption>LinkedIn</figcaption>
          </figure>
          <figure>
            <a href="https://twitter.com/jogutwit" target="_blank">
              <img src={Twitter} alt="twitter" />
            </a>
            <figcaption>Twitter</figcaption>
          </figure>
        </div>
        <a href="mailto:jogucareers@gmail.com">
          <h3 class={`${classes["email"]} margin-center`}>send me an email</h3>
          {/* <h3 class="email margin-center">send me an email</h3> */}
        </a>
      </div>
    </div>
  );
};

export default Contacts;
