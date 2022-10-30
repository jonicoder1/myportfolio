import React, { useState } from "react";
import Wheel_of_Success from "../../../images/projects/Wheel_of_Success.jpg";
import Web_App_Dashboard from "../../../images/projects/Web_App_Dashboard.jpg";
import Startup_Employee_Directory from "../../../images/projects/Startup_Employee_Directory.jpg";
import My_Personal_Profile_Page from "../../../images/projects/My_Personal_Profile_Page.jpg";
import Mobile_first_Responsive_Layout from "../../../images/projects/Mobile_first_Responsive_Layout.jpg";
import An_Online_Registration_Form from "../../../images/projects/An_Online_Registration_Form.jpg";
import Interactive_Photo_Gallery from "../../../images/projects/Interactive_Photo_Gallery.jpg";
import Web_Style_Guide from "../../../images/projects/Web_Style_Guide.jpg";
import Card from "../../UI/Card";
import classes from "./Projects.module.css";

const Projects = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showImage, setShowImage] = useState(true);

  const ProjectList = [
    {
      name: "Wheel Of Success",
      href: "https://jogusland.github.io/portfolio_project_6/",
      src: `${Wheel_of_Success}`,
      description: "Used Javascript to build a word guessing game",
    },
    {
      name: "Web App Dashboard",
      href: "https://jogusland.github.io/portfolio_project_7",
      src: `${Web_App_Dashboard}`,
      description:
        "Used advanced web techniques including SVG graphics, tables, charts, and interactive JavaScript programming",
    },
    {
      name: "Startup Employee Directory",
      href: "https://jogusland.github.io/portfolio_project_8/",
      src: `${Startup_Employee_Directory}`,
      description:
        "I created an employee directory using Javascript by communicating with a third-party API",
    },
    {
      name: "Personal Profile Page",
      href: "https://jogusland.github.io/portfolio_project_1/",
      src: `${My_Personal_Profile_Page}`,
      description:
        "Customized an online profile by using graphics, text, and CSS",
    },
    {
      name: "Mobile-first Responsive Layout",
      href: "https://jogusland.github.io/portfolio_project_2/",
      src: `${Mobile_first_Responsive_Layout}`,
      description:
        "Using HTML and CSS, I Designed a mobile-first responsive web page that function well on multiple screen sizes.",
    },
    {
      name: "Online Registration Form",
      href: "https://jogusland.github.io/portfolio_project_3/",
      src: `${An_Online_Registration_Form}`,
      description:
        "Built a challenging responsive, mobile-first registration form using a variety of HTML form elements.",
    },
    {
      name: "Interactive Photo Gallery",
      href: "https://jogusland.github.io/portfolio_project_5/",
      src: `${Interactive_Photo_Gallery}`,
      description:
        "Used HTML, CSS and JavaScript to create an interactive, searchable gallery of photos.",
    },
    {
      name: "Web Style Guide",
      href: "https://jogusland.github.io/portfolio_project_4/",
      src: `${Web_Style_Guide}`,
      description:
        "I created a style guide that can act as your own custom Bootstrap that you can drop into any of your projects to speed up styling, layout, and development",
    },
  ];

  return (
    <div className={classes.mainContainer}>
      <h1 id="projects">Projects</h1>
      <div className={classes.container}>
        <p>view options: </p>
        <button
          onClick={() => setShowImage(!showImage)}
          className={classes.button}
        >
          image
        </button>
        <button
          onClick={() => setShowDescription(!showDescription)}
          className={classes.button}
        >
          description
        </button>
      </div>
      <div className={classes.cardsContainer}>
        {ProjectList.map((project) => (
          <Card key={Math.random()}>
            <a href={project.href} target="_blank" rel="noreferrer">
              <h3>{project.name}</h3>
              {showImage ? true : <img src={project.src} alt={project.name} />}
            </a>
            {showDescription ? true : <p>{project.description}</p>}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
