import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

function Task77() {
    const [arr, setArr] = useState(['Hi', 'Vania', 'How', 'Are', 'You']);

    const changeBtn = useCallback(function clickButton(e) {
        setArr(arr.filter((el) => el != e.target.id))
    }, [arr])
    return (
        <>
            <h1>Задача 77</h1>
            <p>Создайте компонент, который отображает список элементов с
                кнопками "Удалить". При нажатии на кнопку элемент должен
                быть удален из списка. Используйте useCallback, чтобы
                оптимизировать функцию удаления элемента.</p>

            <ul>
                {arr.map((el) => {
                    return <li><button id={el} onClick={changeBtn}>Delete</button>{el}</li>
                })}
            </ul>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task77;