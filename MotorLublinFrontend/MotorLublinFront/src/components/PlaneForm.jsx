import ErrorContainer from "./ErrorContainer";
import { useState } from "react";

const PlaneForm = ({handler, url}) => {
    const [formData, setFormData] = useState({
        model: '',
        seatCount: 0,
        brand: ''
    })

    const [formErrors, setFormErrors] = useState([]);

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const onPlaneFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateData();

        if(errors.length) setFormErrors(errors);
        else {
            setFormErrors([]);
            handler(url, {data:[formData]});
            setFormData({
                model: '',
                seatCount: 0,
                brand: ''
            });
        }
    }

    const validateData = () => {
        const {model, brand, seatCount} = formData;
        const errors = [];

        if(model == '') errors.push('Model can\'t be empty');
        if(brand == '') errors.push('Brand can\'t be empty');
        if(seatCount < 2) errors.push('Seat count must be greater than 1');

        return errors;
    }

    return (
        <div className="plane-form-container">
            <form className="plane-form" onSubmit={onPlaneFormSubmit}>
                <label htmlFor="model">
                    Model
                    <input type="text" name="model" value={formData.model} onChange={handleChange}/>
                </label>
                <label htmlFor="brand">
                    Brand
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange}/>
                </label>
                <label htmlFor="seatCount">
                    Seat count
                    <input type="text" name="seatCount" value={formData.seatCount} onChange={handleChange}/>
                </label>
                <input type="submit" value="Save" />
            </form>
            <ErrorContainer errors={formErrors} />
        </div>
    )
}

export default PlaneForm;