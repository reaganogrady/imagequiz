import 'bootstrap/dist/css/bootstrap.css'
import {ListGroup} from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../comms/api';
import { useState, useEffect } from 'react';

function Home() {
    const history = useHistory();
    const [flowers, setFlowers] = useState([]);

    let onImageClick = () => {
        history.push('/quiz');
    }

    useEffect(() => {
        //Followed from lecture
        if (flowers.length === 0) {
            api.getFlowers().then(x => setFlowers(x)).catch(e => console.log(e));
        }
    });

    const output = [];
    for (var i = 0; i < flowers.length; i++) {
        output.push(<ListGroup.Item><img src={flowers[i].picture} 
            onClick={onImageClick} alt={flowers[i].name}></img>
            <p>{flowers[i].name}</p></ListGroup.Item>)
    }

    return(
        <ListGroup>
            <h1>broken>?</h1>
            {output}
       </ListGroup>
    );
}

export default Home;