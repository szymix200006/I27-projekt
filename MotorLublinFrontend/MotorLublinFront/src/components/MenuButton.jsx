import {NavLink} from 'react-router-dom';

const MenuButton = ({direction}) => {
    return (
        <div className='menu-button-container'>
            <NavLink to={direction} className='menu-button-text'>{direction.toUpperCase()}</NavLink>
        </div>
    )
}

export default MenuButton;