import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Searchbar from './Components/SearchBar'
import Book from './Components/Book'


const App = () => {
  const [books, setBooks] = useState([])

  return (
    <Container>
      <h1>My Library</h1>
      <Searchbar setBooks={setBooks}/>
      {books.length > 0 && 
        books.map(book => {
          return (
            <Book info={book} key={book.id}/>
          )
      })}
    </Container>
  );
}

export default App;
