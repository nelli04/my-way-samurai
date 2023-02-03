import React from 'react';
import './App.css';
import s from './header.module.css'

const App = () => {
    return (
        <div className={s.app_wrapper}>
            <header>
                <img src=''/>
            </header>
            <nav>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Settings
                </div>
                <div>
                    Main Content
                </div>
            </nav>
        </div>
    );
}

export default App; 