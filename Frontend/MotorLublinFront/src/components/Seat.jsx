import { useState } from "react"

const Seat = ({setReservation, id, availibility, seatClass, price, corridor, flight}) => {
    const [marked, setMarked] = useState(false);
    
    const onSeatClick = () => {
        setMarked(!marked);
        setReservation(availibility, id, seatClass, price, flight);
    }

    return (
        <div className={`${availibility ? "seat-container taken" : (marked ? "seat-container marked" : "seat-container")} ${seatClass.toLowerCase()} ${corridor ? 'corridor' : ''}`} onClick={onSeatClick}>
            <span className="seat-number">{id}</span>
        </div>
    )
}

export default Seat;