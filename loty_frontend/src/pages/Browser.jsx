import {useState} from "react";
import { useNavigate } from "react-router-dom";
import classes from '../styles/Browser.module.css';
import useFetch from "../hooks/useFetch";
import AutoInput from "../components/AutoInput"

const Browser = () => {
    const [formData, setFormData] = useState({
        destination: '',
        start: '',
        arriveTime: '',
        departureTime: ''
    });

    const {data: destination} = useFetch("http://192.168.1.146:8080/user/airports",{name: formData.destination}, formData.destination);
    const [listDestination, setListDestination] = useState(false);

    const {data: start} = useFetch("http://192.168.1.146:8080/user/airports",{name: formData.start}, formData.start);
    const [listStart, setListStart] = useState(false);

console.log(formData)

    const navigate = useNavigate();

    const handleBrowserForm = (e) => {
        e.preventDefault();
        navigate('/browserResult', {state: formData})
    }

    return (
        <div className={classes.browserContainer}>
            <h1 className={classes.browserHeader}>Znajdź swój lot!</h1>
            <form className={classes.browserForm} onSubmit={handleBrowserForm}>
                <div className={classes.inputWrapper}>
                    <input className={classes.browserInput} type="text" placeholder="arrive" value={formData.destination} onFocus={() => setListDestination(!listDestination)}  onChange={(e) => setFormData({...formData, destination: e.target.value})}/> 
                    {listDestination && <AutoInput list={destination?.map(airport => airport.name)} setInputValue={(value) => setFormData({...formData, destination: value})} closeList={() => setListDestination(!listDestination)}/>}           
                </div>
                <div className={classes.inputWrapper}>
                    <input className={classes.browserInput} type="text" placeholder="departure" value={formData.start} onFocus={() => setListStart(!listStart)} onChange={(e) => setFormData({...formData, start: e.target.value})}/>
                    {listStart && <AutoInput list={start?.map(airport => airport.name)} setInputValue={(value) => setFormData({...formData, start: value})} closeList={() => setListStart(!listStart)}/>}     
                </div>
                <input className={classes.browserInput} type="date" placeholder="arriveDate" value={formData.arriveTime} onChange={(e) => setFormData({...formData, arriveTime: e.target.value})}/>
                <input className={classes.browserInput} type="date" placeholder="departureDate" value={formData.departureTime} onChange={(e) => setFormData({...formData, departureTime: e.target.value})}/>
                <input type="submit" value="Search" className={classes.browserSubmit} />
            </form>
        </div>
    )
}

export default Browser;