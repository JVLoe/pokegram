import './PokeDirection.css';
import {useNavigate} from "react-router-dom";
const PokeDirection = ({handleAuthentication}) => {
    const navigate = useNavigate();
    const handleClickNo = () => {
        handleAuthentication();
        navigate('/no-entry');
    }

    const handleClickYes = () => {
        handleAuthentication();
        navigate('/poke-collection')
    }

    return (
        <div className="pokeDirectionContainer">
            <p className="pokeDirectionText">Are you a Pokémon?</p>
            <button type="button" onClick={handleClickYes} className="pokeDirectionButton yes">Yes</button>
            <button type="button" onClick={handleClickNo} className="pokeDirectionButton no">No</button>
        </div>
    )
}

export default PokeDirection