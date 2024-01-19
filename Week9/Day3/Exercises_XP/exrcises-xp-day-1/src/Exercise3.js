import { Component } from "react";
import "./Exercise3.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Exercise extends Component {
  render() {
    return (
      <>
        <h1 style={style_header}>This is H1</h1>
        <p className='para'>This is a Paragraph</p>
        <a href='#'>this is a link</a>
        <form>
          <label htmlFor='input' style={{ display: "block", marginTop: "20px" }}>
            Please enter your name:
          </label>
          <input id='input' type='text' />
          <input type='submit' />
        </form>
        <p>
          <strong>This is an IMG</strong>
        </p>
        <img src='https://k2bindia.com/wp-content/uploads/2015/08/React.png' alt='React Logo' />
        <ul style={{ marginTop: "20px" }}>
          <strong> This is a List</strong>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
      </>
    );
  }
}

export default Exercise;
