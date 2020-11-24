import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Searchbar from './Components/SearchBar'
import Book from './Components/Book'
import BookGrid from './Components/BookGrid'


const App = () => {
  const [books, setBooks] = useState([])

  // useEffect(() => {
  //   setBooks(books)
  // }, [books])

  return (
    <Container>
      <h1>My Library</h1>
      <Searchbar setBooks={setBooks}/>
      <BookGrid books={books} />

      {/* {books.length > 0 && 
        books.map(book => {
          return (
            <Book info={book} key={book.id}/>
          )
      })} */}
    </Container>
  );
}

export default App;
