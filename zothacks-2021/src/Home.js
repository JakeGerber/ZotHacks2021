import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className = "gametitle">
            The Masked Singer But Not The Masked Singer

            <div className="buttonbox">
                <Link to="/question" className="gamestart">START</Link>
            </div>
        </div>
    )
};

export default Home;