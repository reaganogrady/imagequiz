import 'bootstrap/dist/css/bootstrap.css'
import { Form } from 'react-bootstrap';
import api from '../comms/api';
import { useState, useEffect } from 'react';

function Question(props) {
    const [quizzes, setQuizzes] = useState([]);
    var output = [];

    useEffect(() => {
        if (quizzes.length === 0){
                api.getQuizzes()
                .then(x => createQue(x))
                .catch(e => console.log(e));
        }
    });
    
    let createQue = (x) => {
        setQuizzes(x);
      
        var quizzes = x;
        if (quizzes.length > 0){
            var quizID = props.quizID;
            var queNum = props.queNum;
            var curr = quizzes[quizID];
           
            var choices = curr[queNum].choices;
            
            output.push(
                <div>
                <h2> Question {queNum+1}</h2> 
                <img src = {curr[queNum].picture} alt={"Question"}></img>
                </div>
            );

            for (var j = 0; j < choices.length; j++) { 
                output.push(
                    <Form.Check type={'radio'} label={choices[j]} id={choices[j]} 
                    name={choices[j]} onClick= {props.clicked(choices[j], queNum)} 
                    />
                );
            }
            
            props.newAnswer(curr[queNum].answer, queNum);
            output.push(<br/>);
            console.log(output);
            return( 
                <div>
                    {output}
                </div>
                );
        } 
        else {
        }
    }
    
    return( 
        <div>
            {output}
        </div>
        );
}

export default Question;