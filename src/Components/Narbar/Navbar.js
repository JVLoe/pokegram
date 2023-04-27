import PokeTitle from "./PokeTitle/PokeTitle";
import './Navbar.scss'
import {useNavigate} from "react-router-dom";

const Navbar = ({ showBackButton }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/poke-collection')
    }

    return (
        <nav>
            <PokeTitle />
            {showBackButton &&
                <button onClick={handleBack}>Back</button>
            }
        </nav>
    )
}

export default Navbar