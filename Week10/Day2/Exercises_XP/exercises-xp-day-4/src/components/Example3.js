import { Component } from "react";
import data from "./data.json";

class Example3 extends Component {
  renderExperiences() {
    return data.Experiences.map((experience, index) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <h3>{experience.companyName}</h3>
        <img
          src={experience.logo}
          alt={experience.companyName}
          style={{ width: "100px", height: "100px" }}
        />
        <a href={experience.url} target='_blank' rel='noopener noreferrer'>
          <br/>{experience.companyName}
        </a>
        <div>
          {experience.roles.map((role, roleIndex) => (
            <div key={roleIndex} style={{ marginTop: "10px" }}>
              <h4>{role.title}</h4>
              <p>{role.description}</p>
              <p>
                {role.startDate} - {role.endDate}
              </p>
              <p>Location: {role.location}</p>
            </div>
          ))}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {this.renderExperiences()}
      </div>
    );
  }
}

export default Example3;
