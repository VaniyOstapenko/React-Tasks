import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task42() {
    const [inp, setInp] = useState(0);

    function changeInput(e) {
        setInp(e.target.value)
    }

    function clickButton() {
        setInp(eval(inp))
    }
    return (
        <>
            <h1>Задача 42</h1>
            <p>сделайте инпут в который вводится математическое выражение
                по клику на кнопку посчитать результат мат выражения (eval()) и отобразить  результат в h1</p>

            <input onChange={changeInput} type="text" />
            <button onClick={clickButton}>Click me</button>
            <h1>{inp}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task42;