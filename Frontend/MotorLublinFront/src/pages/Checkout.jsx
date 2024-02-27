import { useLocation, useNavigate } from "react-router";
import {NavLink} from 'react-router-dom';
import Ticket from "../components/Ticket";
import { toast, Toaster } from "sonner";
import { v4 } from "uuid";

const Checkout = () => {
    const reservations = useLocation().state.reservations;
    const navigate = useNavigate();
    const saveTickets = async() => {
        try{
            const response = await fetch('http://localhost:8080/user/addTickets', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({data: reservations})
            });
            if(!response.ok) throw new Error('Could not add tickets');
            navigate('/');
        } catch(error) {
            toast.error(`Failed to fetch: ${error}`)
        }
    }

    return (
        <div className="checkout-container">
            <h1 className="checkout-header">Your tickets</h1>
             {reservations.map(ticket => {
                console.log(ticket)
                return <Ticket
                            key={v4()}
                            arrive={ticket.flight.arrive.name}
                            departure={ticket.flight.departure.name}
                            gate={ticket.flight.gate}
                            startDate={ticket.flight.arriveTime}
                            endDate={ticket.flight.departureTime}
                            classs={ticket.classs}
                            price={ticket.price}
                            seatNumber={ticket.seatNumber}
                        />
            })}
            <div className="buttons-container">
                <button className="form-submit" onClick={saveTickets}>Submit Tickets</button>
                <NavLink to={'/'}>
                    <button className="form-submit">Cancel Tickets</button>
                </NavLink>
            </div>
            <Toaster richColors  position="top-right"/>
        </div>
    )
}

export default Checkout;