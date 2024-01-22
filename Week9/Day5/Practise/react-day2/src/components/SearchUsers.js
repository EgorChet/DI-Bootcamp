import { useState } from "react";

const SearchUsers = (props) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <input onChange={(e) => {
        setSearchText(e.target.value);
        props.search(e.target.value)
        }} />
      <button onClick={() => props.search(searchText)}>Search</button>
    </div>
  );
};
export default SearchUsers;
