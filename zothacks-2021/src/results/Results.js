const Results = () => {
    return (
        <nav class="results">
            <div className="resultsTitle">
                <h1>You got <strong>?/10.</strong> Congratulations!</h1>
                <button>PLAY AGAIN</button>
            </div>
            <div className="resultsInfoRow">
                <div className="resultsInfoColumn">
                    <p>
                        You got ?/2 on ... genre<br />
                        You are really a master of it!<br />
                        Here is a song we are recommending for you:
                    </p>
                    <img src=""></img>
                    <p>Info</p>
                </div>
                <div className="resultsInfoColumn">
                    <p>
                        You got ?/2 on ... genre<br />
                        You are really a master of it!<br />
                        Here is a song we are recommending for you:
                    </p>
                    <img src=""></img>
                    <p>Info</p>
                </div>
            </div>
        </nav>
    );
}

export default Results