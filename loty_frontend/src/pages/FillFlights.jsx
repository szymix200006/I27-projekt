import {useState} from "react";
import { useNavigate } from "react-router-dom";
import NavigationButton from "../components/NavigationButton";
import classes from '../styles/FillFlight.module.css'
import useFetch from "../hooks/useFetch";

const FillFlights = () => {
    const [adminForm, setAdminForm] = useState({
        flights: 0,
        tickets: 0,
        users: 0,
    })

    const [planeForm, setPlaneForm] = useState({
        model: '',
        seatCount: 0,
        brand: ''
    });
    const [airportForm, setAirportForm] = useState({
        name: ''
    });
    const [userForm, setUserForm] = useState({
        email: '',
        name: '',
        lastname: '',
        role: ''
    });

    const navigate = useNavigate();

    const handleFillerForm = (e) => {
        e.preventDefault();
        navigate("/fillResult", {state: adminForm})
    }

    const [planeList, setPlaneList] = useState([]);
    const [airportList, setAirportList] = useState([]);
    const [userList, setUserList] = useState([]);

    const handlePlaneForm = async() => {
        console.log({data: planeList})
        const response = await fetch("http://192.168.1.146:8080/admin/plane",{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({data: planeList})
        })
        const data = await response.json()
        console.log(data)
        //useFetch("http://192.168.1.125:8080/admin/plane", planeList)
    }
    const handleAirportForm = async() => {
        const response = await fetch("http://192.168.1.146:8080/admin/airport",{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({data: airportList})
        })
        const data = await response.json()
        console.log(data)
        //useFetch("http://192.168.1.125:8080/admin/airport", airportList)
    }
    const handleUserForm = async() => {
        const response = await fetch("http://192.168.1.146:8080/admin/user",{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({data: userList})
        })
        const data = await response.json()
        console.log(data)
        //useFetch("http://192.168.1.125:8080/admin/user", userList)
    }

    return (
        <div className={classes.fillerContainer}>
            <h1 className={classes.fillerHeader}>Fill Flights DataBase</h1>
            <form className={classes.formContainer} onSubmit={handleFillerForm}>
                <label>Flights<input type="number" placeholder="flights..." className={classes.amountInput} value={adminForm.flights} onChange={(e) => setAdminForm({...adminForm, flights: e.target.value})}/></label>
                <label>Tickets<input type="number" placeholder="tickets..." className={classes.amountInput} value={adminForm.tickets} onChange={(e) => setAdminForm({...adminForm, tickets: e.target.value})}/></label>
                <label>Users<input type="number" placeholder="users..." className={classes.amountInput} value={adminForm.users} onChange={(e) => setAdminForm({...adminForm, users: e.target.value})}/></label>
                <input type="submit" value="Fill Flights" className={classes.amountSubmit} />
            </form>

            
            <form className={classes.formContainer} onSubmit={(e) => {e.preventDefault(); setPlaneList([...planeList, planeForm]); setPlaneForm({model: '', seatCount: 0,brand: ''  })}}>
                <label>Model <input className={classes.amountInput} value={planeForm.model} onChange={(e) => setPlaneForm({...planeForm, model: e.target.value})}/></label>
                <label>Brand <input className={classes.amountInput} value={planeForm.brand} onChange={(e) => setPlaneForm({...planeForm, brand: e.target.value})}/></label>
                <label>Seat count <input type="number"className={classes.amountInput} value={planeForm.seatCount} onChange={(e) => setPlaneForm({...planeForm, seatCount: e.target.value})}/></label>
                <input type="submit" value="Add Plane" className={classes.amountSubmit} />
            </form>

            <button onClick={handlePlaneForm}>Save Planes</button>
           
            <form className={classes.formContainer} onSubmit={(e) => {e.preventDefault();setAirportList([...airportList, airportForm]); setAirportForm({name: ''})}}>
                <label>Name <input className={classes.amountInput} value={airportForm.name} onChange={(e) => setAirportForm({name: e.target.value})}/></label>
                <input type="submit" value="Add Airport" className={classes.amountSubmit} />
            </form>

            <button onClick={handleAirportForm}>Save Airports</button>
          
            <form className={classes.formContainer} onSubmit={(e) => {e.preventDefault();setUserList([...userList, userForm]); setAirportForm({ email: '', name: '',  lastname: '',    role: '' })}}>
                <label>Email <input className={classes.amountInput} value={userForm.email} onChange={(e) => setUserForm({...userForm, email: e.target.value})}/></label>
                <label>Name <input className={classes.amountInput} value={userForm.name} onChange={(e) => setUserForm({...userForm, name: e.target.value})}/></label>
                <label>LastName <input className={classes.amountInput} value={userForm.lastname} onChange={(e) => setUserForm({...userForm, lastname: e.target.value})}/></label>
                <label>Role <input className={classes.amountInput} value={userForm.role} onChange={(e) => setUserForm({...userForm, role: e.target.value})}/></label>
                <input type="submit" value="Add User" className={classes.amountSubmit} />
            </form>

            <button onClick={handleUserForm}>Save Users</button>

            <NavigationButton direction={'browser'}/>
        </div>
    )
}

export default FillFlights;