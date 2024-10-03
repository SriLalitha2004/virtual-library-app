import React, { useState } from 'react';
import books from '../data/books.json';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="book-list">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
