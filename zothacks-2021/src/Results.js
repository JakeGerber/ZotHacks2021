import { useState } from 'react';
import './Results.css';

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

    // JSX object
    return (
        <nav class="results">
            <div className="resultsTitle">
                <h1>You got <strong>{ finalScores.mainScore }/10.</strong> Congratulations!</h1>
                <a href="/question" className="restart">PLAY AGAIN</a>
            </div>
            <div className="resultsInfoRow">
                <div className="resultsInfoColumn">
                    <p>
                        You got { finalScores.songScore1 }/2 for { finalScores.genre1 }<br />
                        You've definitely mastered it!<br />
                        Here's a song that we recommend for you:
                    </p>
                    <img src={ finalScores.albumArt1 } class="resultsAlbumCover" alt=""></img>
                    <p>{ finalScores.artistName1 } - { finalScores.songName1 }</p>
                </div>
                <div className="resultsInfoColumn">
                    <p>
                        You got { finalScores.songScore2 }/2 for { finalScores.genre2 }<br />
                        Want to learn more about it?<br />
                        Here's a song that we recommend for you:
                    </p>
                    <img src={ finalScores.albumArt2 } className="resultsAlbumCover" alt=""></img>
                    <p>{ finalScores.artistName2 } - { finalScores.songName2 }</p>
                </div>
            </div>
        </nav>
    );
}

export default Results