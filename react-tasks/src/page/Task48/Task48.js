import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Task48() {
    const [flag, setFlag] = useState(false)

    function clickButton() {
        setFlag(!flag)
    }
    return (
        <>
            <h1>Задача 48</h1>
            <p>Реализовать селектор, где по клику на кнопку отображается 3 параграфа. При повторном клике параграфы скрываются.</p>

            <button onClick={clickButton}>Click me</button>
            {flag && (<div><p>1</p><p>2</p><p>3</p></div>)}
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task48;