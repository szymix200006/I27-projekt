import { useEffect, useState } from "react";
import fetchData from "../logic/FetchData";
import { useLocation, useNavigate } from "react-router";
import { Audio } from "react-loader-spinner";
import Seat from "../components/Seat";
import { v4 } from "uuid";

const Seats = () => {
    const [seats, setSeats] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [pending, setPending] = useState(true);
    const flightId = useLocation().state;
    const navigate = useNavigate();

    useEffect(() => {
        (async function() {
            const {data, pending} = await fetchData('http://localhost:8080/user/getTickets', flightId);
            setSeats(data)
            setPending(pending)
        })()
    }, []);

    const addReservation = (availibility, id) => {
        if(!availibility) {
            if(!reservations.includes(id)) setReservations(prevReservations => ([...prevReservations, {
                userId: 20, 
                price: 100,
                classs:'ECONOMY', 
                flightId: flightId.flightId,
                seatNumber: id
            }]));
            else setReservations(prevReservations => (prevReservations.filter(reservation => reservation.seatNumber != id)))
        }
    }

    const saveNewTickets = async () => {
        if(reservations.length){
            const {data} = await fetchData('http://localhost:8080/user/addTickets', {data: reservations});
            navigate('/checkout', {state: {ticketsAdded: data}})
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
                /> : seats.map((seat, id) => {
                return <Seat 
                            key={v4()} 
                            id={id} 
                            availibility={seat} 
                            setReservation={addReservation}
                        />
            })}
            <button className="seats-save-button" onClick={saveNewTickets}>Save seats</button>
        </div>
    )
}

export default Seats;