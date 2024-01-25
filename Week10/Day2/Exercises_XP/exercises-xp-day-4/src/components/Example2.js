import data from "./data.json";
import { Component } from "react";

class Example2 extends Component {
  renderSkills() {
    return data.Skills.map((skillArea, index) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <h5>{skillArea.Area}</h5>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {skillArea.SkillSet.map((skill, skillIndex) => (
            <li key={skillIndex} style={{ marginBottom: "10px" }}>
              {skill.Name} {skill.Hot ? "(Hot)" : ""}
            </li>
          ))}
        </ul>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h2>Skills</h2>
        {this.renderSkills()}
      </div>
    );
  }
}

export default Example2;
