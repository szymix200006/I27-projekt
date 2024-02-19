import { useNavigate } from "react-router";
import PlaneArrow from "../assets/PlaneArrow.png"

const PlaneRow = ({id, departure, arrive, dateArrive, dateDeparture}) => {
    const navigate = useNavigate();

    const navigateToSeatsOnClick = (id) => {
        navigate('/seats', {state: {flightId: id}})
    }

    return (
        <div className="plane-row-container" onClick={() => navigateToSeatsOnClick(id)}>
            <div className="plane-row-airport-container">
                <span className="plane-row-date">{dateArrive}</span>
                <span className="plane-row-airport">From: {arrive}</span>
            </div>
            <div className="plane-row-arrow-container">
                <img className="plane-row-arrow-image" src={PlaneArrow} alt="samolot" />
            </div>
            <div className="plane-row-airport-container">
                <span className="plane-row-date">{dateDeparture}</span>
                <span className="plane-row-airport">To: {departure}</span>
            </div>
        </div>
    )
}

export default PlaneRow;