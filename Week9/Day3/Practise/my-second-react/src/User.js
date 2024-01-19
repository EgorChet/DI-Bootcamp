const User = (props) => {
  console.log(props);
  const { name, email, id } = props.userinfo;
  return (
    <>
      <p>ID:{id}</p>
      <h1> Name: {name} </h1>
      <h2> Email: {email} </h2>
    </>
  );
};

export default User;
