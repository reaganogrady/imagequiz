import 'bootstrap/dist/css/bootstrap.css'
import Score from './score';
import Question from './question';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import { useHistory } from 'react-router-dom';

function Quiz(props) {
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
        <Form onSubmit={onSubmit}>
            <Question quizID={props.quizID} queNum={0} clicked = { addChecked } newAnswer = {addAnswer} />   
            <Question quizID={props.quizID} queNum={1} clicked = { addChecked } newAnswer = {addAnswer} />
            <Question quizID={props.quizID} queNum={2} clicked = { addChecked } newAnswer = {addAnswer} />
            <Question quizID={props.quizID} queNum={3} clicked = { addChecked } newAnswer = {addAnswer}/>
            <Question quizID={props.quizID} queNum={4} clicked = { addChecked } newAnswer = {addAnswer} />
            <Question quizID={props.quizID} queNum={5} clicked = { addChecked } newAnswer = {addAnswer} />
        <Button variant="primary" type = "submit" onSubmit = { onSubmit }> Submit </Button>
        </Form>
    );

}
export default Quiz; 