import data from "./data.json";
import { Component } from "react";

class Example1 extends Component {
  renderSocialMedias() {
    return (
      <ul>
        {data.SocialMedias.map((link, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a href={link} style={{ textDecoration: "none", color: "blue" }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h2>Social Media Links</h2>
        {this.renderSocialMedias()}
      </div>
    );
  }
}

export default Example1;
