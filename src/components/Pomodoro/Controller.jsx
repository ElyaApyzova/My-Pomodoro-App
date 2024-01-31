import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreak, setSession, setTimer } from "../../actions";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";


export const Controller =(props) => {


    const active = useSelector(state => state.active);
    const mode = useSelector(state => state.mode);
    const isBreak = useSelector(state => state.isBreak);
    const session = useSelector(state => state.session);
    const dispatch = useDispatch();
    const currentValue = (props.mode === 'break' ? isBreak : session);

    const Setter = (type, value) => {
        
        if (!active) {

            const newValue = currentValue + value;
             if (newValue >= 1 && newValue <= 60) {
               
                
            if ((mode && props.mode === 'break') || (!mode && props.mode === 'session')) {
                dispatch(setTimer(newValue * 60));
            }

            if (props.mode === 'break') {
                dispatch(setBreak(newValue));
            } else {
                dispatch(setSession(newValue))
            }
             }

        }
    }

    return (
        <div className="control-box">
            <div id={props.mode + '-label'}>{props.mode} length</div>
            <button id={props.mode + '-increment'} className="btn-level pomodoro-btn" value="+" onClick={() => Setter(props.mode + 'Length', 1)}><IoMdArrowRoundUp /></button>
            <div id={props.mode + "-length"} className="btn-level">{currentValue}</div>
            <button id={props.mode + "-decrement"} className="btn-level pomodoro-btn" value="-" onClick={() => Setter(props.mode + 'Length', -1)}><IoMdArrowRoundDown /></button>
        </div>
    )
}