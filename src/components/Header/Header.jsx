import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header h-20'>
            <div>
                <h1 className='text-4xl'><span>Team</span> <span>Bangladesh</span></h1>
            </div>
            <div>
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">About</a>
                <a href="">Login</a>
            </div>
        </div>
    );
};

export default Header;