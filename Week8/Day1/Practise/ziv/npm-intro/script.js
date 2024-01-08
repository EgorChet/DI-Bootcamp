// const axios = require("axios");
import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


// export default getUsers
// export const hello = () => {
//     console.log('hello');
// }

// module.exports = {
//   getUsers,
// };
