import { useSelector } from "react-redux";

const SecretTasks = (props) => {
  const tasks = useSelector((state) => state.todos);

  return (
    <>
      <h1>SecretTasks</h1>
      {tasks.map((task) => {
        return <div>{task.text}</div>;
      })}
    </>
  );
};
export default SecretTasks;
