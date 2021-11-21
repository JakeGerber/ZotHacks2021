import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className = "gametitle">
            App Name

            <div className="buttonbox">
                <Link to="/question" className="gamestart">START</Link>
            </div>
        </div>
    )
};

export default Home;