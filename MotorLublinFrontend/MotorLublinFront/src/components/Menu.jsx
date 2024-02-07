import { useState } from 'react';
import Header from './Header.jsx';
import MenuButton from './MenuButton.jsx';
import {v4} from 'uuid';

const Menu = ({paths}) => {
    const [transparent, setTransparent] = useState(true);

    const setTransparentBackground = () => {
        if(window.scrollY > 200) setTransparent(false);
        else setTransparent(true);
    }

    window.addEventListener('scroll', setTransparentBackground);

    return (
        <div className={transparent ? 'menu-container transparent' : 'menu-container'}>
            <Header/>
            <nav className='menu-buttons'>
                {paths.map(path => 
                    <MenuButton 
                        direction={path} 
                        key={v4()}
                    />
                )}
            </nav>
        </div>
    )
}

export default Menu;