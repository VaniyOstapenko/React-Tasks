import { Link } from 'react-router-dom'
import { useState } from 'react';


function Task39() {
    const [inp, setInp] = useState({
        name: '',
        surname: ''
    })

    function changeFunc(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    function clickButton() {
        console.log(inp);
    }
    return (
        <>
            <h1>Задача 39</h1>
            <p>получить значение из 2 инпутов и отобразить это в консоль по клику на кнопку (одним useState)</p>


            <input name='name' onChange={changeFunc} type="text" />
            <input name='surname' onChange={changeFunc} type="text" />
            <button onClick={clickButton}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task39;