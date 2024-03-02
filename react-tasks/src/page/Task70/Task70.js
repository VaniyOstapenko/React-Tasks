import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Task70() {
    const color = useRef();
    const arrColor = ['red', 'green', 'gray'];

    function clickButton() {
        color.current.style.color = arrColor[Math.floor(Math.random() * 3)]
    }

    return (
        <>
            <h1>Задача 70</h1>
            <p>Создайте компонент, который по клику на кнопку добавляет
                рандомный color к заголовку</p>


            <button onClick={clickButton}>Click me</button>
            <h1 ref={color} style={{ color: 'black' }}>Заголовок</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task70;