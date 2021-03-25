import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './home';
import Login from './login';
import Quiz from './quiz';
import Score from './score.js';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
   <HashRouter>
      <Switch>
        <Route exact path ="/" component= { Login } />
        <Route path="/home" component={ Home } />
        <Route path="/quiz.js" component={ Quiz } />
        <Route path="/score.js" component = { Score } />
      </Switch>
   </HashRouter>
  );
}

export default App;
