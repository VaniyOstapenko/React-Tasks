import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task41() {
    const [strButton, setStrButton] = useState('')

    function clickButton(e) {
        setStrButton(e.target.textContent)
    }
    return (
        <>
            <h1>Задача 41</h1>
            <p>у вас есть 3 кнопки: о нас, цена, главная страница
                h1  содержит текст активной(нажатой) кнопки
                (если нажали на ,,цена,, отображать слово ,,цена,, в h1)</p>

            <h1>{strButton}</h1>
            <button onClick={clickButton}>О нас</button>
            <button onClick={clickButton}>Цена</button>
            <button onClick={clickButton}>Главная страница</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task41;