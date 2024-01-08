// const { getUsers } = require("./script.js");
import { getUsers } from "./script.js";

getUsers().then((res) => {
  res.forEach((item) => {
    console.log(item.name);
  });
});
