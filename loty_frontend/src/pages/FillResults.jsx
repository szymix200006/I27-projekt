import { useLocation } from "react-router-dom";
import NavigationButton from "../components/NavigationButton";
import classes from '../styles/FillResults.module.css';
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import useFetch from "../hooks/useFetch";

const FillResults = () => {
    const location = useLocation();
    const adminForm = location.state;
    const { data: flights, isPending: fPending} = useFetch("http://192.168.1.125:8080/admin/flight", {amount: adminForm.flights});
    const { data: tickets, isPending: tPending} = useFetch("http://192.168.1.125:8080/admin/ticket", {amount: adminForm.tickets});
    const { data: users, isPending: uPending} = useFetch("http://192.168.1.125:8080/admin/randomUser", {amount: adminForm.users});

    return (
        <>
            { fPending && tPending && uPending  ? 
            <div className={classes.loaderWrapper}>
                <PacmanLoader
                    color={'#FF10FF'}
                    loading={fPending}
                    size={50}
                />
            </div> :
            <div className={classes.fillResultsContainer}>
                <div className={classes.fillResultsInfo}>
                    <span className={classes.fillResultsText}>Dodano {flights} lotów.</span>
                    <span className={classes.fillResultsText}>Dodano {tickets} biletów.</span>
                    <span className={classes.fillResultsText}>Dodano {users} userów.</span>
                </div>
                <NavigationButton direction={''}/>
            </div>
            }
        </>
    )
}

export default FillResults;