import './SearchBar.css'
function SearchBar({ setSearchTerm }) {
    return (
      <input
        className="input"
        type="text"
        placeholder="Search by title, author, or genre"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
}  
export default SearchBar;