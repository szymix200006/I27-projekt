import { useState } from "react";
import ErrorContainer from "./ErrorContainer";
import SuggestionList from "./SuggestionList";

const FlightForm = ({setRequestBody}) => {
    const [formData, setFormData] = useState({
        start: '',
        destination: '',
        arriveTime: '',
        departureTime: ''
    });
    const [formErrors, setFormErrors] = useState([]);

    const onFlightFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateData();
        if(errors.length) setFormErrors(errors)
        else {
            setRequestBody(formData)
            setFormErrors([])
        }
    }

    const validateData = () => {
        const {start, destination, arriveTime, departureTime} = formData;
        const errors = [];

        if(start == '') errors.push('Start is empty');
        if(destination == '') errors.push('Destination is empty');
        if(arriveTime == '') errors.push('Arrive Time is empty');
        if(departureTime == '') errors.push('Departure Time is empty');

        return errors;
    }

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className="flight-form-container">
            <form className="flight-form-form" onSubmit={onFlightFormSubmit}>
                <label htmlFor="start">
                    Start
                    <input name="start" value={formData.start} onChange={handleChange}/>
                </label>
                <SuggestionList url={'http://localhost:8080/user/airports'} value={formData.start} setInput={(value) => setFormData(prevData => ({...prevData, start: value}))}/>
                <label htmlFor="destination">
                    Destination
                    <input name="destination" value={formData.destination} onChange={handleChange}/>
                </label>
                <SuggestionList url={'http://localhost:8080/user/airports'} value={formData.destination} setInput={(value) => setFormData(prevData => ({...prevData, destination: value}))}/>
                <label htmlFor="arriveTime">
                    Arrive Time
                    <input name="arriveTime" type="date" value={formData.arriveTime} onChange={handleChange}/>
                </label>
                <label htmlFor="departureTime">
                    Departure Time
                    <input name="departureTime" type="date" value={formData.departureTime} onChange={handleChange}/>
                </label>
                <input type="submit" value="Search" className="flight-form-submit-button"/>
            </form>
            <ErrorContainer errors={formErrors}/>
        </div>
    )
}

export default FlightForm;