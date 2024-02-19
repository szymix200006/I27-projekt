import { useState, useRef, useEffect } from "react";
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
    const [sDisplay, setSDisplay] = useState({
        start: false,
        destination: false
    });
    const startRef = useRef(null);
    const destinationRef = useRef(null);

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
        setSDisplay(prevDisplay => ({
            ...prevDisplay,
            [e.target.name]: true
        }))
    }

    const handleClickOutside = e => {
        const {current: wrap} = destinationRef;
        if(wrap && !wrap.contains(e.target))
            setSDisplay(false)
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => removeEventListener('mousedown', handleClickOutside)
    }, []);

    return (
        <>
            <form className="flight-form-container" onSubmit={onFlightFormSubmit}>
                <h1>Find your flight</h1>
                <div className="form-input-container" ref={startRef}>
                    <label htmlFor="start" className="form-label">
                        Start
                    </label>
                    <input name="start" value={formData.start} onChange={handleChange} className="form-input"/>
                    <SuggestionList url={'http://localhost:8080/user/airports'} value={formData.start} setInput={(value) => setFormData(prevData => ({...prevData, start: value}))} display={sDisplay.start}/>
                </div>
                <div className="form-input-container" ref={destinationRef}>  
                    <label htmlFor="destination" className="form-label">
                        Destination
                    </label>
                    <input name="destination" value={formData.destination} onChange={handleChange} className="form-input"/>
                    <SuggestionList url={'http://localhost:8080/user/airports'} value={formData.destination} setInput={(value) => setFormData(prevData => ({...prevData, destination: value}))} display={sDisplay.destination}/>
                </div>
                <div className="form-input-container">
                    <label htmlFor="arriveTime" className="form-label">
                        Arrive Time
                    </label>
                    <input name="arriveTime" type="date" value={formData.arriveTime} onChange={handleChange} className="form-input"/>
                </div>
                    <div className="form-input-container">
                    <label htmlFor="departureTime" className="form-label">
                        Departure Time
                    </label>
                    <input name="departureTime" type="date" value={formData.departureTime} onChange={handleChange} className="form-input"/>
                </div>
                <ErrorContainer errors={formErrors}/>
                <input type="submit" value="Search" className="form-submit"/>
            </form>
        </>
    )
}

export default FlightForm;