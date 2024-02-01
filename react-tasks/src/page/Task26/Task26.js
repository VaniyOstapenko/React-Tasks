import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task26() {
    const [flage, setFlage] = useState(false)

    function clickButton() {
        if (flage) {
            setFlage(false)
        } else {
            setFlage(true)
        }
    }
    return (
        <>
            <h1>Задача 25</h1>
            <p>Создайте компонент с кнопкой"Показать/Скрыть текст". При нажатии на кнопку текст должен появляться или исчезать</p>

            <button onClick={clickButton}>Показать/Скрыть текст</button>
            <p>{flage ? 'Скрой меня' : null}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task26;