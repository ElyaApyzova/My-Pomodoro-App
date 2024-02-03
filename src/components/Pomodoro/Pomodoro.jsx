import React from "react";
import { IconContext } from 'react-icons';
import { Controller } from "./Controller";
import  Timer  from './Timer'
import './Pomodoro.css';


const Pomodoro = () => {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <div className="wrapper">
                <div className="container">
                    <h1 className="pomodoro-title">Pomodoro Tracker</h1>
                    <Controller  mode="break"/>
                    <Controller  mode="session"/>
                    <Timer />
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Pomodoro;