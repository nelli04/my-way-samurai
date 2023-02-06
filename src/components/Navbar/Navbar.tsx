import React from 'react';
import n from './navbar.module.css'

export function Navbar () {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <a href='src/components#index.html'>Profile</a>
            </div>
            <div className={n.item}>
                <a>Messages</a>
            </div>
            <div className={n.item}>
                <a>News</a>
            </div>
            <div className={n.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}