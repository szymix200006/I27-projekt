import classes from '../styles/Flight.module.css';

const Flight = ({arrive, departure, from, to}) => {
    return(
        <div className={classes.flightContainer}>
            <div className={classes.flightInfo}>Arrive: {arrive}</div>
            <div className={classes.flightInfo}>Departure: {departure}</div>
            <div className={classes.flightInfo}>From: {from}</div>
            <div className={classes.flightInfo}>To: {to}</div>
        </div>
    )
}

export default Flight;