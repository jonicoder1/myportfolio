import classes from "./Social.module.css";

import GithubSVG from "../../images/social_media/github.svg";
import LinkedInSVG from "../../images/social_media/linkedin.svg";
import TwitterSVG from "../../images/social_media/twitter.svg";
import InstagramSVG from "../../images/social_media/Instagram/Instagram.svg";

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
      <div className={classes["socialMedia"]}>
        {info.map((social) => (
          <figure key={Math.random()}>
            <a href={social.href} target="_blank" rel="noreferrer">
              <img src={social.svg} alt={social.name.toLowerCase()} />
            </a>
            <figcaption>{social.name}</figcaption>
          </figure>
        ))}
      </div>
    );
  };

  return (
    <div className={`${classes["social"]} ${"container"}`} id="social">
      <h1>Social</h1>
      <div className="text-align-center">
        <Social />
      </div>
      <hr />
    </div>
  );
};

export default Contacts;
