import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task25() {
    const [inp, setInp] = useState('')
    const [flage, setflage] = useState(false);

    function changeInp(e) {
        setInp(e.target.value);
    }

    function clickButton() {
        setflage(true);
    }
    return (
        <>
            <h1>Задача 25</h1>
            <p>Создайте компонент с полем ввода имени и кнопкой"Привет". При вводе имени в поле и
                нажатии на кнопку, компонент должен отображать приветственное сообщение с именем, введенным пользователем</p>

            <input onChange={changeInp}></input>
            <button onClick={clickButton}>Привет</button>
            <p>Результат:{flage ? 'Привет ' + inp + '!' : null}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task25;