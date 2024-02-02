import React, { useEffect, useRef } from "react";
import { IoIosPlay, IoMdPause, IoIosRefresh } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { enable, disable, reset, setTimer, modeSession, modeBreak } from '../../actions/index'
import audio from './signal.wav'

const getFormattedTime = (seconds) => {
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

const Timer = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const audioRef = useRef(null);

    useEffect(() => {
        if (state.active && state.timer > 0) {
            const interval = setInterval(() => {
                dispatch(setTimer(state.timer - 1));
            }, 1000);
            return () => clearInterval(interval);
        } else if (state.timer <= 0) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();

            if (!state.modes) {
                dispatch(setTimer(state.isBreak * 60));
                dispatch(modeBreak());
            } else {
                dispatch(setTimer(state.session * 60));
                dispatch(modeSession());
            }
        }
    }, [dispatch, state]);

    const toggleTimer = () => {
        if (state.active) dispatch(disable());
        else dispatch(enable());
    };

    const resetDefault = () => {
        dispatch(reset());
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    return (
        <>
            <div className="timer">
                <div className="timer-wrapper">
                    <div id="timer-label">{state.modes ? 'Break' : 'Session'}</div>
                    <div id="time-left" className={state.active ? "animated" : null}>{getFormattedTime(state.timer)}</div>
                </div>
            </div>
            <div className="timer-control">
                <button id="start_stop" className="pomodoro-btn" onClick={toggleTimer}>{state.active ? <IoMdPause /> : <IoIosPlay />}</button>
                <button id="reset" className="pomodoro-btn" onClick={resetDefault}><IoIosRefresh /></button>
            </div>
            <audio ref={audioRef} id="beep" preload="auto" src={audio}></audio>
        </>
    )
}

export default Timer;