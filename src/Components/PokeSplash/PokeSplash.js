import './PokeSplash.css'
import Navbar from "../Narbar/Navbar";


const PokeSplash = () => {
    return (
        <div className="pokeSplash">
            <Navbar />
            <div className="pokeSplashContainer">
                <div className="piplup">
                </div>
                <div className="pokeSplashTextAndButton">
                    <p className="pokeSplashText">Pokégram is a safe place for <span className="textEmphasis">all</span> Pokémon. <span className="textEmphasis">No trainers allowed.</span></p>
                    <button className="pokeSplashButton">
                        Enter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PokeSplash