import MainHeader from "./Body/MainHeader/MainHeader";
import AboutMe from "./Body/AboutMe/AboutMe";
import Skills from "./Body/Skills/Skills";
import Certificate from "./Body/Certificate/Certificate";
import Projects from "./Body/Projects/Projects";
import Footer from "./Body/Footer/Footer";
import Contact from "./Body/Contact/Contact";
import Hobbies from "./Body/AboutMe/Hobbies";
import classes from "./body.module.css";
import { Route } from "react-router-dom";

const Body = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Route path="/myportfolio">
          <Projects />
          <Skills />
          <Certificate />
          <AboutMe />
          <Hobbies />
          <Contact />
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
        <Route path="/Skills">
          <Skills />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Certificate">
          <Certificate />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </main>
      <Footer className={classes.footer} />
    </>
  );
};

export default Body;
