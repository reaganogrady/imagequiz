import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {ListGroup} from 'react-bootstrap';
import flowers from './flowers';
import { useHistory } from 'react-router';

function Home() {
    const history = useHistory();

    let onImageClick = () => {
        history.push('/quiz.js');
    }

    const output = [];
    for (var i = 0; i < flowers.length; i++) {
        output.push(<ListGroup.Item><img src={flowers[i].picture} 
            onClick={onImageClick} alt={flowers[i].name}></img>
            <p>{flowers[i].name}</p></ListGroup.Item>)
    }
    return(
        <ListGroup>
            {output}
       </ListGroup>
    );
}

export default Home;