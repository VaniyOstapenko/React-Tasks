import { Link } from 'react-router-dom'

function Task2() {
    const arr = [1, 2, 3, 4, 5]
    const newArr = arr.map((el) => {
        return <h1>{Math.sqrt(el)}</h1>;
    })

    return (
        <>
            <h1>Задача2</h1>
            <p>На входе статичный массив чисел. Ваша задача найти корень
                каждого числа и отобразить на странице в виде h1</p>
            <p>Старый массив: {arr}</p>
            <p>Новый массив: {newArr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task2;