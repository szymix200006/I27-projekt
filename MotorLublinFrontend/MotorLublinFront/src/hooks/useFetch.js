import {useState, useEffect, useRef} from 'react';

const useFetch = (url, requestBody, rerender) => {
    const [data, setData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
            (async function(){
                try{
                    const response = await fetch(url,{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(requestBody),
                        signal: controller.signal
                    });
                    if(!response.ok) throw new Error('Cannot fetch from this resource');
                    const fetchedData = await response.json();
                    setData(fetchedData);
                } catch(error) {
                    setError(error.message);
                }
                setIsPending(false);
            })()

            return () => controller.abort();
        
    }, [rerender && requestBody])

    return {data, isPending, error}
}

export default useFetch;