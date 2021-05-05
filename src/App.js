import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/home.js';
import Login from './components/login';
import Quiz from './components/quiz';
import Score from './components/score';
import NaviBar from './components/navbar';
import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState('');

  let onLoggedIn = (user) => {
    setUser(user);
  }

  return (
   <HashRouter>
     <Container fluid>
      <NaviBar user = {user}/>
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
