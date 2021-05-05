import 'bootstrap/dist/css/bootstrap.css'
import Score from './score';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../comms/api';

function Question(props) {
    const [quizzes, setQuizzes] = useState([]);

    var output = [];
    var index = props.index;
    var choices = quizzes[0][index].choices;

    for (var j = 0; j < quizzes[0][index].choices.length; j++) {
        output.push(
                <Form.Check type={'radio'} label={choices[j]} id={choices[j]} 
                name={choices[j]} onClick= {props.addChecked(choices[j], index)} 
                />
        );
    }
    output.push(<br/>);
    props.newAnswer(quizzes[0][index].answer, index);

    useEffect(() => {
        //Followed from lecture
        if (quizzes.length === 0) {
            api.getQuizzes().then(x => setQuizzes(x)).catch(e => console.log(e));
        }
    });

    return(
        <div>
        <h2> Question {index+1}</h2> 
        <img src = {quizzes[0][index].picture} alt={"Question"}></img> 
        {output}
        </div>
    );
}

function Quiz() {
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const history = useHistory();

    let retry = () => {
        history.push('/quiz');
    }

    let home = () => {
        history.push('/home');
    }

    let checkAnswers = () => {
        var temp = 0;
        for (let i = 0; i < answers; i++){
            if (userAnswers === answers[i]) {
                temp +=1;
            }
        }
        setScore(temp);
    }

    let onSubmit = () => {
        checkAnswers();
        <Score onRetry = { retry } onHome = { home } userScore = {score} />
    }

    let addAnswer = (answer, queNum) => {
        var newAnswers = answers.slice();
        newAnswers[queNum] = answer;
        setAnswers(newAnswers);
    }

    let addChecked = (answer, queNum) => {
        var newUserAnswers =  userAnswers.slice();
        newUserAnswers[queNum] = answer;
        setUserAnswers(newUserAnswers);
    }
    
    return (
        <Form onSubmit={this.onSubmit}>
            <Question index={0} onClick = { addChecked } newAnswer = {addAnswer} />     
            <Question index={1} onClick = { addChecked } newAnswer = {addAnswer} />
            <Question index={2} onClick = { addChecked } newAnswer = {addAnswer} />
            <Question index={3} onClick = { addChecked } newAnswer = {addAnswer} />
            <Question index={4} onClick = { addChecked } newAnswer = {addAnswer} />
            <Question index={5} onClick = { addChecked } newAnswer = {addAnswer} />
            <Button variant="primary" type = "submit" onSubmit = { onSubmit }> Submit </Button>
        </Form>
    );

}
export default Quiz; 