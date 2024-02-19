import { useState, useEffect } from "react";



const useGeolocation = () => {
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    const findCity = async (position) => {
        try{
            const response = 
                await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`);
            if(!response.ok) throw new Error('Could not get the location');
            const data = await response.json();
    
            setCity(data.city)
        } catch(error) {
            setError(error.message);
        }
    }
    
    const getPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    useEffect(() => {
        (async function(){
            const position = await getPosition();
            await findCity(position)
        })()
    }, []);
    
    return {city, error}
}

export default useGeolocation;


