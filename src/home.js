import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {ListGroup} from 'react-bootstrap';
import flowers from './data';

function Home() {
    const output = [];
    for (var i = 0; i < flowers.length; i++) {
        output.push(<ListGroup.Item><img src={flowers[i].picture}></img><p>{flowers[i].name}</p></ListGroup.Item>)
    }
    return(
        <ListGroup>
            {output}
       </ListGroup>
    );
}

export default Home;