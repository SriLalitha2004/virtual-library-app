import { Link } from 'react-router-dom';
import './BookCard.css' 

function BookCard({ book }) {
  return (
    <div>
      <h3 className='heading3'>{book.title}</h3>
      <p className='para'>{book.author}</p>
      <img src={book.imageUrl} alt={book.title} className='image' />
      <img src={book.imageUrl2} alt={book.title} className='image' />
      <img src={book.imageUrl3} alt={book.title} className='image' /><br />
      <Link to={`/book/${book.id}`} className='details'>Details</Link>
    </div>
  );
}

export default BookCard;
