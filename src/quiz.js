import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import quizzes from './data';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


function Quiz () {
    const history = useHistory();

    let onSubmit = () => {
        console.log("change");
        history.push('/score');
    }

    const output = [];
    var newQ = quizzes[0];

    for (var i = 0; i < newQ.length; i++){
        var choices = newQ[i].choices;
        output.push(<h2> Question {i+1}</h2> ); // Question number
        output.push(<img src = {newQ[i].picture} alt={"Question"}></img>); // Question image
        
        // i = question num
        for (var j = 0; j < newQ[i].choices.length; j++) {
            output.push(
                    <Form.Check type={'radio'} label={choices[j]} id={choices[j]} name={"Answer" + i} 
                    />
            );
        }
        output.push(<br/>);
    }
    output.push(<Button variant="primary" type = "submit"> Submit </Button>);
    output.push(<br/>);

    return (
        <Form onSubmit={onSubmit}>
           {output}
        </Form>
    );
}

export default Quiz; 