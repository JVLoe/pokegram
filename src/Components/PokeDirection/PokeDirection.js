import './PokeDirection.css';
import {useNavigate} from "react-router-dom";
const PokeDirection = ({handleAuthentication}) => {
    const navigate = useNavigate();
    const handleClickNo = () => {
        handleAuthentication();
        navigate('/no-entry');
    }

    return (
        <div className="pokeDirectionContainer">
            <p className="pokeDirectionText">Are you a Pokemon?</p>
            <button className="pokeDirectionButton yes">Yes</button>
            <button type="button" onClick={handleClickNo} className="pokeDirectionButton no">No</button>
        </div>
    )
}

export default PokeDirection