import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Searchbar from './Components/SearchBar'
import BookGrid from './Components/BookGrid'


const App = () => {
  const [books, setBooks] = useState([])

  return (
    <Container >
      <h1 className="mt-3 text-center" >My Library</h1>
      <Searchbar setBooks={setBooks}/>
      <BookGrid books={books} />
    </Container>
  );
}

export default App;
