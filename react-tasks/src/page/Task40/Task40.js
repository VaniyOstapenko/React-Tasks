import { Link } from 'react-router-dom'
import { useState } from 'react';

function Task40() {
    const [str, setStr] = useState([])
    const arr = ['Vania', 'Hi', 'Are', 'You', 'Belarusian']
    function clickButton() {
        setStr(arr[Math.floor(Math.random() * 5)])
    }
    return (
        <>
            <h1>Задача 40</h1>
            <p>Напишите компонент, который будет показывать случайную строку в h1 по нажатии на кнопку. Слова хранятся в массиве</p>

            <h1>{str}</h1>
            <button onClick={clickButton}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task40;