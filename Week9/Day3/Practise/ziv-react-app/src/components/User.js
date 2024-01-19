const User = (props) => {
    console.log(props);
  const {name, email, id} = props.userinfo;
  return (
    <>
      <p>{id}</p>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
    </>
  );
};
export default User;
