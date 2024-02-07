import { useState } from "react"

const Seat = ({setReservation, id, availibility}) => {
    return (
        <div className={availibility ? "seat-container" : "seat-container taken"} onClick={() => setReservation(availibility, id)}>
            <span className="seat-number">{id}</span>
        </div>
    )
}

export default Seat;