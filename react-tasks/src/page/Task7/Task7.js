import { Link } from 'react-router-dom'

function Task7() {

    const arr = [-1, 2, -3, 4, 5, -6, 7]
    const newArr = arr.map((el) => {
        if (el > 0) {
            return el + ' Положительное';
        } else {
            return el + ' Отрицательное';
        }
    })

    return (
        <>
            <h1>Задача 7</h1>
            <p>Создайтекомпонент, которыйпринимаетстатичныймассивчисел
                ивыводитв параграфинформациюоположительностииотрицательности
                числа.</p>

            <p>Старый масси: {arr}</p>
            <p>Новый масси: {newArr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task7;