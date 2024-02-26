import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task61() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        const data = setInterval(() => setNum(num + 1), 1000)
        return () => clearInterval(data);
    })
    return (
        <>
            <h1>Задача 61</h1>
            <p>Счетчик с использованием useState и useEffect: Создайте компонент счетчика, который увеличивает значение счетчика
                на 1 каждую секунду с использованием useEffect.</p>

            <h1>{num}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task61;