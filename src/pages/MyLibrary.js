import { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

function MyLibrary() {
  const { library, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h2>My Library</h2>
      {library.length===0 && <p>No books in library yet</p>}
      {library.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default MyLibrary;
