import myProfile from "../../images/me/me_profile.jpg";
import classes from "./Header.module.css";

const Header = () => {
  const LeftNav = () => {
    const name = "Jonathan Guerrero";
    return (
      <div className={classes.photoAndName}>
        <img
          src={myProfile}
          className={`${classes.profileImg} margin-center`}
          alt="jon"
        />
        <a href="main-header">
          <h4 className={classes.headerName}>{name}</h4>
        </a>
      </div>
    );
  };

  const RightNav = () => {
    const items = [
      { name: "About Me", href: "#aboutMe" },
      { name: "Certificate", href: "#certificate" },
      { name: "Projects", href: "#projects" },
      { name: "Hobbies", href: "#hobbies" },
      { name: "Contact", href: "#contact" },
    ];

    return (
      <div className={classes.nav}>
        {items.map((item) => (
          <h4 key={Math.random()}>
            <a className={classes.navLink} href={item.href}>
              {item.name}
            </a>
          </h4>
        ))}
      </div>
    );
  };

  return (
    <div className={`mainHeader ${classes.mainHeader} `}>
      <div className={`${classes.mainNav}`}>
        <nav className={classes.navbar}>
          <LeftNav />
          <RightNav />
        </nav>
      </div>
    </div>
  );
};

export default Header;
