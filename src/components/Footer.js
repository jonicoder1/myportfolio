import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className="row">
          <div>
            <a href="main-header">back to top</a>
          </div>
          <div>
            <p>©Jonathan L Guerrero</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
