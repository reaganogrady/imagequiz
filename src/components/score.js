import 'bootstrap/dist/css/bootstrap.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap';


function Score(props) {
    const history = useHistory();

    let retry = () => {
        history.push('/quiz');
    }

    let home = () => {
        history.push('/home');
    }

    return(
        <Jumbotron>
        <h1> Your score: </h1>
        <br></br>
        <Button type = "submit" variant="dark" onClick={retry}> Retry Quiz </Button>
        
        <p></p>
        <Button type= "submit" variant = "light" onClick={home}>Home</Button>
        </Jumbotron>
    );
}

export default Score;