import { useContext, useReducer, useState } from "react";
import { Link } from 'react-router-dom';
import reducer from '../../Reducer/Reducer'

function Task85() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <p>Задача 85</p>
            <p>Создайте компонент счетчика, который может увеличивать, уменьшать, сбрасывать значение при нажатии на соответствующие
                кнопки.</p>

            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
            <button onClick={() => dispatch({ type: 'delete' })}>Delete</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task85;