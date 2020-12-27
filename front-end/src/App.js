import { Container } from 'react-bootstrap';
import Searchbar from './Components/SearchBar'
import BookGrid from './Components/BookGrid'
import Navigation from './Components/NavBar'
import Login from './Views/Login'
import BookInfo from './Views/BookInfo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
  const user = useSelector(state => state.login.user)

  const Home = () => {
    return (
        <div>
          <h1 className="mt-3 text-center">My Library</h1>
        </div>
    )
  }

  if (user === null) {
    return (
      <Container>
        <Login />
      </Container>
    )
  }

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/search/:etag">
          <BookInfo />
        </Route>
        <Route path="/search">
          <h2 className="mt-3 text-center">Google Books Search</h2>
          <Searchbar />
          <BookGrid />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>       
    </Router>
  );
}

export default App;
