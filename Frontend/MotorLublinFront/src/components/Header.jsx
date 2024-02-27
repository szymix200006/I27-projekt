import Logo from '../assets/MotorAir.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <NavLink to='' className='header-container'>   
            <img src={Logo} alt='logo'/>
        </NavLink>
    )
}

export default Header;