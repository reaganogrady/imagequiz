import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import quizzes from './data';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import React from 'react';
/*
class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: null,
            answer: null
        };
    }
    clicked(answer) {
        this.state.answer = answer;
        props.onClick();
    }
    render () {
        var output =[]
        var choices = quizzes[0][this.state.index].choices;
        for (var j = 0; j < quizzes[0][this.state.index].choices.length; j++) {
            var curr = choices[j];
            console.log(curr);
            output.push(
                    <Form.Check type={'radio'} label={choices[j]} id={choices[j]} 
                    name={"Answer" + this.state.index} onClick= {this.clicked(choices[j])} 
                    />
            );
        }
        output.push(<br/>);
        return(
            <div>
            <h2> Question {this.state.index+1}</h2> 
            <img src = {quizzes[0][this.state.index].picture} alt={"Question"}></img> 
            {output}
            </div>
        )
    }
}*/

function Question({ index, handleChildClick }) {

    function clicked(event){
        handleChildClick(event.target.name);
    }

    var output =[]
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

function checkAnswers(answers) {
    var score = 0;
    for (let i = 0; i < quizzes[0]; i++){
        if (quizzes[0][i].answer === answers[i]) {
            score +=1;
        }
    }
    return score;
}

class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            answers: Array(6).fill(null),
        };
    }

    
    onSubmit = () => {
        var score = checkAnswers(this.state.answers);
        console.log(score);
       // history.push('/score');
    }

    handleClick(i, answer) {
        console.log(this.state.answer);
        const answers = this.state.answers.slice();
        answers[i] = answer;
        this.setState({answers: answers});
    }
    

    render() {
        return (
         <Form onSubmit={this.onSubmit}>
                <Question index={0} handleChildClick={this.handleClick(0)} />
                
                <Button variant="primary" type = "submit"> Submit </Button>
            </Form>
        );
    }
}
export default Quiz; 

/*
<Question index={1} handleChildClick={this.handleClick(1)} />
                <Question index={2} handleChildClick={this.handleClick(2)} />
                <Question index={3} handleChildClick={this.handleClick(3)} />
                <Question index={4} handleChildClick={this.handleClick(4)} />
                <Question index={5} handleChildClick={this.handleClick(5)} />
                */