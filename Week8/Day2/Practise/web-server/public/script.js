console.log("Hello World");

const getdata = async () => {
  try {
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    render(data);
  } 
  catch (error) {
    console.log(error);
  }
};

getdata();

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>
            ${item.name} ${item.email}
        </div>`;
  });
  document.getElementById("root").innerHTML = html.join(" ");
};
