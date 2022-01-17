import Header from "./Body/Header";
import AboutMe from "./Body/AboutMe";
import Certificate from "./Body/Certificate";
import Projects from "./Body/Projects";
import Hobbies from "./Body/Hobbies";
import Contacts from "./Body/Contacts";
import Form from "./Body/Form";

import classes from "./Body.module.css";

const Body = () => {
  return (
    <html lang="en">
      <body className="body bg-dark text-white">
        <div className="grid-container">
          <Header />
          <AboutMe />
          <Certificate />
          <Projects />
          <Hobbies />
          <Contacts />
          <Form />
        </div>
      </body>
    </html>
  );
};

export default Body;
