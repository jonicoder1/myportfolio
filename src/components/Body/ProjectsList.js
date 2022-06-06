import classes from "./Projects.module.css";
import Card from "../UI/Card";

const ProjectHandler = (props) => {
  const propsList = props.lists.map((project) => (
    <Card key={Math.random()}>
      <div className={classes.card}>
        <div className={classes.inner}>
          <a
            href={project.href}
            className={classes.lead}
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.h3}>
              <h3>{project.name}</h3>
            </div>
            <img
              src={project.src}
              className="img-project img-fluid img-thumbnail rounded mb-3 d-none d-sm-block"
              alt={project.name}
            />
          </a>
          <div className={classes.description}>
            <ol>
              <li>{project.description1}</li>
              <li>{project.description2}</li>
            </ol>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <div className="container">
      <div className={classes.cardsContainer}>{propsList}</div>
    </div>
  );
};

export default ProjectHandler;
