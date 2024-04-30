import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task90() {
    const [count, setCount] = useState(0)

    function clickButton1() {
        setCount(count + 1)
    }

    function clickButton2() {
        setCount(count - 1)
    }

    function clickButton3() {
        setCount(0)
    }

    return (<>
        <p>Задача 90</p>
        <p>Создайте компонент, который отображает кнопку и счетчик. При каждом нажатии на кнопку значение
            счетчика должно увеличиваться на</p>

        <button onClick={clickButton1}>+1</button>
        <button onClick={clickButton2}>-1</button>
        <button onClick={clickButton3}>0</button>
        <p>Результат:{count}</p>

        <p><Link to='/'>HomePage</Link></p>
    </>);
}

export default Task90;