import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

function Nav() {
    return (
        <nav className='navbar navbar-expand-sm'>
            <div className='container-fluid'>
                {/* <Link to={'/'} className='navbar-brand'> */}
                    <h1>Solar Heater</h1>
                {/* </Link> */}
                
            </div>
        </nav>
    )
};


export default Nav;