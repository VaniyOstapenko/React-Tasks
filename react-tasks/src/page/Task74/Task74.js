import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo } from 'react';
import axios from 'axios';

function Task74() {
    const [str, setStr] = useState('');

    function keepStrink(e) {
        setStr(e.target.value)
    }

    const reverseStr = useMemo(() => {
        return str.split('').reverse().join('')
    })
    return (
        <>
            <h1>Задача 74</h1>
            <p>Напишите программу, которая принимает строку от пользователя
                и выводит ее в обратном порядке. Используй хук useState для
                хранения строки и хук useMemo для кэширования результата.</p>

            <input onChange={keepStrink} type="text" />
            <h1>{reverseStr}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task74;