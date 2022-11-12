import MainHeader from "./components/Body/MainHeader/MainHeader";
import AboutMe from "./components/Body/AboutMe/AboutMe";
import Skills from "./components/Body/Skills/Skills";
import Certificate from "./components/Body/Certificate/Certificate";
import Projects from "./components/Body/Projects/Projects";
import Footer from "./components/Body/Footer/Footer";
import Contact from "./components/Body/Contact/Contact";
import Hobbies from "./components/Body/AboutMe/Hobbies";
import Home from "./components/Body/Home/Home";

import { Route } from "react-router-dom";
import React from "react";
import "./css/styles.css";
import "./css/variables.css";

function App() {
  return (
    <>
      <header>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jonathan L Guerrero - Portfolio</title>
        {/* stylesheets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
        <link href="css/styles.css" rel="stylesheet" />
      </header>
      <MainHeader />
      <main>
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
        <Route path="/Hobbies">
          <Hobbies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </main>
      <Footer />
    </>
  );
}

export default App;
