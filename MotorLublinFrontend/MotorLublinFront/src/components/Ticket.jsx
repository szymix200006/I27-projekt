const Ticket = ({flightId, price, classs, seatNumber}) => {
    return (
        <div className="ticket-container">
            <span>Flight ID: {flightId}</span>
            <span>Price: {price}</span>
            <span>Class: {classs}</span>
            <span>Seat: {seatNumber}</span>
        </div>
    )
}

export default Ticket;