import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        // if(window.innerWidth < 960) {
        //     setDropdown(false);
        // }
        // else {
            setDropdown(true)
        // }
    };

    const onMouseLeave = () => {
        // if(window.innerWidth < 960) {
        //     setDropdown(false);
        // }
        // else {
            setDropdown(false)
        // }
    };

    return (
        <>
            <nav className = 'navbar'>
                <Link to = '/' className = 'navbar-logo'>
                    SoBall <i class = 'fa-solid fa-basketball' />
                </Link>
                <div className = 'menu-icon' onClick={handleClick}> {/* onClick={handleClick} */}
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to = '/' className = 'nav-links'> {/*onClick = {closeMobileMenu}*/}
                            Home
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/about' className = 'nav-links'> {/*onClick = {closeMobileMenu}*/}
                            About
                        </Link>
                    </li>
                    <li className = 'nav-item'
                        onMouseEnter = {onMouseEnter}
                        onMouseLeave = {onMouseLeave}
                    >
                        <li to = '/select-game' className = 'nav-links'> {/*className = 'nav-links' onClick = {closeMobileMenu}*/}
                            Select a Game <i className = 'fas fa-caret-down /' />
                        </li>
                        {dropdown && <Dropdown/>}
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;