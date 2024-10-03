import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyLibrary from './pages/MyLibrary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/my-library" element={<MyLibrary />} />
      </Routes>
    </Router>
  );
}

export default App;
