import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Task46() {
    const [value, setValue] = useState(0);

    function doCount() {
        setValue(value + 1)
    }
    function doCount2() {
        setValue(value - 1)
    }
    function doCount3() {
        setValue(0)
    }


    return (
        <>
            <h1>Задача 46</h1>
            <p>Создайтетрикнопкисназваниями: "+1", "-1", "Сброс".При
                нажатиина кнопку"+1" значение счётчика увеличивается
                на 1, при нажатии на кнопку "-1" значение счётчика
                уменьшается на 1, а при нажатии на кнопку "Сброс" значение
                счётчика обнуляется.Значение счетчика отображать в h1</p>

            <button onClick={doCount}>+1</button>
            <button onClick={doCount2}>-1</button>
            <button onClick={doCount3}>Сброс счётчика</button>
            <h1>{value}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task46;