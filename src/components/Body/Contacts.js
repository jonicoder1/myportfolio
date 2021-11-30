import classes from "./Contacts.module.css";

import GithubSVG from "../../images/social_media/github.svg";
import LinkedInSVG from "../../images/social_media/linkedin.svg";
import TwitterSVG from "../../images/social_media/twitter.svg";
import InstagramSVG from "/Users/jonathanguerrero/Documents/GitHub/portfolio/my-app/src/images/social_media/Instagram/Instagram.svg";

const Contacts = () => {
  const info = [
    {
      name: "Github",
      href: "https://github.com/jonisland/",
      svg: GithubSVG,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jogu/",
      svg: LinkedInSVG,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jogutwit/",
      svg: TwitterSVG,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/joni_webdev/",
      svg: InstagramSVG,
    },
  ];

  return (
    <div className={`${classes["contact"]} ${"container"}`} id="contact">
      <h1>Contact/Social</h1>
      <div class="text-align-center">
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
        <a href="mailto:jogucareers@gmail.com">
          <h3 class={`${classes["email"]} margin-center`}>send me an email</h3>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
