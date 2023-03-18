import React from 'react'
import { useDispatch } from 'react-redux'
import increment from '../action'

const MyButton = () => {
    let display = useDispatch();
    return (
        <button onClick={() => display(increment(1))}>Increase counter</button>
    );
}

export default MyButton;