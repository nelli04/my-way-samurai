import React from 'react';

export function Navbar () {
    return (
        <nav className='nav'>
            <div>
                <a href='src/components#index.html'>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}