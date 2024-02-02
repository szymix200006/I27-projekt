import { useLocation } from "react-router-dom";
import Flight from "../components/Flight";
import NavigationButton from "../components/NavigationButton";
import classes from '../styles/BrowserResults.module.css';
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import useFetch from "../hooks/useFetch";


const BrowserResults = () => {
    const location = useLocation();
    const formData = location.state;
    const { data, isPending } = useFetch("http://192.168.1.146:8080/user/flights", formData)

    return(
        <>
            { isPending ? 
            <div className={classes.loaderWrapper}>
                <PacmanLoader
                    color={'#FF10FF'}
                    loading={isPending}
                    size={50}
                />
            </div> :
            <div className={classes.browserResultsContainer}>   
                <h1 className={classes.browserResultsHeader}>Flights Found</h1>
                <div className={classes.browserResultsBox}>
                    {data.length > 0 ? data.map(flight => {
                        return <Flight 
                            arrive={flight.arrive} 
                            departure={flight.departure}
                            from={flight.arriveDataTime}
                            to={flight.departureDateTime} 
                            key={Math.random()}/>
                    }) : <span className={classes.noFlightsBox}> No flights found... </span>}
                </div>
                <NavigationButton direction={'browser'}/>
            </div>
            }
        </>
    )
}

export default BrowserResults;