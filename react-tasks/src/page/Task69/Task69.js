import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Task69() {
    const btn = useRef();

    function clickButton() {
        btn.current.style.display = 'block'
    }

    function clickOut() {
        btn.current.style.display = 'none'
    }
    return (
        <>
            <h1>Задача 69</h1>
            <p> Разработайте компонент для реализации "подсказок" (tooltips).
                При наведении на элемент интерфейса (например, кнопку),
                компонент отображает подсказку с текстом. Подсказку можно
                закрыть, кликнув по ней, используя useRef. (onMouseEnter) </p>

            <div ref={btn} style={{ display: 'none' }}>Подсказка</div>
            <button onMouseEnter={clickButton} onMouseLeave={clickOut}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task69;