import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task28() {
    const [num, setNum] = useState(0)

    function numPlus() {
        setNum(num + 1)
    }
    function numMinus() {
        setNum(num - 1)
    }
    return (
        <>
            <h1>Задача 27</h1>
            <p>Дополнитепредыдущуюзадачу.Создайтекомпонентс2кнопкамиипараграфом дляотображениярезультатасчетчика(изначальносчетчикравен0).Вашазадача так реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к стейту счетчика, а при клике на кнопку-1, происходило вычитаниезначения1</p>

            <h1>{num}</h1>
            <button onClick={numPlus}>+1</button>
            <button onClick={numMinus}>-1</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task28;