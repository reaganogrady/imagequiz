import 'bootstrap/dist/css/bootstrap.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Button} from 'react-bootstrap';


function Score(props) {
    return(
        <Jumbotron>
        <h1> Your score: {props.score} </h1>
        <br></br>
        <Button type = "submit" variant="dark" onClick={props.retry()}> Retry Quiz </Button>
        
        <p></p>
        <Button type= "submit" variant = "light" onClick={props.home()}>Home</Button>
        </Jumbotron>
    );
}

export default Score;