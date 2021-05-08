import React from 'react';
import Logo from './img/Logo.png';

export default function Logos() {
    return (
        <div className="logo">
            <h2 className="titulo">
                <img src={Logo} width='300' height='150' alt="Logo"/>
            </h2>    
        </div>    
    );
}
