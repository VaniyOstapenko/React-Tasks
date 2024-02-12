import { Link } from 'react-router-dom'
import { useState } from 'react';

function Task34() {
    const [flag, setFlag] = useState(true);
    const [color, setColor] = useState('red')
    function clickButton() {
        if (flag) {
            setFlag(false);
            setColor('green')
        } else {
            setFlag(true);
            setColor('red')
        }
    }
    return (
        <>
            <h1>Задача 34</h1>
            <p>есть кнопка с названием ,,добавить цвет,,. по клику на кнопку твоя задача поменять цвет шрифта h1. при
                повторном клике цвет вернуть в первоначальное состояние </p>

            <h1 style={{ color: color }}>Привет</h1 >
            <button onClick={clickButton}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task34;