import Header from "./Body/Header";
import AboutMe from "./Body/AboutMe";
import Certificate from "./Body/Certificate";
import Projects from "./Body/Projects";
import Hobbies from "./Body/Hobbies";
import Social from "./Body/Social";
import Contact from "./Body/Contact";

import classes from "./Body.module.css";
import Skills from "./Body/Skills";

const Body = () => {
  return (
    <div lang="en">
      <div className={`${classes.body} body bg-dark text-white`}>
        <div className="grid-container">
          <Header />
          <AboutMe />
          <Skills />
          <Certificate />
          <Projects />
          <Hobbies />
          <Social />
          {/* <Contact /> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
