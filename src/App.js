import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './home';
import Login from './login';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
   <HashRouter>
      <Switch>
        <Route exact path ="/" component= { Login } />
        <Route path="/home" component={ Home } />
      </Switch>
   </HashRouter>
  );
}

export default App;
