import { Link } from 'react-router-dom';

function Task20() {
    const arr = [1, 2, 'Vania', 4, 'Ostapenko', 6]
    function Show() {
        console.log(arr[Math.floor(Math.random() * 6)]);
    }
    return (
        <>
            <h1>Задача 20</h1>
            <p>Создайте компонент с массивом элементов и кнопкой. При каждом клике на кнопку выбирайте случайный элемент из массива
                и отображайте его вконсоль.</p>

            <button onClick={Show}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task20;