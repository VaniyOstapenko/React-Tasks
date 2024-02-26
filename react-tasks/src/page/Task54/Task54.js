import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task54() {
    const [color, setColor] = useState('black');

    function updateColor(e) {
        setColor(e.target.textContent)
    }
    return (
        <>
            <h1>Задача 53</h1>
            <p>Изменение цвета с использованием useState: Создайте компонент выбора цвета, который позволяет пользователю выбирать
                цвет из списка и отображает цвет выбранного цвета на экране.</p>


            <ul onClick={updateColor}>
                <li>green</li>
                <li>red</li>
                <li>gray</li>
                <li>blue</li>
            </ul>
            <h1 style={{ color: color }}>Hi</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task54;