import classes from "./Contacts.module.css";

import GithubSVG from "../../images/social_media/github.svg";
import LinkedInSVG from "../../images/social_media/linkedin.svg";
import TwitterSVG from "../../images/social_media/twitter.svg";
import InstagramSVG from "/Users/jonathanguerrero/Documents/GitHub/portfolio/my-app/src/images/social_media/Instagram/Instagram.svg";

const Contacts = () => {
  const info = [
    {
      name: "Github",
      href: "https://github.com/jogusland/",
      svg: GithubSVG,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jogus/",
      svg: LinkedInSVG,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jogu253/",
      svg: TwitterSVG,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/joni_developer/",
      svg: InstagramSVG,
    },
  ];

  const Social = () => {
    return (
      <div class={classes["socialMedia"]}>
        {info.map((social) => (
          <figure>
            <a href={social.href} target="_blank" rel="noreferrer">
              <img src={social.svg} alt={social.name.toLowerCase()} />
            </a>
            <figcaption>{social.name}</figcaption>
          </figure>
        ))}
      </div>
    );
  };

  const Email = () => {
    return (
      <a href="mailto:jogucareers@gmail.com">
        <h3 class={`${classes["email"]} margin-center`}>Email</h3>
      </a>
    );
  };

  return (
    <div className={`${classes["contact"]} ${"container"}`} id="contact">
      <h1>Contact/Social</h1>
      <div className="text-align-center">
        <Social />
        <Email />
      </div>
    </div>
  );
};

export default Contacts;
