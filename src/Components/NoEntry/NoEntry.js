import './NoEntry.scss'
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
            <div className="noEntryImageOne"></div>
            <div className="noEntryTextContainer">
                <p>No Entry!</p>
                <p>Pokégram is a restricted area for Pokémon only! Click <a className="trainergramLink" onClick={handleClickTrainergram}>here</a> to enter Trainergram.</p>
            </div>
            <div className="noEntryImageTwo"></div>
            <button type="button"  onClick={handleClickReset} className="resetPathButton">Reset</button>
        </div>
    )
}

export default NoEntry

/**
 * TODO:
 * - style this like the wireframe, with image
 * */