import { useState } from 'react';
import './Results.css';
import { useLocation } from 'react-router-dom';

const Results = (props) => {
    /* The results page. Takes in the argument props, which is an object
    consisting of:
    mainScore - The total score (a number)
    songScore1, songScore2 - Highest genre score, lowest genre score, (also numbers)
    genre1, genre2 - Genre name with highest score, genre name with lowest score (Strings)
    albumArt1, albumArt2 - Album art for song of genre with highest score and of lowest score (Strings, as links)
    artistName1, artistName2 - Artist name for song of genre with highest score and of lowest score (Strings)
    songName1, songName2 - Song names for song of genre with highest score and of lowest score (Strings)
    */

    // Placeholder, will be created by game logic later
    // TODO: Remove this, remove useState import, change finalScores references to props
    const [finalScores, setFinalScores] = useState({
      mainScore: -1,
      songScore1: -1,
      songScore2: -1,
        
      genre1: "Stone",
      genre2: "Words",
        
      albumArt1: "tempalbum1.jpg",
      albumArt2: "tempalbum2.jpg",
        
      artistName1: "Artist 1",
      artistName2: "Artist 2",
      songName1: "Song 1",
      songName2: "Song 2"
    });

    let location = useLocation();

    // JSX object
    return (
        <nav class="results">
            <div className="resultsTitle">
                <h1>You got <strong>{ location.state.pointsMade }/{location.state.totalPoints}.</strong> Congratulations!</h1>
                <a href="/question" className="restart">PLAY AGAIN</a>
            </div>
        </nav>
    );
}

export default Results