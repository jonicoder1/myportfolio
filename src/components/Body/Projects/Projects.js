import Wheel_of_Success from "../../../images/projects/Wheel_of_Success.jpg";
import Web_App_Dashboard from "../../../images/projects/Web_App_Dashboard.jpg";
import Startup_Employee_Directory from "../../../images/projects/Startup_Employee_Directory.jpg";
import My_Personal_Profile_Page from "../../../images/projects/My_Personal_Profile_Page.jpg";
import Mobile_first_Responsive_Layout from "../../../images/projects/Mobile_first_Responsive_Layout.jpg";
import An_Online_Registration_Form from "../../../images/projects/An_Online_Registration_Form.jpg";
import Interactive_Photo_Gallery from "../../../images/projects/Interactive_Photo_Gallery.jpg";
import Web_Style_Guide from "../../../images/projects/Web_Style_Guide.jpg";
import ProjectHandler from "./ProjectsList";
import classes from "./Projects.module.css";

const Projects = () => {
  const ProjectList = [
    {
      name: "Wheel Of Success",
      href: "https://jogusland.github.io/portfolio_project_6/",
      src: `${Wheel_of_Success}`,
      description1:
        "Created a browser version of “Wheel of Success”, a word guessing game",
      description2:
        "Used Javascript to come up with a random phrase that players will try to guess by entering different letters into the program.",
    },
    {
      name: "Web App Dashboard",
      href: "https://jogusland.github.io/portfolio_project_7",
      src: `${Web_App_Dashboard}`,
      description1:
        "Built an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming",
      description2:
        "The project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability.",
    },
    {
      name: "Startup Employee Directory",
      href: "https://jogusland.github.io/portfolio_project_8/",
      src: `${Startup_Employee_Directory}`,
      description1:
        "Many sites — Twitter, Facebook, IMDB, and Wikipedia to name a few — offer a vast sea of data that you can access and display on your own web pages.",
      description2:
        "Using JavaScript, I created an employee directory by communicating with a third-party API (Application Programming Interface).",
    },
    {
      name: "My Personal Profile Page",
      href: "https://jogusland.github.io/portfolio_project_1/",
      src: `${My_Personal_Profile_Page}`,
      description1:
        "Customized a personal online profile by adding graphics, customizing text, and improving the look of a web page using Cascading Style Sheets, the formatting language of the web.",
      description2:
        "Shared the finished project on GitHub, a website used by teams of programmers to share and work on programming code.",
    },
    {
      name: "Mobile-first Responsive Layout",
      href: "https://jogusland.github.io/portfolio_project_2/",
      src: `${Mobile_first_Responsive_Layout}`,
      description1:
        "Designed web pages that look and function well on multiple screen sizes.",
      description2:
        "Using HTML, CSS, and responsive design, I created a mobile-first web page with a layout that adjusts to fit mobile phones, tablets, and desktop displays.",
    },
    {
      name: "An Online Registration Form",
      href: "https://jogusland.github.io/portfolio_project_3/",
      src: `${An_Online_Registration_Form}`,
      description1:
        "Web forms appear everywhere online: forms allow users to order books, sign up for websites, and post to Facebook.",
      description2:
        "This project challenged me to build a responsive, mobile-first registration form using a variety of HTML form elements.",
    },
    {
      name: "Interactive Photo Gallery",
      href: "https://jogusland.github.io/portfolio_project_5/",
      src: `${Interactive_Photo_Gallery}`,
      description1:
        "Used HTML, CSS and the popular programming language JavaScript to create an interactive, searchable gallery of photos.",
      description2: "",
    },
    {
      name: "Web Style Guide",
      href: "https://jogusland.github.io/portfolio_project_4/",
      src: `${Web_Style_Guide}`,
      description1:
        "Sass is an important tool in a modern Front End Web Developer’s toolbox.",
      description2:
        "It's used by many developers to make styling web pages with CSS easier and faster.",
      description3:
        "I created a style guide that can act as your own personal and custom Bootstrap that you can drop into any of your projects to speed up styling, layout and development in general.",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h1 id="projects">Projects</h1>
        <ProjectHandler lists={ProjectList} />
      </div>
    </div>
  );
};

export default Projects;
