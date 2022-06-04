import Header from "./Body/Header";
import AboutMe from "./Body/AboutMe";
import WebServices from "./Body/WebServices";
import Skills from "./Body/Skills";
import Certificate from "./Body/Certificate";
import Projects from "./Body/Projects";
import Hobbies from "./Body/Hobbies";
import Social from "./Body/Social";
import Contact from "./Body/Contact";

const Body = () => {
  return (
    <div lang="en">
      <div className={`text-white`}>
        <div>
          <Header />
          <AboutMe />
          <WebServices />
          <Certificate />
          <Skills />
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
