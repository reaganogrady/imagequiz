import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Quiz from './quiz.js';
import { useHistory } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';


function Score() {
    const history = useHistory();

    return(
        <Jumbotron>
        <h1> Your score: </h1>
        <br></br>
        <Button type = "submit" variant="dark" class="retry"> Retry Quiz </Button>
        </Jumbotron>
    );
}

export default Score;