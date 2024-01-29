import { Link } from 'react-router-dom'

function Task15() {
    const arr = ['red', 'green', 'gray']
    const show = (e) => {
        e.target.style = `background-color: ${arr[Math.round(Math.random() * 2)]}`
    }
    return (
        <>
            <h1>Задача 15</h1>
            <p>Реализуйте компонент с кнопкой, которая при каждом нажатии
                меняет свой цвет в соответствии с массивом цветов
                ['red', 'white', 'blue']. Используйте рандомный выбор цвета
                из массива при каждом клике.</p>

            <button onClick={show}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>


    );
}

export default Task15;