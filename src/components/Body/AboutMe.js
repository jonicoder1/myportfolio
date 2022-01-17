import me_at_bart from "../../images/me/me_at_bart.png";
import me_at_beach from "../../images/me/me_at_beach.png";
import me_at_chicago from "../../images/me/me_at_chicago.png";
import Card from "../UI/Card";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  const gallery = [
    {
      name: "me at the bart",
      src: `${me_at_bart}`,
      caption:
        "I am a Front End Web Developer who likes to make useful web apps",
    },
    {
      name: "me at beach",
      src: `${me_at_beach}`,
      caption:
        "Automation saves us time and helps us make repetitive tasks easier",
    },
    {
      name: "me at beach",
      src: `${me_at_chicago}`,
      caption: "Languages keep us all connected",
    },
  ];

  return (
    <div className={`${classes["about-me"]} container`}>
      <h1 id="aboutMe">About Me</h1>

      <div className={`${classes["container"]} container`}>
        {gallery.map((photo) => (
          <Card>
            <figure>
              <img src={photo.src} alt={photo.name} />
              <figcaption>
                <h4>{photo.caption}</h4>
              </figcaption>
            </figure>
          </Card>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default AboutMe;
