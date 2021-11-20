import Answers from './Answers';
import Question from './Question';

const Questions = ['What year did this song come out?', 'Who wrote this song?', 'Which album is this song from?'];

const Question_Page = () => {
    return ( 
        <div className="QuestionPage">
            <Question question={Questions[Math.floor(Math.random()*Questions.length)]}/>
            <div>
                <Answers answer={}/>
                <Answers />
                <Answers />
                <Answers />
            </div>
            {/*Button*/}
            {/*Button*/}
            {/*Button*/}
            {/*Button*/}

        </div>
     );
}
 
export default Question_Page;