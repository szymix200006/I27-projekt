import { useLocation } from "react-router";
import {NavLink} from 'react-router-dom';
import Ticket from "../components/Ticket";
import useFetch from "../hooks/useFetch";
import { Audio } from 'react-loader-spinner'

const Checkout = () => {
    const reservations = useLocation().state.reservations;
    const {data: addedTickets, isPending} = useFetch('http://localhost:8080/user/addTickets', {data: reservations});
    console.log(addedTickets)
    return (
        <div className="checkout-container">
            <h1 className="checkout-header">Your tickets</h1>
            {isPending ?
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                /> : addedTickets.map(ticket => {
                return <Ticket
                            arrive={ticket.flightId.arrive.name}
                            departure={ticket.flightId.departure.name}
                            gate={ticket.flightId.gate}
                            startDate={ticket.flightId.arriveTime}
                            endDate={ticket.flightId.departureTime}
                            classs={ticket.classs}
                            price={ticket.price}
                            seatNumber={ticket.seatNumber}
                        />
            })}
            <NavLink to={'/'}>
                <button className="form-submit">Home</button>
            </NavLink>
        </div>
    )
}

export default Checkout;