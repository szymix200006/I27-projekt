import { useState, useEffect } from "react";
import {v4} from 'uuid';
import FindGeolocation from "../logic/FindGeolocation";
import ErrorContainer from "./ErrorContainer";
import SuggestionList from "./SuggestionList";

const LocationForm = ({setRequestBody}) => {
    const [formData, setFormData] = useState({
        city: ''
    }); 
    const [formErrors, setFormErrors] = useState([]);

    const onLocationFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();

        if(errors.length) setFormErrors(errors);
        else {
            setRequestBody({
                start: formData.city
            });
            setFormErrors([]);
        }
    }

    const validateForm = () => {
        const {city} = formData;
        const errors = [];

        if(!city) errors.push("Invalid city");

        return errors;
    }

    useEffect(() => {
        (async function() {
            const currentCity = await FindGeolocation();
            setFormData({city: currentCity})
            setRequestBody({start: currentCity})
        })()
    }, []);

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className="location-form-container">
            <form onSubmit={onLocationFormSubmit}>
                <label htmlFor='city'>
                    City:
                    <input 
                        name='city' 
                        className='location-form-city-input' 
                        value={formData.city} 
                        onChange={handleChange}
                    />
                </label>
                <SuggestionList url={'http://localhost:8080/user/airports'} value={formData.city} setInput={(value) => setFormData(prevData => ({...prevData, city: value}))}/>
                <ErrorContainer errors={formErrors}/>
                <input type="submit" value="Search" className="location-form-submit"/>
            </form>
        </div>
    )
}

export default LocationForm;