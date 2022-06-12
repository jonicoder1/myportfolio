import MainHeader from "./Body/MainHeader";
import AboutMe from "./Body/AboutMe/AboutMe";
import WebServices from "./Body/WebServices";
import Skills from "./Body/Skills";
import Certificate from "./Body/Certificate";
import Projects from "./Body/Projects";
import Social from "./Body/Social";
import Footer from "./Body/Footer";
import Contact from "./Body/Contact";

import classes from "./body.module.css";

import { Route } from "react-router-dom";

const Body = () => {
  return (
    <div className={classes.container} lang="en">
      <div>
        <MainHeader />
        <main>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
          <Route path="/WebServices">
            <WebServices />
          </Route>
          <Route path="/Certificate">
            <Certificate />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Social">
            <Social />
          </Route>
          <Route path="/Contact">{/* <Contact /> */}</Route>
          <Route path="/Footer">
            <Footer />
          </Route>
        </main>
      </div>
    </div>
  );
};

export default Body;
