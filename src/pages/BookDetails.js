import { useParams } from 'react-router-dom';
import books from '../data/books.json';
import {useContext} from 'react';
import { LibraryContext } from '../context/LibraryContext';

function BookDetails() {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));
  const { addToLibrary, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h2 className='heading3'>{book.title}</h2>
      <p className='para'>{book.description}</p>
      <p className='para'>{book.rating}</p>
      <p className='para'>{book.genre}</p>
      <p className='para'>{book.publication_year}</p>
      <button className="button1" onClick={() => addToLibrary(book)}>Add to My Library</button>
      <button className="button1" onClick={() => removeFromLibrary(id)}>Remove from My Library</button>
    </div>
  );
}

export default BookDetails;
