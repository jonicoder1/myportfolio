import myProfile from "../../images/me/me_profile.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes["main-header"]}>
      <div
        className={`${classes["main-nav"]} ${classes["container"]} ${classes["p1"]}`}
      >
        <nav className={classes["navbar"]}>
          <div className={classes["photo-and-name"]}>
            <img
              src={myProfile}
              className={`${classes.profileImg} margin-center`}
              alt="jon photo"
            />
            <a href="#">
              <h4 className={classes["headerName"]}>Jonathan Guerrero</h4>
            </a>
          </div>
          <div className={classes["nav"]}>
            <h4>
              <a className={classes["nav-link"]} href="#aboutMe">
                About Me
              </a>
            </h4>
            <h4>
              <a className={classes["nav-link"]} href="#certificate">
                Certificate
              </a>
            </h4>
            <h4>
              <a className={classes["nav-link"]} href="#projects">
                Projects
              </a>
            </h4>
            <h4>
              <a className={classes["nav-link"]} href="#hobbies">
                Hobbies
              </a>
            </h4>
            <h4>
              <a className={classes["nav-link"]} href="#contact">
                Contact
              </a>
            </h4>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
