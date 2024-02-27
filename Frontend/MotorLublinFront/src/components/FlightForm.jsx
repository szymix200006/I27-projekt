import { useState } from "react";
import ErrorContainer from "./ErrorContainer";
import SuggestionList from "./SuggestionList";
import FormInput from "./FormInput";

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
        /*setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));*/
    }

    

    return (
        <>
            <form className="flight-form-container" onSubmit={onFlightFormSubmit}>
                <h1>Find your flight</h1>
                <FormInput 
                    name={'start'}
                    label={'Start'}
                    value={formData.start}
                    url={'http://localhost:8080/user/airports'}
                    setFormData={setFormData}
                />
                <FormInput 
                    name={'destination'}
                    label={'Destination'}
                    value={formData.destination}
                    url={'http://localhost:8080/user/airports'}
                    setFormData={setFormData}
                />
                <FormInput 
                    name={'arriveTime'}
                    label={'Arrive Time'}
                    value={formData.arriveTime}
                    type={'date'}
                    setFormData={setFormData}
                />
                <FormInput 
                    name={'departureTime'}
                    label={'Departure Time'}
                    value={formData.departureTime}
                    type={'date'}
                    setFormData={setFormData}
                />
                <ErrorContainer errors={formErrors}/>
                <input type="submit" value="Search" className="form-submit"/>
            </form>
        </>
    )
}

export default FlightForm;