import myProfile from "../../../images/me/me_profile.jpg";
import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const RightNav = () => {
    const items = [
      { name: "About Me", href: "/AboutMe" },
      { name: "Web Services", href: "/WebServices" },
      { name: "Certificate", href: "/Certificate" },
      { name: "Projects", href: "/Projects" },
      { name: "ForSale", href: "/ForSale" },
      { name: "Contact", href: "/Contact" },
    ];

    return (
      <div className={classes.nav}>
        {items.map((item) => (
          <h4 key={Math.random()}>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.active}
              to={item.href}
            >
              {item.name}
            </NavLink>
          </h4>
        ))}
      </div>
    );
  };

  const LeftNav = () => {
    const name = "Jonathan Guerrero";
    return (
      <div className={classes.photoAndName}>
        <img
          src={myProfile}
          className={`${classes.profileImg} margin-center`}
          id="#profile"
          alt="jon"
        />
        <a href="main-header">
          <h4 className={classes.headerName}>{name}</h4>
        </a>
      </div>
    );
  };

  return (
    <header className={classes.container}>
      <div className={`${classes.mainNav}`}>
        <nav className={classes.navbar}>
          <LeftNav />
          <RightNav />
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
