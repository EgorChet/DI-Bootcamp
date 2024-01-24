import { Component } from "react";
import Form from "./Form";

class UserAnswers extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false,
    };
  }

  handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    return <Form handleChange={this.handleChange} {...this.state} />;
  }
}

export default UserAnswers;
