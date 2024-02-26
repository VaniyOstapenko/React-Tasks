import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task56() {
    const [text, setText] = useState(false);
    const [inp, setInp] = useState('')

    function showInp(e) {
        setInp(e.target.value);
    }

    function checkEmail() {
        if (!/^[A-Za-z]+@[a-z]+\.[a-z]{2,4}/gm.test(inp)) {
            setText(false);
        } else {
            setText(true);
        }
    }
    return (
        <>
            <h1>Задача 56</h1>
            <p> Форма с использованием useState: Создайте компонент текстового
                поля, который позволяет пользователю вводить текст и проверять
                введенный текст регулярным выражением на почту по нажатию на
                кнопку. В заголовок отобразить true если введенная строка
                удовлетворяет регулярному выражению и false в противном случае. </p>


            <input onChange={showInp} type="text" />
            <button onClick={checkEmail}>Click me</button>
            <h1>{text ? 'true' : 'false'}</h1>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task56;