import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch = (error, errorInfo) => {
    console.log(error);
    this.setState({hasError:true})
  };

  render() {
    if(this.state.hasError){
        return null
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
