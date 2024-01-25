import BookCard from "../BookCard/BookCard";
import "./BookList.css";

const BookList = ({ books }) => {
  return (
    <div className='book-list row'>
      {books.map((book, index) => (
        <div key={index} className='col-lg-6 mb-4'>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;

// import BookCard from "../BookCard/BookCard"
// import "./BookList.css";

// const BookList = ({ books }) => {
//   return (
//     <div className='book-list'>
//       {books.map((book, index) => (
//         <BookCard key={index} book={book} />
//       ))}
//     </div>
//   );
// };

// export default BookList;
