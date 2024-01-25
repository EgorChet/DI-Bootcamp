import React from "react";
import "./SearchBox.css";

const SearchBox = ({ onSearchInput, onSearch }) => {
  const handleInputChange = (event) => {
    onSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit} className="rounded-search-form">
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search for books"
          className="rounded-search-input"
          aria-label="Search for books"
        />
        <button type="submit" className="rounded-search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;


// import "./SearchBox.css";

// const SearchBox = ({ onSearchInput, onSearch }) => {
//   const handleInputChange = (event) => {
//     onSearchInput(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch();
//   };

//   return (
//     <div className='search-box'>
//       <form onSubmit={handleSubmit}>
//         <input type='text' onChange={handleInputChange} placeholder='Search for books' />
//         <button type='submit'>Search</button>
//       </form>
//     </div>
//   );
// };

// export default SearchBox;
