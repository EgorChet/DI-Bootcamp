import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      inputValue: "",
      responseMessage: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3001/api/hello");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const message = await response.text();
      console.log("Received message:", message);
      this.setState({ message });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    try {
      const response = await fetch("http://localhost:3001/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseMessage = await response.text();
      this.setState({ responseMessage });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6 mx-auto'>
            <div className='card'>
              <div className='card-header text-center'>Welcome to My App</div>
              <div className='card-body'>
                <h1 className='card-title text-center'>{this.state.message}</h1>
                <h2 className='text-center'>Post to Server:</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter something...'
                      value={this.state.inputValue}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                  </div>
                </form>
                {this.state.responseMessage && (
                  <p className='mt-3 text-center'>{this.state.responseMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
