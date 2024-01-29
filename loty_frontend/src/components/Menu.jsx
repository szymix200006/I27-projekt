import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from '../styles/Menu.module.css';

const Menu = ({routes}) => {
    const [menu, setMenu] = useState(false);

    return (
        <div className={menu ? classes.menuContainerActive : classes.menuContainer}>
            <div className={menu ? classes.menuButtonWrapperActive : classes.menuButtonWrapper}><span className="material-symbols-outlined" onClick={() => setMenu(!menu)}>menu</span></div>
            {menu &&
                    routes.map(route => {
                        return (
                            <div className={classes.routeBox}>
                                <NavLink to={route} className={classes.routeText} onClick={() => setMenu(!menu)}>{route == '' ? 'FILLER' : route.toUpperCase()}</NavLink>
                            </div>
                        )
                    })
                
            }
       </div>
    )
}

export default Menu;