import "./User.css";
import Button from 'react-bootstrap/Button';
import React from "react";

class User extends React.Component {
    // constructor() {
    //     super();
    //     }
        render() {
            const { name, email, id, username } = this.props.userinfo;

            return (
                <div className='userstyle'>
                    <div className='tc bg-light-green br3 ma2 dib bw2 grow shadow-10'>
                        <img src={`https://robohash.org/${id}?size=100x100`} alt='' />
                        <h2>{name}</h2>
                        <h3>{email}</h3>
                        <h4>{username}</h4>
                        <Button variant="primary" size="lg" block>More Info</Button>
                    </div>
                </div>
            );
        }
    
}


// const User = (props) => {
//   console.log(props);

//   const { name, email, id, username } = props.userinfo;

//   return (
//     // <div className='userstyle'>
//     <div className='tc bg-light-green br3 ma2 dib bw2 grow shadow-10'>
//       <img src={`https://robohash.org/${id}?size=100x100`} alt='' />
//       <h2>{name}</h2>
//       <h3>{email}</h3>
//       <h4>{username}</h4>
//       {/* <Button variant="primary" size="lg" block>More Info</Button> */}
//     </div>
//   );
// };

export default User;
