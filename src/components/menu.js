import React from 'react';
import menuData from './menu-data';
import Appetizers from './appetizers';
import './menu.css';

const Menu = () => {
    return (
        <Appetizers menu={menuData.appetizers} />
    )
}

export default Menu;