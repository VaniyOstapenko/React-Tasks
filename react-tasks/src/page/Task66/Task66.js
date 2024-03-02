import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Task66() {
    const color = useRef()
    const arrColor = ['green', 'gray', 'red', 'blue']
    function clickButton() {
        color.current.style.color = arrColor[Math.floor(Math.random() * 4)];
    }
    return (
        <>
            <h1>Задача 66</h1>
            <p>рандомно у h1 меняйте цвет текста</p>

            <h1 ref={color} style={{ color: 'black' }}>Hi</h1>
            <button onClick={clickButton}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task66;