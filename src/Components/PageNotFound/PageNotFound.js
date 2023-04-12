import './PageNotFound.css'
import {useNavigate} from "react-router-dom";
const PageNotFound = ({ handleAuthentication }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        handleAuthentication();
        navigate('/');
    }

    return (
        <div className="pageNotFound">
            <p className="pageNotFoundText">404 Page Not found</p>
            <button type="button" onClick={handleClick} className="pageNotFoundButton">
                Journey: Home
            </button>
        </div>
    )
}

export default PageNotFound