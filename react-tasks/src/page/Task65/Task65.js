import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Task65() {
    const h1 = useRef();

    function clickButton() {
        h1.current.style.fontSize = +h1.current.style.fontSize.split('px')[0] + 1 + 'px';
    }
    return (
        <>
            <h1>Задача 65</h1>
            <p>Создайте компонент, который при каждом клике на кнопку увеличивает размер шрифта текста в элементе на странице.</p>

            <h1 ref={h1} style={{ fontSize: 18 }}>Привет</h1>
            <button onClick={clickButton}>Click me</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task65;