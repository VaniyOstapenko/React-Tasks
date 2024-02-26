import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task52() {
    const [inp, setInp] = useState('')

    function getText(e) {
        setInp(e.target.value);
    }
    return (
        <>
            <h1>Задача 52</h1>
            <p>Форма с использованием useState: Создайте компонент текстового
                поля, который позволяет пользователю вводить текст и отображает
                его в реальном времени.</p>

            <input onChange={getText}></input>
            <h1>{inp}</h1>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task52;