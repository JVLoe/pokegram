import './PokeSplash.css'
import Navbar from "../Narbar/Navbar";


const PokeSplash = () => {
    return (
        <div >
            <Navbar />
            <div className="pokeSplash">
                <div className="pokeSplashContainer">
                    <p className="pokeSplashText">Pokégram is a safe place for <span className="textEmphasis">all</span> Pokémon. <span className="textEmphasis">No trainers allowed.</span></p>
                    <button className="pokeSplashButton">
                        Please Enter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PokeSplash