import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './home';
import Login from './login';
import Quiz from './quiz';
import Score from './score';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
   <HashRouter>
      <Switch>
        <Route exact path ="/" component= { Login } />
        <Route path="/home" component={ Home } />
        <Route path="/quiz" component={ Quiz } />
        <Route path="/score" component = { Score } />
      </Switch>
   </HashRouter>
  );
}

export default App;
