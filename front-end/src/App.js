import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Searchbar from './Components/SearchBar'


const App = () => {
  const [books, setBooks] = useState(null)

  return (
    <Container>
      <h1>My Library</h1>
      <Searchbar setBooks={setBooks}/>
    </Container>
  );
}

export default App;
