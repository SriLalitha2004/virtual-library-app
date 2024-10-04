import { createContext, useState } from 'react';

export const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (book) => {
    setLibrary((prevLibrary) => {
        console.log('Current Library:', prevLibrary);
        const isAlreadyInLibrary=prevLibrary.some(b=>b.id===book.id);
    if(!isAlreadyInLibrary){
        console.log(`adding book: ${book.title}`);
        alert(`Book added: ${book.title}`);
        return [...prevLibrary, book]
    }else{
        console.log(`${book.title}: is already in the library`);
        alert(`${book.title} Book already added to the library`);
        return prevLibrary
    };
   });
}

  const removeFromLibrary = (id) => {
    setLibrary((prevLibrary) => {
        console.log(`removing book with id: ${id}`);
        alert(`Book deleted ${id}`)
        return prevLibrary.filter(book => book.id !== id)
  });
  };

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
}
