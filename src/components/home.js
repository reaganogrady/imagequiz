import 'bootstrap/dist/css/bootstrap.css'
import {ListGroup} from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../comms/api';
import { useState, useEffect } from 'react';

function Home(props) {
    const history = useHistory();
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        if (flowers.length === 0) {
            api.getFlowers().then(x => setFlowers(x)).catch(e => console.log(e));
        }
    });

    let setQuiz = (event) => {
        props.gotoQuiz(event.target.id);
        history.push('/quiz');
    }

    const output = [];
    for (var i = 0; i < flowers.length; i++) {
        output.push(
            <ListGroup.Item>
                <img src={flowers[i].picture} id={i} onClick={setQuiz} alt={flowers[i].name}></img>
                <p> {flowers[i].name} </p>
            </ListGroup.Item>
        );
    }

    return(
        <ListGroup>
            {output}
       </ListGroup>
    );
}

export default Home;