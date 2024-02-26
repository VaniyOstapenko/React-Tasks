import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task53() {
    const [text, setText] = useState(false);

    function clickButton1() {
        setText(true)
    }

    function clickButton2() {
        setText(false)
    }

    return (
        <>
            <h1>Задача 53</h1>
            <p>Отображение текста с использованием useState: Создайте компонент, который предоставляет две кнопки: "Показать" и
                "Скрыть". При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст скрывается.</p>


            <button onClick={clickButton1}>Показать</button>
            <button onClick={clickButton2}>Скрыть</button>
            {text ? <p>Hi</p> : null}
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task53;