import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const style = {
    icon_home: {
        color: '9bcaf1',
    },
};
const NavBar = () => (
    <nav className="menu">
        <ul>
            <li>
                <Button component={Link} to="/" class="menu_nav">Inicio</Button>
            </li>
            
            <li>
                <Button component={Link} to="/women" class="menu_nav">Mujeres</Button>
            </li>

            <li>
                <Button component={Link} to="/mens" class="menu_nav">Hombres</Button>
            </li>
            
            <li>
                <Button component={Link} to="/DescProm" class="menu_nav">Desc/Prom</Button>
            </li>

            <li>
                <Button component={Link} to="/signup" class="menu_nav">Registrarse</Button>
            </li>

            <li>
                <Button component={Link} to="/login" class="menu_nav"><AccountCircleIcon style={style.icon_home}/></Button>
            </li>

            <li>
                <Button component={Link} to="/cart" class="menu_nav"><ShoppingCartIcon style={style.icon_home}/></Button>
            </li>

        </ul>
    </nav>    
);

export default NavBar;