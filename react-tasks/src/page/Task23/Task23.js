import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task23() {
    const [inp, setInp] = useState('');
    function changeValue(e) {
        setInp(e.target.value)
    }

    function isEmail() {
        if (!/^[\w\d]+@[\w\d\.]+$/gm.test(inp)) {
            console.log(false);
        } else {
            console.log(true);
        }
    }
    return (
        <>
            <h1>Задача 23</h1>
            <p>Создайте компонент с полемвводаи кнопкой. По клику на кнопку
                собрать данные из input и проверить вводимую строку на почту.
                Результат отображать в консоль</p>

            <input onChange={changeValue}></input>
            <button onClick={isEmail}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task23;