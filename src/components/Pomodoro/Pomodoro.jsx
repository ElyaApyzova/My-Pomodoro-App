import React from "react";
import { IconContext } from 'react-icons';
import './Pomodoro.css';

const Pomodoro = () => {

    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
        <div className="wrapper">
            <div className="container">
                <h1 className="pomodoro-title">Pomodoro Tracker</h1>
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Pomodoro;