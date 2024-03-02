import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

function Task80() {
    const [inp, setInp] = useState('')
    const [str, setStr] = useState(['Hi', 'Vania', 'How', 'Are', 'You']);


    const deleteStr = useCallback((e) => {
        setStr(str.filter((el) => el !== e.target.id))
    }, [str])

    const createStr = useCallback(() => {
        setStr([...str, inp]);
    }, [str, inp])

    function changeInp(e) {
        setInp(e.target.value)
    }




    return (
        <>
            <h1>Задача 80</h1>
            <p>Создайте компонент, который позволяет пользователю добавлять и удалять элементы из списка. Используйте
                useCallback, чтобы оптимизировать функции добавления и удаления элементов. </p>

            <input onChange={changeInp} type="text" />
            <button onClick={createStr}>create string</button>
            {str.map((el, i) => <ul key={i}><li><button id={el} onClick={deleteStr}>delete</button>{el}</li></ul>)}
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task80;