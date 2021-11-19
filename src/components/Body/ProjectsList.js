import classes from "./Projects.module.css";

const ProjectHandler = (props) => {
  return (
    <div>
      <div className="container">
        <div className={classes["row"]}>
          {props.lists.map((project) => (
            <div className={classes["card"]}>
              <div className={classes["inner"]}>
                <a href={project.href} className={classes["lead"]}>
                  <h2>{project.name}</h2>
                  <img
                    src={project.src}
                    class="
                  img-project img-fluid img-thumbnail
                  rounded
                  mb-3
                  d-none d-sm-block
                "
                    alt={project.name}
                  />
                </a>
                <div className={classes["description"]}>
                  <ol>
                    <li>{project.description1}</li>
                    <li>{project.description2}</li>
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectHandler;
