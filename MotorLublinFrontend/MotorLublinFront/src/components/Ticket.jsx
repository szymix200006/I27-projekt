import Logo from '../assets/MotorAir.png';

const Ticket = ({arrive, departure, gate, startDate, endDate, price, classs, seatNumber}) => {
    return (
        <div className="ticket-container">
            <div className="ticket-header">
                <h1 className="ticket-header-text">Boarding pass</h1>
                <img src={Logo} alt="flight-logo"/>
            </div>
            <div className="ticket-body">
                <div className="ticket-col">
                    <span className="ticket-info-span">From: {arrive}</span>
                    <span className="ticket-info-span">To: {departure}</span>
                    <span className="ticket-info-span">Arrive time: {startDate}</span>
                    <span className="ticket-info-span">Departure time: {endDate}</span>
                </div>
                <div className="ticket-col">
                    <span className="ticket-info-span">Gate: {gate}</span>
                    <span className="ticket-info-span">Price: {price}$</span>
                    <span className="ticket-info-span">Class: {classs}</span>
                    <span className="ticket-info-span">Seat: {seatNumber}</span>
                </div>
            </div>
        </div>
    )
}

export default Ticket;