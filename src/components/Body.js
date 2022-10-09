import MainHeader from "./Body/MainHeader/MainHeader";
import AboutMe from "./Body/AboutMe/AboutMe";
import Services from "./Body/WebServices/Services";
import Skills from "./Body/Skills/Skills";
import Certificate from "./Body/Certificate/Certificate";
import Projects from "./Body/Projects/Projects";
import Social from "./Body/Social/Social";
import Footer from "./Body/Footer/Footer";
import ForSale from "./Body/ForSale/ForSale";
import Contact from "./Body/Contact/Contact";
import StripeContainer from "./Payment/StripeContainer";
import Hobbies from "./Body/AboutMe/Hobbies";

import classes from "./body.module.css";

import { Route } from "react-router-dom";

const Body = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Route path="/myportfolio">
          <AboutMe />
          <Certificate />
          <Skills />
          <Projects />
          <Hobbies />
          <Contact />
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
        <Route path="/Services">
          <Services />
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
        <Route path="/ForSale">
          <ForSale />
        </Route>
        <Route path="/Social">
          <Social />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/TestSale">
          <StripeContainer />
        </Route>
      </main>
      <Footer className={classes.footer} />
    </>
  );
};

export default Body;
