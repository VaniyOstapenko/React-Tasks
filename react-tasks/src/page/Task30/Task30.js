import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task30() {
    const [inp, setInp] = useState({
        name: '',
        surname: '',
    })

    const checkData = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    function isData() {
        console.log(inp);
    }

    return (
        <>
            <h1>Задача 30</h1>
            <p>По клику на кнопку собрать данные из двух input: name, surname. Работать с 1 state, первоначальное значение которого
                name: '', surname: ''. Проверить значения 2 input на пустоту. Структура state:</p>

            <input name='name' onChange={checkData}></input>
            <input name='surname' onChange={checkData}></input>
            <button onClick={isData}>Click me</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task30;