import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={`${classes} container`}>
      <table className="container">
        <tbody>
          <tr className="tr-container">
            <td>Javascript</td>
            <td>Reactjs</td>
            <td>HTML</td>
            <td>CSS</td>
            <td>GIT</td>
            <td>JSON</td>
            <td>SASS</td>
            <td>Github</td>
            <td>Bootstrap</td>
            <td>Responsive Design</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default Skills;
