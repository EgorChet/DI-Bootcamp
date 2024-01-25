import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import BookList from "./components/BookList/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [randomBooks, setRandomBooks] = useState([]);

  // Function to fetch random books
  const fetchRandomBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=12`
      );
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }
      const data = await response.json();
      setRandomBooks(data.items);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRandomBooks(); // Fetch random books when the component mounts
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }
      const data = await response.json();
      sortBooks(data.items, sortOrder);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const sortBooks = (books, order) => {
    const sortedBooks = books.sort((a, b) => {
      const dateA = new Date(a.volumeInfo.publishedDate);
      const dateB = new Date(b.volumeInfo.publishedDate);
      return order === "desc" ? dateB - dateA : dateA - dateB;
    });
    setBooks([...sortedBooks]);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    sortBooks(books, event.target.value);
  };

  const handleSearchInput = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='App'>
      <Header />
      <br />
      <br />
      <div className='container mt-4'>
        <SearchBox onSearch={handleSearch} onSearchInput={handleSearchInput} />
        <div className='my-3'>
          <label className='mr-2'>Sort by:</label>
          <br />
          <br />
          <select
            className='form-control form-control-sm w-auto d-inline'
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value='desc'>Newest First</option>
            <option value='asc'>Oldest First</option>
          </select>
          <br />
          <br />
        </div>
        {error && <p className='text-danger'>{error}</p>}
        {isLoading ? <p>Loading...</p> : <BookList books={searchQuery ? books : randomBooks} />}
      </div>
    </div>
  );
};

export default App;
