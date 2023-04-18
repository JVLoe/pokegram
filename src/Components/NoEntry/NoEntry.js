import './NoEntry.css'
import {useNavigate} from "react-router-dom";
const NoEntry = () => {
    const navigate = useNavigate();
    const handleClickTrainergram = () => {
        navigate('/404');
    };

    const handleClickReset = () => {
        navigate('/')
    }

    return (
        <div className="noEntry">
            <div className="noEntryText">
                <p>No Entry!</p>
                <p>Pokégram is a restricted area for Pokémon only! Click <a className="trainergramLink" onClick={handleClickTrainergram}>here</a> to enter Trainergram.</p>
            </div>
            <button type="button"  onClick={handleClickReset} className="noEntryButton">Reset</button>
            <div className="noEntryImageContainer">
                x
            </div>
        </div>
    )
}

export default NoEntry

/**
 * TODO:
 * - style this like the wireframe, with image
 * */