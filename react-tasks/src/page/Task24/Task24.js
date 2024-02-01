import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task24() {
    const [input1, setInp1] = useState('')
    const [input2, setInp2] = useState('')

    function changeValue1(e) {
        setInp1(e.target.value)
    }

    function changeValue2(e) {
        setInp2(e.target.value)
    }

    function compareInp() {
        console.log(input1 === input2);
    }
    return (
        <>
            <h1>Задача 24</h1>
            <p>Создайте компонент с 2 полями ввода и кнопкой. По клику на
                кнопкусобрать данныеиздвух input (2 разных state). Сравнить
                значения 2 input на равенство. Результат отображать вконсоль</p>

            <input onChange={changeValue1}></input>
            <input onChange={changeValue2}></input>
            <button onClick={compareInp}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task24;