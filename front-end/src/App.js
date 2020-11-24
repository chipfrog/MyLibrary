import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Searchbar from './Components/SearchBar'
import BookGrid from './Components/BookGrid'
import Login from './Views/Login'


const App = () => {
  const [books, setBooks] = useState([])
  const [user, setUser] = useState(null)

  if (user === null) {
    return (
      <Container>
        <Login setUser={setUser}/>
      </Container>
    )
  }

  return (
    <Container >
      <h1 className="mt-3 text-center" >My Library</h1>
      <Searchbar setBooks={setBooks}/>
      <BookGrid books={books} />
    </Container>
  );
}

export default App;
