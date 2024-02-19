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
        <div className="admin-form-container">
            <form onSubmit={onPlaneFormSubmit}>
            <h1>Add custom plane</h1>
            <div className="form-input-container">
                <label htmlFor="model" className="form-label">
                    Model
                    </label>
                    <input className="form-input" type="text" name="model" value={formData.model} onChange={handleChange}/>
                </div>
                    <div className="form-input-container">
                <label htmlFor="brand" className="form-label">
                    Brand
                    </label>
                    
                    <input className="form-input" type="text" name="brand" value={formData.brand} onChange={handleChange}/>
                    </div>
                    <div className="form-input-container">
                <label htmlFor="seatCount" className="form-label">
                    Seat count
                    </label>
                    <input className="form-input" type="text" name="seatCount" value={formData.seatCount} onChange={handleChange}/>
                    </div>
                <input type="submit" value="Save" className="form-submit"/>
            </form>
            <ErrorContainer errors={formErrors} />
        </div>
    )
}

export default PlaneForm;