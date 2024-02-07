import LocationForm from "../components/LocationForm";
import PlaneList from "../components/PlaneList";
import { useState } from "react";

const Home = () => {
    const [requestBody, setRequestBody] = useState({start: ''});

    return(
        <div className='home-container'>
            <div className='home-header-section'>
                <h1 className='home-header-title'>MotorAir</h1>
                <span className='home-header-desc'>Find the best flights</span>
            </div>
            <div className='home-main-section'>
                <h1 className='home-main-header'>Fast searching</h1>
                <LocationForm setRequestBody={setRequestBody}/>
                <PlaneList params={requestBody}/>
            </div>
        </div>
    )
}

export default Home;