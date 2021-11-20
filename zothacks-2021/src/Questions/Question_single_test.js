import Answers from './Answers';
import Question from './Question';
import {useState, useEffect} from 'react';

const Questions = ['What year did this song come out?', 'Who wrote this song?', 'Which album is this song from?'];

const Question_Page = () => {
    const [question, changeq] = useState(Questions[Math.floor(Math.random()*Questions.length)]);
    let answers = ['right answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3'];
    const [button1, cbut1] = useState(answers[0]);
    const [button2, cbut2] = useState(answers[1]);
    const [button3, cbut3] = useState(answers[2]);
    const [button4, cbut4] = useState(answers[3]);

    const reroll_answers = () => {
        const answer1 = Math.floor(Math.random()*answers.length);
        cbut1(answers[answer1]);
        answers.splice(answer1, 1);

        const answer2 = Math.floor(Math.random()*answers.length);
        cbut2(answers[answer2]);
        answers.splice(answer2, 1);

        const answer3 = Math.floor(Math.random()*answers.length);
        cbut3(answers[answer3]);
        answers.splice(answer3, 1);

        const answer4 = 0;
        cbut4(answers[answer4]);
        answers = ['right answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3'];
    }

    const rerollq = () => {
        changeq(Questions[Math.floor(Math.random()*Questions.length)])
    }
    
    useEffect(() => {
        reroll_answers()
    }, [question]);

    return ( 
        <div className="QuestionPage">
            <p>{question}</p>
            <div>
                <button onClick={rerollq}>{button1}</button>
                <button onClick={rerollq}>{button2}</button>
                <button onClick={rerollq}>{button3}</button>
                <button onClick={rerollq}>{button4}</button>
            </div>
        </div>
     );
}
 
export default Question_Page;