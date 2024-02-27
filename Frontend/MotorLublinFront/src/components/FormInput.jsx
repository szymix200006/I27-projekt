import SuggestionList from "./SuggestionList"
import { useState, useRef, useEffect } from "react";

const FormInput = ({name, label, value, url, setFormData, type}) =>{
    const wrapperRef = useRef(null);
    const [sDisplay, setSDisplay] = useState(false);

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
        setSDisplay(true);
    }

    const handleClickOutside = e => {
        const {current: wrap} = wrapperRef;
        if(wrap && !wrap.contains(e.target)){
            setSDisplay(false);}
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className="form-input-container">
                    <label htmlFor={name} className="form-label">
                        {label}
                    </label>
                    <input 
                        type={type}
                        name={name}
                        className='form-input' 
                        value={value} 
                        onChange={handleChange}
                    />  
                    {url && <SuggestionList url={url} value={value} setInput={(suggestionValue) => setFormData(prevData => ({...prevData, [name]: suggestionValue}))} display={sDisplay}/>}
                </div>
    )
}

export default FormInput;