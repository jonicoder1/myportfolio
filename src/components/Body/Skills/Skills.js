import classes from "./Skills.module.css";

const Skills = () => {
  let newList = [];

  const circle = [
    {
      name: "Javascript",
    },
    {
      name: "Reactjs",
    },
    {
      name: "Redux",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "GIT",
    },
    {
      name: "JSON",
    },
    {
      name: "SASS",
    },
    {
      name: "Figma",
    },
    {
      name: "SASS",
    },
    {
      name: "Stripe",
    },
    {
      name: "Github",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "Responsive Design",
    },
  ];

  circle.map((item) => {
    const randomNumber = Math.floor(Math.random() * 283);
    return newList.push(
      <div
        className={classes.circle}
        key={Math.random()}
        style={{
          backgroundColor: "rgb(8,169," + randomNumber + ")",
        }}
      >
        <p className={classes.itemName}>{item.name}</p>
      </div>
    );
  });

  return (
    <div className={classes.mainContainer}>
      <h1>Skills</h1>
      <div className={classes.skillsListContainer}>{newList}</div>
    </div>
  );
};

export default Skills;
