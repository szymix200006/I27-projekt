import fetchData from "../logic/FetchData";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

const SuggestionList = ({url, value, setInput}) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        (async function() {
            const {data} = await fetchData(url, {name: value});
            setSuggestions(data);
        })()
    }, []);

    const onSuggestionClick = (e) => {
        setInput(e.target.innerHTML);
    }

    return (
        <>
            {value != '' && suggestions.filter(suggestion => {
                    if(suggestion.name.includes(value) && suggestion.name != value)
                    return suggestion
            }).map(suggestion => {
                return <span key={v4()} onClick={onSuggestionClick}>{suggestion.name}</span>
            })}
        </>
    )

}

export default SuggestionList;