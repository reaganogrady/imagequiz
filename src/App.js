import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/home.js';
import Login from './components/login';
import Quiz from './components/quiz';
import Score from './components/score';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [quizID, setQuizID] = useState(localStorage.getItem('quizID') || 0);

  let gotoQuiz = (quizID) => {
    localStorage.setItem('quizID', quizID);
    setQuizID(quizID);
  }

  let onLoggedIn = (username) => {
    localStorage.setItem('user', username);
    setUser(username);
  }

  let logOut = () => {
    setUser('');
    localStorage.setItem('user', '');
  }


  return (
   <HashRouter>
       <Navbar bg ="light">
            <Navbar.Brand>Image Quiz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ="mr-auto">
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  {user === '' ?
                    <Link className='link' to="/login">Login</Link>
                    :
                    <Link className='link' onClick={logOut}>Logout</Link>
                  }
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>

        </Navbar>
        <Switch>
          <Route exact path="/"> <Home gotoQuiz={gotoQuiz}/> </Route>
          <Route path="/quiz"> <Quiz quizID={quizID} /> </Route>
          <Route path="/score" component = { Score } />
          <Route path ="/login"> <Login onLoggedIn ={onLoggedIn}/></Route>
        </Switch>
   </HashRouter>
  );
}

export default App;
