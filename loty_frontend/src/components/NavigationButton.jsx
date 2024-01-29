import { NavLink } from "react-router-dom";
import classes from "../styles/NavigationButton.module.css"

const NavigationButton = ({direction}) => {
    return (
        <div className={classes.navigationButtonContainer}>
            <NavLink to={'/'+direction} className={classes.navigationButtonText}>Go to {direction == '' ? 'FILLER' : direction.toUpperCase()}</NavLink>
        </div>
    )
}

export default NavigationButton;