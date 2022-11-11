import classes from "./Footer.module.css";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <Social />
      <div>
        <div className="row">
          <div>
            <a href="#">back to top</a>
          </div>
          <div>
            <p>©J Guerrero</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
