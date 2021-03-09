import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Form, Label, Input, FormControl} from 'react-bootstrap';

function App() {
  return (
    <Form className="App">
        <h1> LOGIN </h1>
        <Form.Group>
          <Form.Label>Email Address</Form.Label> 
          <Form.Control type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  );
}

export default App;
