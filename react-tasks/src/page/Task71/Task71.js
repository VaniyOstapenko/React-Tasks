import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo } from 'react';
import axios from 'axios';

function Task71() {
    const [inp1, setInp1] = useState(0)
    const [inp2, setInp2] = useState(0)

    function changeInput1(e) {
        setInp1(e.target.value)
    }

    function changeInput2(e) {
        setInp2(e.target.value)
    }

    const sumInp = useMemo(() => {
        return +inp1 + +inp2;
    }, [inp1, inp2])

    return (
        <>
            <h1>Задача 71</h1>
            <p>Создайте компонент React, который отображает сумму двух чисел. Используй хук useState для хранения значений чисел и хук useMemo
                для кэширования результата суммы. При изменении значений чисел, сумма должна пересчитываться только тогда, когда необходимо.</p>


            <input onChange={changeInput1} type="text" />
            <input onChange={changeInput2} type="text" />
            <h1>{sumInp}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task71;