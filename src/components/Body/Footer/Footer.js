import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
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
