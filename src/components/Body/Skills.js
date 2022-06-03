import classes from "./Skills.module.css";

const Skills = () => {
  let newList = [];

  const td = [
    {
      name: "Javascript",
    },
    {
      name: "Reactjs",
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
      name: "Github",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "Responsive Design",
    },
  ];

  td.map((item) => {
    return newList.push(<td className={classes.td}>{item.name}</td>);
  });

  return (
    <div className={classes.container}>
      <table>
        <tbody>
          <tr className={classes.tr}>{newList}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
