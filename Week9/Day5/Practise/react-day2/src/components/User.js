// import { userStyle } from "./styling";
import "./User.css";
// import Button from "react-bootstrap/Button";

import React from "react";

// class User extends React.Component {
//   // constructor(){
//   //   super();
//   // }
//   render() {
//     const { name, email, id, username } = this.props.userinfo;
//     return (
//       <div className='userstyle'>
//         <img src={`https://robohash.org/${id}?size=150x150`} alt='' />
//         <h2>{name}</h2>
//         <h3>{email}</h3>
//         <h4>{username}</h4>
//       </div>
//     );
//   }
// }

const User = (props) => {
  const { name, email, id, username } = props.userinfo;

  return (
    <div className='tc bg-light-green br3 ma2 dib pa2 bw2 grow shadow-5'>
      <img src={`https://robohash.org/${id}?size=150x150`} alt='' />
      <h2>{name}</h2>
      <h3>{email}</h3>
      <h4>{username}</h4>
    </div>
  );
};

export default User;
