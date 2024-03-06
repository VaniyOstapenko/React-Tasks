import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task64() {
    const [num, setNum] = useState('');

    async function axiosRequest() {
        const randomNum = Math.floor(Math.random() * 100);
        const response = await axios.get(`http://numbersapi.com/${randomNum}`)
        setNum(response.data)
    }

    useEffect(() => {
        axiosRequest()
    }, [])
    return (
        <>
            <h1>Задача 64</h1>
            <p>Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте компонент React,
                который при первичном рендеринге отправляет запрос к API с рандомно сгенерированным числом и отображает
                результат в консоль.</p>

            <p>{num}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task64;