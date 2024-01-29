import { useState, useEffect } from 'react';

const useFetch = (url, requestBody, param) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if(response.status == 200) return response.json();
            else throw Error(response.message);            
        })
        .then(data => {
            setIsPending(false);
            setData(data);
        })
        .catch(error => {
            setIsPending(false)
            alert(error.message)
        })
    },[param || url])

    return { data, isPending }
}

export default useFetch;