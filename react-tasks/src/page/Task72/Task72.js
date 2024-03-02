import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo } from 'react';
import axios from 'axios';

function Task72() {
    const [inp, setInp] = useState(0);

    function changeInp(e) {
        setInp(e.target.value);
    }

    const factorial = useMemo(() => {
        let res = 1;
        for (let i = 1; i <= inp; i++) {
            res *= i;
        }
        return res;
    })

    return (
        <>
            <h1>Задача 72</h1>
            <p>Разработайте компонент, который выполняет факториал числа при вводе значения в текстовое поле. Используйте useMemo,
                чтобы кэшировать результаты вычислений для разных введенных значений и отображать их без повторных вычислений.</p>

            <input onChange={changeInp} type="text" />
            <h1>{factorial}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task72;