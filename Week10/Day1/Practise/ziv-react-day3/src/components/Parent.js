const Parent = (props) => {
    console.log(props);
    // return <h1>Parent</h1>;
    if(props.auth === 'admin')
        return props.children;
    return <h>not authorized to see this</h>
  };
  export default Parent;