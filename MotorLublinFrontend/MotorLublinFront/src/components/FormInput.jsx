import SuggestionList from "./SuggestionList"

const FormInput = (name, handleChange, value, url) => {
    return (
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
    )
}