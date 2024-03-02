import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

function Task79() {
    const [color, setColor] = useState();

    const getColor = useCallback((e) => {
        setColor(e.target.textContent)
    }, [color])
    return (
        <>
            <h1>Задача 79</h1>
            <p>Создайте компонент, который предоставляет пользователю выбор
                цвета из списка. При выборе цвета, компонент должен отображать
                выбранный цвет на странице. Используйте useCallback, чтобы
                оптимизировать функцию выбора цвета.</p>

            <h1 style={{ backgroundColor: color }}>Text</h1>
            <ul onClick={getColor}>
                <li>red</li>
                <li>green</li>
                <li>gray</li>
            </ul>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task79;