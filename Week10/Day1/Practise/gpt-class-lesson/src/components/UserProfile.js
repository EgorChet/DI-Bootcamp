// Old way using constructor
/*
constructor(props) {
  super(props);
  this.state = { userData: null };
  this.fetchUserData = this.fetchUserData.bind(this);
}
*/

import { Component } from "react";

class UserProfile extends Component {
  // Initializing state with userData as null and loading as true
  state = { userData: null, loading: true };

  // Lifecycle method: runs after the component is mounted to the DOM
  componentDidMount() {
    // Fetch user data when the component mounts
    this.fetchUserData(this.props.userId);
  }

  // Lifecycle method: runs when the component receives new props or state
  componentDidUpdate(prevProps, prevState) {
    // Check if userId prop has changed
    if (this.props.userId !== prevProps.userId) {
      // Set loading to true when new data is being fetched
      this.setState({ loading: true });
      // Fetch new user data for the new userId
      this.fetchUserData(this.props.userId);
    }
  }

  // Method to fetch user data from the API
  fetchUserData = async (userId) => {
    try {
      // Make an HTTP GET request to the JSONPlaceholder API
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      // Parse the JSON response
      const data = await response.json();
      // Update the state with the fetched data and set loading to false
      this.setState({ userData: data, loading: false });
    } catch (error) {
      // Log any errors to the console and set userData to null and loading to false
      console.error("Error fetching data:", error);
      this.setState({ userData: null, loading: false });
    }
  };

  // Lifecycle method: renders the component's UI
  render() {
    const { userData, loading } = this.state;
    return (
      <div>
        <h1>User Profile</h1>
        {loading ? (
          <p>Loading...</p>
        ) : userData && userData.name && userData.email ? (
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* Additional user data can be added here */}
          </div>
        ) : (
          <p>No user data found.</p>
        )}
      </div>
    );
  }
}

export default UserProfile;
