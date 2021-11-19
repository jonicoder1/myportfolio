import Header from "./Body/Header";
import AboutMe from "./Body/AboutMe";
import Certificate from "./Body/Certificate";
import Projects from "./Body/Projects";
import Hobbies from "./Body/Hobbies";
import Contacts from "./Body/Contacts";

import classes from "./Body.module.css";

const Body = () => {
  return (
    <html lang="en">
      <body class="body bg-dark text-white">
        <div class="grid-container">
          <Header />
          <AboutMe />
          <Certificate />
          <Projects />
          <Hobbies />
          <Contacts />
        </div>
      </body>
    </html>
  );
};

export default Body;
