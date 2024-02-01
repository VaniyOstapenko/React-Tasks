import { Link } from 'react-router-dom';

function Task18() {
    const arr = [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 6, 5, 4]
    const uniqueArr = new Set(arr);
    console.log(uniqueArr);
    console.log(Array.from(uniqueArr));
    return (
        <>
            <h1>Задача 18</h1>
            <p>Реализуйте компонент, который принимает статичный массив и отображает только уникальные значения, убирая повторяющиеся.</p>

            <p>Старый массив: {arr}</p>
            <p>Новый массив: {uniqueArr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task18;