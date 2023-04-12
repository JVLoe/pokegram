import './PokeSplash.css'
import Navbar from "../Narbar/Navbar";
import {useNavigate} from "react-router-dom";


const PokeSplash = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/direction');

    return (
        <div className="pokeSplash">
            <Navbar />
            <div className="pokeSplashContainer">
                <div className="piplup">
                </div>
                <div className="pokeSplashTextAndButton">
                    <p className="pokeSplashText">Pokégram is a safe place for <span className="textEmphasis">all</span> Pokémon. <span className="textEmphasis">No trainers allowed.</span></p>
                        <button type="button"  onClick={handleClick} className="pokeSplashButton">
                            Enter
                        </button>
                </div>
            </div>
        </div>
    )
}

export default PokeSplash