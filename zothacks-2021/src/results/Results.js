import './Results.css';

const Results = () => {
    // Currently placeholders, to be replaced when API implemented
    let mainScore = -1;
    let songScore1 = -1;
    let songScore2 = -1;

    let genre1 = "Stone"
    let genre2 = "Words"

    let albumArt1 = "tempalbum1.jpg";
    let albumArt2 = "tempalbum2.jpg";
    let altAlbumArt1 = "Temporary placeholder 1";
    let altAlbumArt2 = "Temporary placeholder 2";

    let artistName1 = "Artist 1";
    let artistName2 = "Artist 2";
    let songName1 = "Song 1";
    let songName2 = "Song 2";

    const startAgain = () => {
        
    }

    // JSX object
    return (
        <nav class="results">
            <div className="resultsTitle">
                <h1>You got <strong>{ mainScore }/10.</strong> Congratulations!</h1>
                <button onClick={ startAgain }>PLAY AGAIN</button>
            </div>
            <div className="resultsInfoRow">
                <div className="resultsInfoColumn">
                    <p>
                        You got { songScore1 }/2 for { genre1 }<br />
                        You've definitely mastered it!<br />
                        Here's a song that we recommend for you:
                    </p>
                    <img src={ albumArt1 } alt={ altAlbumArt1 } class="resultsAlbumCover"></img>
                    <p>{ artistName1 } - { songName1 }</p>
                </div>
                <div className="resultsInfoColumn">
                    <p>
                        You got { songScore2 }/2 for { genre2 }<br />
                        Want to learn more about it?<br />
                        Here's a song that we recommend for you:
                    </p>
                    <img src={ albumArt2 } alt={ altAlbumArt2 } className="resultsAlbumCover"></img>
                    <p>{ artistName2 } - { songName2 }</p>
                </div>
            </div>
        </nav>
    );
}

export default Results