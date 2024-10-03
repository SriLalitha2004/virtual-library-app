import React from 'react';

const BookCard = ({ book, handleAddToLibrary }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={() => handleAddToLibrary(book)}>Add to Library</button>
    </div>
  );
};

export default BookCard;