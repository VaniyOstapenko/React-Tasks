import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task60() {
    const [inp, setInp] = useState('')

    function changeStateInput(e) {
        setInp(e.target.value)
    }

    useEffect(() => {
        console.log(inp)
    }, [inp])
    return (
        <>
            <h1>Задача 60</h1>
            <p>Форма ввода с использованием useState и useEffect: Создайте компонент React, который содержит форму с
                полем ввода. Используйте хук useState для хранения значения введенного текста и хук useEffect для отслеживания
                изменений этого значения. При каждом изменении значения в поле ввода, выводить его вконсоль с помощью useEffect.</p>


            <input onChange={changeStateInput} type="text" />

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task60;