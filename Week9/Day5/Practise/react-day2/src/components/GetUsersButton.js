const GetUsersButton = (props) => {
    console.log(props);
  return (
    <div>
      <button onClick={props.getUsersFunc}>Get Users</button>
    </div>
  );
};
export default GetUsersButton;
