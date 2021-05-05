import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/home.js';
import Login from './components/login';
import Quiz from './components/quiz';
import Score from './components/score';
import NavigationBar from './components/navibar';
import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import  Container from 'react-bootstrap/Container'

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || '');

  let onLoggedIn = (username) => {
    localStorage.setItem('user', username);
    setUser(username);
  }

  return (
   <HashRouter>
     <Container fluid>
      
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/quiz" component={ Quiz } />
        <Route path="/score" component = { Score } />
        <Route path ="/login"> <Login onLoggedIn ={onLoggedIn}/></Route>
      </Switch>
      </Container>
   </HashRouter>
  );
}

export default App;
