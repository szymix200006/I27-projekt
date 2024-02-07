import FlightForm from "../components/FlightForm";
import PlaneList from "../components/PlaneList";
import { useState } from "react";

const Browser = () => {
    const [requestBody, setRequestBody] = useState({
        start: '',
        destination: '',
        arriveTime: '',
        departureTime: ''
    });

    return (
        <div className="browser-container">
            <FlightForm setRequestBody={setRequestBody}/>
            <PlaneList params={requestBody}/>
        </div>
    )
}

export default Browser;