import Answers from './Answers';
import Question from './Question';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';


const Questions = ['What year did this song come out?', 'Who wrote this song?', 'Which album is this song from?'];

//name, artist, albumcover
//Who sings this album?, Which album did this singer create?, What album is this? 

const Question_Page = () => {
    const [question, changeq] = useState("");
    

    const [pop, setPop] = useState([])
    const [rock, setRock] = useState([])
    const [country, setCountry] = useState([])
    const [hiphop, setHiphop] = useState([])

    const [stopthis, makingitstop] = useState(false)

    let history = useHistory()
    


    let answers = [['right answer'], 'wrong answer 1', 'wrong answer 2', 'wrong answer 3'];
    var correctAnswer = getRandomInt(4)

    const [button1, cbut1] = useState("");
    const [button2, cbut2] = useState("");
    const [button3, cbut3] = useState("");
    const [button4, cbut4] = useState("");
    

    const [popPoints, setPopPoints] = useState(0);
    const [rockPoints, setRockPoints] = useState(0);
    const [countryPoints, setCountryPoints] = useState(0);
    const [hiphopPoints, setHiphopPoints] = useState(0);

    const [pPoints, sPopPoints] = useState(0);
    const [rPoints, sRockPoints] = useState(0);
    const [cPoints, sCountryPoints] = useState(0);
    const [hPoints, sHiphopPoints] = useState(0);


    const [currentValueButton, setButtonVal] = useState(0);
    const [totalQuestionsAsked, updateQuestionsNum] = useState(0);
    const [tRightQuestions, uright] = useState(0);

    const [currentGen, genUpdate] = useState([])

    const [crec, crecUpdate] = useState(0);
    




    //var name = pop[0].name

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    async function getGenreSongList(genre) {
        var apikey = "374f493dfc6d56049896a9927f2ad53f"
        
        var url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${apikey}&format=json`
        const items = await fetch(url)
        .then(res => res.json())
        .then(json => {
          //console.log(json.albums.album)
          return json.albums.album
        })

        return items

        
        
          
    }



    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      
    const checkAns = (buttonNum) => {

        updateQuestionsNum(previous => previous+1)

        if (currentValueButton === buttonNum)
        {
            uright(prev6 => prev6+1)
            console.log("HAHHAHHAHAHHAHAHAHHAHA")
            console.log(currentGen[0])
            console.log(pop[0])
            console.log(rock[0])
            console.log(hiphop[0])
            console.log(country[0])
            crecUpdate(prev => prev+1)
            if (currentGen[0].name === pop[0].name)
            {
                setPopPoints(prev1 => prev1+1)
                console.log("Got a pop point")
                sPopPoints(previ1 => previ1+1)
            }
            else if (currentGen[0].name === rock[0].name)
            {
                setRockPoints(prev2 => prev2+1)
                console.log("Got a rock point")
                sRockPoints(previ2 => previ2+1)
            }
            else if (currentGen[0].name === hiphop[0].name)
            {
                setHiphopPoints(prev3 => prev3+1)
                console.log("Got a hiphop point")
                sHiphopPoints(previ3 => previ3+1)
            }
            else if (currentGen[0].name === country[0].name)
            {
                setCountryPoints(prev4 => prev4+1)
                console.log("Got a country point")
                sCountryPoints(previ4 => previ4+1)
            }
        }

        if (totalQuestionsAsked > 8)
        {
            
            
            history.push({pathname: "/result", state: {pointsMade: tRightQuestions, totalPoints: totalQuestionsAsked+1}})
            
           //this.props.history.push("/result")
        }

        rerollq()
    }

    const rerollq = () => {
        var correctAnswer = getRandomInt(4)
        setButtonVal(correctAnswer)


        var genres = [pop, rock, hiphop, country]
        shuffleArray(genres)

        var buttons = [cbut1, cbut2, cbut3, cbut4]

        for (let i = 0; i < 4; i++){
            
            var randNum = getRandomInt(50)
            const {name, artist, image} = genres[i][randNum]
            const artistname = artist.name
            const imageURL = image[2]["#text"]
        
            


            
            
            buttons[i](
            <figure>
            <img src = {imageURL} />
            <figcaption>{name}</figcaption>
            </figure>)
            
            if (correctAnswer === i)
            {
                changeq(artistname)
                genUpdate(genres[i])
            }
        
    }


        //changeq(Questions[Math.floor(Math.random()*Questions.length)])
    }

    const count_check = () => {

    }
    
    useEffect(() => {
        getGenreSongList("pop").then(
            items => {
                setPop(items)
            }
        )
        
        getGenreSongList("rock").then(
            items => {
                setRock(items)
            }
        )

        getGenreSongList("country").then(
            items => {
                setCountry(items)
            }
        )


        getGenreSongList("hiphop").then(
            items => {
                setHiphop(items)
            }
        )



        


    }, [question]);

    useEffect(() =>
    {
        if (pop.length != 0 && rock.length != 0 && country.length != 0 && hiphop.length != 0 && stopthis == false)
        {
            rerollq()
            makingitstop(true)
        }
    }, [pop, rock, country, hiphop, stopthis])

    return ( 
        
        <div className="QuestionPage">
            <p id='Prompt'>{question}</p>
            <div>
                <button id='button 1' onClick={() => checkAns(0)}>{button1}</button>
                <button id='button 2' onClick={() => checkAns(1)}>{button2}</button>
                <button id='button 3' onClick={() => checkAns(2)}>{button3}</button>
                <button id='button 4' onClick={() => checkAns(3)}>{button4}</button>
            </div>
        </div>
     );
}
 
export default Question_Page;