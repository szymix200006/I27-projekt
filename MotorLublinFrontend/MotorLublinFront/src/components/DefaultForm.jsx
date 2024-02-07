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
                <label htmlFor="amount">
                    Amount
                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
                </label>
                <input type="submit" value="Save" className="default-form-submit-button" />
            </form>
            <ErrorContainer errors={formErrors}/>
        </div>
    )
}

export default DefaultForm;