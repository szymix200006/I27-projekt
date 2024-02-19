import { v4 } from "uuid";
import useFetch from "../hooks/useFetch";

const SuggestionList = ({url, value, setInput, display}) => {
    const {data: suggestions} = useFetch(url, {name: ''});

    const onSuggestionClick = (e) => {
        setInput(e.target.innerHTML);
    }

    return (
        <>
        {display && <div className="suggestions-list-container">
            {value != '' && suggestions?.filter(suggestion => {
                    if(suggestion.name.includes(value) && suggestion.name != value)
                    return suggestion
            }).map(suggestion => {
                return <span className="suggestion-list-item" key={v4()} onClick={onSuggestionClick}>{suggestion.name}</span>
            })}
        </div>}
        </>
    )

}

export default SuggestionList;