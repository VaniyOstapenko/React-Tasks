import { useContext, useReducer, useState } from "react";
import { Link } from 'react-router-dom';


function reducer(state, action) {
    switch (action.type) {
        case 'val':
            return action.value;
        default:
            break;
    }
}

function Task89() {
    const [inpVal1, dispatch1] = useReducer(reducer, '')
    const [inpVal2, dispatch2] = useReducer(reducer, '')

    return (
        <>
            <p>Задача 89</p>
            <p>Создайте компонент отслеживающий вводимое значение 2 input.
                Посчитать сумму 2 input. По клику на кнопку отображать
                результат в  консоль</p>

            <input onChange={(e) => dispatch1({ type: 'val', value: e.target.value })} type="text" />
            <input onChange={(e) => dispatch2({ type: 'val', value: e.target.value })} type="text" />
            <button onClick={() => console.log(Number(inpVal1) + Number(inpVal2))}>Click me</button >
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task89;