import { Link } from 'react-router-dom'

function Task17() {
    const arr = ['Vania', 'Ostapenko', 'Igorevich']
    const color = ['green', 'gray', 'red', 'yellow']
    const newArr = arr.map((el) => {
        const randomColor = color[Math.floor(Math.random() * 4)]
        return (
            <div style={{ backgroundColor: randomColor }}>{el} с цветом {randomColor}</div >
        )
    })

    return (
        <>
            <h1>Задача 17</h1>
            <p>Создайте компонент, который принимает статичный массив элементов и присваивает каждому элементу случайный цвет фона. Выведите
                элементы с их цветами на странице.</p>
            <p>{newArr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task17;