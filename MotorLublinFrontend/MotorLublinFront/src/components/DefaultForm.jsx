import { useState } from "react"
import ErrorContainer from "./ErrorContainer";

const DefaultForm = ({handler, name, url}) => {
    const [formData, setFormData] = useState({
        amount: 0
    })
    const [formErrors, setFormErrors] = useState([]);

    const onDefaultFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateData();

        if(errors.length) setFormErrors(errors)
        else {
            setFormErrors([]);
            handler(url, formData)
            setFormData({amount: 0})
        }
    }

    const validateData = () => {
        const {amount} = formData;
        const errors = [];

        if(amount <= 0) errors.push("Amount must be bigger than 0.")

        return errors;
    }

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="default-form-container">
            <h1>{name}</h1>
            <form onSubmit={onDefaultFormSubmit}>
                <div className="form-input-container">
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input className="form-input" type="number" name="amount" value={formData.amount} onChange={handleChange} />
                </div>
                <ErrorContainer errors={formErrors}/>
                <input type="submit" value="Save" className="form-submit" />
            </form>
        </div>
    )
}

export default DefaultForm;