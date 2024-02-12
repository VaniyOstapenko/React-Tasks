import { Link } from 'react-router-dom'
import { useState } from 'react';

function Task33() {
    const [flag, setFlag] = useState('');

    function clickButton() {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true);
        }
    }
    return (
        <>
            <h1>Задача 33</h1>
            <p>есть кнопка с названием ,,поздороваться,,. по клику на кнопку твоя задача отобразить в h1 ,,привет,,. при повторном клике на
                кнопку ,,поздороваться,, убирать ,,привет,, из h1 </p>

            <h1>{flag ? 'Hi' : ''}</h1>
            <button onClick={clickButton}>Поздороваться</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task33;