const findCity = async (position) => {
    const response = 
        await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`);
    const data = await response.json();

    return data.city;
}

const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const findLocation = async () => {
    const position = await getPosition();
    const city = await findCity(position);
    return city;
}

export default findLocation;