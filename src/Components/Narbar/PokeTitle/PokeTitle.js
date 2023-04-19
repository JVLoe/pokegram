import './PokeTitle.scss'
import {useNavigate} from "react-router-dom";

const PokeTitle = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className="pokeTitleContainer" onClick={handleClick}>
            <h1 className="pokeTitle"><span className="pokeTitleP">p</span>okégram</h1>
            <div className="pokeTitleImage"></div>
        </div>

    )
}

export default PokeTitle

