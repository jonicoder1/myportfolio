import classes from "./Social.module.css";

import GithubSVG from "../../../images/social_media/github.svg";
import LinkedInSVG from "../../../images/social_media/linkedin.svg";
import TwitterSVG from "../../../images/social_media/twitter.svg";
import InstagramSVG from "../../../images/social_media/Instagram/Instagram.svg";
import DiscordSVG from "../../../images/social_media/discord.svg";
import FacebookJPG from "../../../images/social_media/facebook.jpg";

const Social = () => {
  const info = [
    {
      name: "Github",
      href: "https://github.com/jonicoder1/",
      svg: GithubSVG,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jonicoder/",
      svg: LinkedInSVG,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/jonicoder",
      svg: FacebookJPG,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jonicoder/",
      svg: TwitterSVG,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/jonicoder/",
      svg: InstagramSVG,
    },
    {
      name: "Discord",
      href: "https://discord.gg/eebzH7HwHV",
      svg: DiscordSVG,
    },
  ];

  const Social = () => {
    return (
      <div className={classes.socialMedia}>
        {info.map((social) => (
          <figure key={Math.random()} className="animation">
            <a href={social.href} target="_blank" rel="noreferrer">
              <img src={social.svg} alt={social.name.toLowerCase()} />
            </a>
          </figure>
        ))}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div>
        <Social />
      </div>
    </div>
  );
};

export default Social;
