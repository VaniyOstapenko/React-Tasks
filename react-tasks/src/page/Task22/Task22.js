import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task22() {
    const [inp, setInp] = useState('')
    function changeInput(e) {
        setInp(e.target.value);
    }

    function isPalindrom() {
        if (inp == inp.split('').reverse().join('')) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    return (
        <>
            <h1>Задача 22</h1>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на
                кнопку собрать данные из input и проверить вводимую строку
                на палиндром. Результат отображать в консоль</p>

            <input onChange={changeInput}></input>
            <button onClick={isPalindrom}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task22;