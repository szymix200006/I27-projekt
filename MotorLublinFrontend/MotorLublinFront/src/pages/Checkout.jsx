import { useLocation } from "react-router";
import Ticket from "../components/Ticket";

const Checkout = () => {
    const addedTickets = useLocation().state.ticketsAdded;

    return (
        <div className="checkout-container">
            {addedTickets.map(ticket => {
                return <Ticket
                            flightId={ticket.flightId.flightId}
                            classs={ticket.classs}
                            price={ticket.price}
                            seatNumber={ticket.seatNumber}
                        />
            })}
        </div>
    )
}

export default Checkout;