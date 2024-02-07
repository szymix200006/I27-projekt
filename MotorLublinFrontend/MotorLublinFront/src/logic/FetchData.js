const fetchData = async (url, requestBody) => {
    let data;
    let pending = true;

    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        }) 
        data = await response.json();
        pending = false; 
    } catch(error) {
        pending = false;
        throw new Error(error)
    }

    return {data, pending}
}

export default fetchData;