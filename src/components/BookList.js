import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, handleAddToLibrary }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} handleAddToLibrary={handleAddToLibrary} />
      ))}
    </div>
  );
};

export default BookList;