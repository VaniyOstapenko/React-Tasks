import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task51() {
    const [count, setCount] = useState(0)

    function clickButtonPlus() {
        setCount(count + 1)
    }

    function clickButtonMinus() {
        setCount(count - 1)
    }
    return (
        <>
            <h1>Задача 51</h1>
            <p>Счетчик с использованием useState: Создай компонент React,
                который отображает числовое значение и кнопки"+1"и"-1".
                Используйте хук useState для управления состоянием счетчика.
                При нажатии на кнопки, значение счетчика должно увеличиваться
                или уменьшаться.</p>

            <button onClick={clickButtonPlus}>+1</button>
            <button onClick={clickButtonMinus}>-1</button>
            <h2>{count}</h2>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task51;