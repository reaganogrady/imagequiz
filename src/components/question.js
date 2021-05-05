import 'bootstrap/dist/css/bootstrap.css'
import { Form } from 'react-bootstrap';
import api from '../comms/api';
import { useState, useEffect } from 'react';

function Question(props) {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        if (quizzes.length === 0) {
            api.getQuizzes()
            .then(x => setQuizzes(x))
            .catch(e => console.log(e));
        }
    });
    
    let createQue = () => {
        if (quizzes.length !== 0){
            var quizID = props.quizID;
            var queNum = props.queNum;
        
            var choices = quizzes[quizID][queNum].choices;
    
            var output = [];
            for (var j = 0; j < choices.length; j++) {
                output.push(
                    <Form.Check type={'radio'} label={choices[j]} id={choices[j]} 
                    name={choices[j]} onClick= {props.clicked(choices[j], queNum)} 
                    />
                );
            }
            props.newAnswer(quizzes[quizID][queNum].answer, queNum);
            output.push(<br/>);
            return(
                <div>
                <h2> Question {queNum+1}</h2> 
                <img src = {quizzes[quizID][queNum].picture} alt={"Question"}></img>
                {output}
                </div>
            );
        } 
        else {
           return [];
        }
    }
    

    return(
        <div>{createQue}</div>
    );
}

export default Question;