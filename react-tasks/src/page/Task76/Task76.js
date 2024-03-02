import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

function Task76() {
    const [num, setNum] = useState(0);

    const changeBtn = useCallback(() => {
        setNum(num + 1)
    }, [num])
    return (
        <>
            <h1>Задача 76</h1>
            <p>Создайте компонент с кнопкой"Увеличитьсчетчик".При каждом клике
                на кнопку счетчик должен увеличиваться на 1. Используйте
                useCallback, чтобы оптимизировать обработчик клика на кнопке.</p>

            <button onClick={changeBtn}>Click me</button>
            <p>{num}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task76;