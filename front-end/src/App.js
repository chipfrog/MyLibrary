import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Searchbar from './Components/SearchBar'
import BookGrid from './Components/BookGrid'
import Navigation from './Components/NavBar'
import Login from './Views/Login'
import BookInfo from './Views/BookInfo'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const App = () => {
  const [books, setBooks] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [bookInfo, setBookInfo] = useState(null)

  const props = {
    username,
    setUsername,
    password,
    setPassword,
    user,
    setUser
  }

  const Home = () => {
    return (
        <h1 className="mt-3 text-center">My Library</h1>
    )
  }

  if (user === null) {
    return (
      <Container>
        <Login {...props} />
      </Container>
    )
  }
  

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/search/:etag">
          <BookInfo bookInfo={bookInfo}/>
        </Route>
        <Route path="/search">
          <h2 className="mt-3 text-center">Google Books Search</h2>
          <Searchbar setBooks={setBooks}/>
          <BookGrid books={books} setBookInfo={setBookInfo}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>       
    </Router>
  );
}

export default App;
