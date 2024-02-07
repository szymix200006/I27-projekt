import { useNavigate } from "react-router";

const PlaneRow = ({id, departure, arrive, dateArrive, dateDeparture}) => {
    const navigate = useNavigate();

    const navigateToSeatsOnClick = (id) => {
        navigate('/seats', {state: {flightId: id}})
    }

    return (
        <tr className="plane-row-container" onClick={() => navigateToSeatsOnClick(id)}>
            <td className="plane-row-cell">{id}</td>
            <td className="plane-row-cell">{departure}</td>
            <td className="plane-row-cell">{arrive}</td>
            <td className="plane-row-cell">{dateArrive}</td>
            <td className="plane-row-cell">{dateDeparture}</td>
        </tr>
    )
}

export default PlaneRow;