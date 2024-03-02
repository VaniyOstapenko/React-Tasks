import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Task67() {
    const inp = useRef();
    const arrColor = ['green', 'gray', 'red', 'blue']

    function focus() {
        inp.current.style.backgroundColor = arrColor[Math.floor(Math.random() * 4)];
    }
    return (
        <>
            <h1>Задача 67</h1>
            <p>Создайте компонент, который при фокусе на текстовом поле добавляет background(onFocus, onBlur)</p>

            <input ref={inp} onFocus={focus} type="text" />
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task67;