import { useEffect, useRef, useState } from "react";
import ErrorContainer from "./ErrorContainer";
import SuggestionList from "./SuggestionList";
import useGeolocation from "../hooks/useGeolocation";

const LocationForm = ({setRequestBody}) => {
    const {city: defaultCity} = useGeolocation();
    const [sDisplay, setSDisplay] = useState(false);
    const [formData, setFormData] = useState({
        city: ''
    }); 
    const [formErrors, setFormErrors] = useState([]);
    const wrapperRef = useRef(null);

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

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
        setSDisplay(true)
    }

    const handleClickOutside = e => {
        const {current: wrap} = wrapperRef;
        if(wrap && !wrap.contains(e.target))
            setSDisplay(false)
    }

    useEffect(() => {
        setFormData({city: defaultCity})
    }, [defaultCity]);

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => removeEventListener('mousedown', handleClickOutside)
    }, []);

    return (
            <form onSubmit={onLocationFormSubmit} className="location-form-container">
                <div ref={wrapperRef} className="form-input-container">
                    <label htmlFor='city' className="form-label">
                        City
                    </label>
                    <input 
                        name='city' 
                        className='form-input' 
                        value={formData.city} 
                        onChange={handleChange}
                    />  
                    <SuggestionList url={'http://localhost:8080/user/airports'} value={formData.city} setInput={(value) => setFormData(prevData => ({...prevData, city: value}))} display={sDisplay}/>
                </div>
                <ErrorContainer errors={formErrors}/>
                <input type="submit" value="Search" className="form-submit"/>
            </form>
    )
}

export default LocationForm;