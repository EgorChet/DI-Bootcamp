import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className='book-card card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
            className='card-img'
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h3 className='card-title'>{book.volumeInfo.title}</h3>
            <p className='card-text'>Authors: {book.volumeInfo.authors?.join(", ")}</p>
            <p className='card-text'>
              Published Year: {new Date(book.volumeInfo.publishedDate).getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

// import "./BookCard.css";

// const BookCard = ({ book }) => {
//   return (
//     <div className='book-card'>
//       <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
//       <div className='book-info'>
//         <h3>{book.volumeInfo.title}</h3>
//         <p>{book.volumeInfo.authors?.join(", ")}</p>
//         <p>{new Date(book.volumeInfo.publishedDate).getFullYear()}</p>
//       </div>
//     </div>
//   );
// };

// export default BookCard;
