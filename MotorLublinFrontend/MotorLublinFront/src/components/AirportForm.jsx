import ErrorContainer from "./ErrorContainer";
import { useState } from "react";

const AirportForm = ({handler, url}) => {
    const [formData, setFormData] = useState({
        name: ''
    });
    const [formErrors, setFormErrors] = useState([]);

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const validateData = () => {
        const {name} = formData;
        const errors = [];

        if(name == '') errors.push('Name can\'t be empty');

        return errors;
    }

    const onAirportFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateData();

        if(errors.length) setFormErrors(errors);
        else {
            setFormErrors([]);
            handler(url, {data:[formData]});
            setFormData({name: ''});
        }
    }

    return (
        <div className="airport-form-container">
            <form className="airport-form" onSubmit={onAirportFormSubmit}>
                <label htmlFor="name">
                    Name
                    <input type='text' name='name' value={formData.name} onChange={handleChange} />
                </label>
                <input type="submit" value="Save" />
            </form>
            <ErrorContainer errors={formErrors} />
        </div>
    )
}

export default AirportForm;