import { useEffect, useState } from "react";
import ErrorContainer from "./ErrorContainer";
import FormInput from "./FormInput"
import useGeolocation from "../hooks/useGeolocation";

const LocationForm = ({setRequestBody}) => {
    const {city: defaultCity} = useGeolocation();
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
        setFormData({city: defaultCity})
    }, [defaultCity]);

    return (
            <form onSubmit={onLocationFormSubmit} className="location-form-container">
                <FormInput 
                    name={'city'}
                    label={'City'}
                    value={formData.city}
                    url={'http://localhost:8080/user/airports'}
                    setFormData={setFormData}
                />
                <ErrorContainer errors={formErrors}/>
                <input type="submit" value="Search" className="form-submit"/>
            </form>
    )
}

export default LocationForm;