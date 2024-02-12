import { Link } from 'react-router-dom'
import { useState } from 'react';

function Task35() {
    const [flag, setFlag] = useState(true);

    function clickButton() {
        if (flag) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    return (
        <>
            <h1>Задача 35</h1>
            <p>Текст кнопки открыто меняется на закрыто по нажатию на себя</p>

            <button onClick={clickButton}>{flag ? 'Open' : 'Closed'}</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task35;