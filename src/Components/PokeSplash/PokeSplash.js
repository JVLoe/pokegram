import './PokeSplash.css'
import Navbar from "../Narbar/Navbar";
import {useNavigate} from "react-router-dom";

const PokeSplash = ({handleAuthentication}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        handleAuthentication();
        navigate('/direction');
    };

    return (
        <div className="pokeSplash">
            <Navbar/>
            <div className="pokeSplashContainer">
                <div className="piplup"></div>
                <div className="wartortle"></div>
                <div className="pokeSplashTextAndButton">
                    <p className="pokeSplashText">Pokégram is a safe place for <span
                        className="textEmphasis">all</span> Pokémon. <span
                        className="textEmphasis">No trainers allowed.</span> If you're a Pokémon: Welcome to the super
                        secret social!</p>
                    <button type="button" onClick={handleClick} className="pokeSplashButton">
                        Enter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PokeSplash;
