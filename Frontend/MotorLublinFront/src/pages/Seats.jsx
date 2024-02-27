import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Audio } from "react-loader-spinner";
import Seat from "../components/Seat";
import useFetch from "../hooks/useFetch";
import Cessena from "../assets/Cessena.png";
import Airbus from "../assets/Airbus.png";
import Boeing from "../assets/Boeing.png";
import { Toaster, toast } from 'sonner'

const Seats = () => {
    const flightId = useLocation().state;
    const navigate = useNavigate();
    const [reservations, setReservations] = useState([]);
    const {data: flightSeats, isPending: pending} = useFetch('http://localhost:8080/user/getTickets', flightId);

    const addReservation = (availibility, id, seatClass, price, flight) => {
        if(!availibility) {
            if(!reservations.find(reservation => reservation.seatNumber == id)) setReservations(prevReservations => ([...prevReservations, {
                userId: 20, 
                price: price,
                classs: seatClass,
                flightId: flightId.flightId,
                seatNumber: id,
                flight: flight
            }]));
            else setReservations(prevReservations => (prevReservations.filter(reservation => reservation.seatNumber != id)))
        }
    }

    const saveNewTickets = () => {
        if(reservations.length){
            navigate('/checkout', {state: {reservations: reservations}})
        } else {
            toast.error("You need to save at least one seat.");
        }
    }

    return (
        <div className="seats-container">
            {pending ? 
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                /> : <>
                <img src={flightSeats.planeId == 10 ? Cessena : flightSeats.planeId == 11 ? Airbus : Boeing} alt="plane" className="seats-plane-image"/>
                <div className={`seats-container-rows ${flightSeats.seats.length <= 12 ? 'small' : flightSeats.seats.length <= 360 ? 'medium' : 'big'}`}>
                {
                        flightSeats.seats.map((seat, id) => {
                        return <Seat 
                        key={id} 
                        id={seat.number} 
                        availibility={seat.taken} 
                        setReservation={addReservation}
                        seatClass={seat.seatClass}
                        price={seat.price}
                        flight={seat.flight}
                        corridor={id%7 == 1 || id%7 == 4}
                    />
                     })}</div>
            <button className="form-submit" onClick={saveNewTickets}>Save seats</button>
            <Toaster richColors  position="top-right"/></>}
        </div>
    )
}

export default Seats;