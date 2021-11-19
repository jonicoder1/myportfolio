import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer class={classes.footer}>
      <div class="container">
        <div class="row">
          <div>
            <a href="#">back to top</a>
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
