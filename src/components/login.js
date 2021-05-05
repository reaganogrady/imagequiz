import 'bootstrap/dist/css/bootstrap.css'
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Login(props) {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    let onLoginSubmitted = () => {
        // Influenced by lecture
        if (user.trim().length === 0 || pass.trim().length === 0) {
            return;
        }
        props.onLoggedIn(user);
        history.push('/');
    }

    let onSetUser = (event) =>{
        setUser(event.target.value);
    }

    let onSetPass = (event) =>{
        setPass(event.target.value);
    }

    return(
    <Form className="login" onSubmit={onLoginSubmitted}>
        <h1> LOGIN</h1>
        <Form.Group>
          <Form.Label>Email Address</Form.Label> 
          <Form.Control type="email" placeholder="Email" onChange ={onSetUser}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange ={onSetPass}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    );
}

export default Login;