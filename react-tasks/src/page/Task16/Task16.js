import { Link } from 'react-router-dom'

function Task16() {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const newArr = arr.map((el) => {
        if (el % 2 == 0) {
            return `${el} Чётный`
        } else {
            return `${el} Нечётный`
        }
    })
    return (
        <>
            <h1>Задача 16</h1>
            <p>Создайте компонент, который принимает статичный массив чисел и выводит информацию о том,
                является ли каждое число четным или нечетным.</p>

            <p>Cтарый массив: {arr}</p>
            <p>Новый массив: {newArr}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task16;