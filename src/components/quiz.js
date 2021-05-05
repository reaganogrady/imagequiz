import 'bootstrap/dist/css/bootstrap.css'
import Score from './score';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import React from 'react';
import { useState } from 'react';
import api from './api';

function Question({ index, handleChildClick }) {
    function clicked(event){
        handleChildClick(event.target.name);
    }

    var output = [];
    var choices = quizzes[0][index].choices;
    for (var j = 0; j < quizzes[0][index].choices.length; j++) {
        output.push(
                <Form.Check type={'radio'} label={choices[j]} id={choices[j]} 
                name={choices[j]} onClick= {clicked} 
                />
        );
    }
    output.push(<br/>);

    return(
        <div>
        <h2> Question {index+1}</h2> 
        <img src = {quizzes[0][index].picture} alt={"Question"}></img> 
        {output}
        </div>
    );
}

function calculateScore(answers) {
    var score = 0;
    for (let i = 0; i < quizzes[0]; i++){
        if (quizzes[0][i].answer === answers[i]) {
            score +=1;
        }
    }
    return score;
}

function Quiz() {
    const [score, setScore] = useState(0);
    const [finished, setEnd] = useState(false)

    history = useHistory();

    let retry = () => {
        history.push('/quiz');
    }

    let home = () => {
        history.push('/home');
    }

    let onSubmit = () => {
        s
        <Score onRetry = { retry } onHome = { home } />
    }

    /*
    let handleClick(i, answer) {
        console.log(this.state.answer);
        const answers = this.state.answers.slice();
        answers[i] = answer;
        this.setState({answers: answers});
    }*/
    
    return (
        <Form onSubmit={this.onSubmit}>
            <Question index={0} onClick = { checkAsnswer } />     
            <Question index={1} onClick = { checkAsnswer } />
            <Question index={2} onClick = { checkAsnswer } />
            <Question index={3} onClick = { checkAsnswer } />
            <Question index={4} onClick = { checkAsnswer } />
            <Question index={5} onClick = { checkAsnswer } />
            <Button variant="primary" type = "submit" onSubmit = { onSubmit }> Submit </Button>
        </Form>
    );

}
export default Quiz; 