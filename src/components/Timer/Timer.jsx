import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";


const getFormattedTime = (seconds) => {
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

export const Timer = () => {


    const globalState = useSelector(state => state);
    const dispatch = useDispatch();
    const ref = useRef(null);
}