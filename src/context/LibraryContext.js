import { createContext, useState } from 'react';

export const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (book) => {
    setLibrary(prevLibrary => [...prevLibrary, book]);
  };

  const removeFromLibrary = (id) => {
    setLibrary(prevLibrary => prevLibrary.filter(book => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
}
