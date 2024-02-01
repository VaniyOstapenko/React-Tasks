import { Link } from 'react-router-dom';

function Task19() {
    const arr = [1, 2, 3, 4, 5, 6]
    function Sum() {
        console.log(arr.reduce((sum, el) => {
            return sum + el
        }, 0))
    }
    return (
        <>
            <h1>Задача 19</h1>
            <p>Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку вычислите и выведите сумму всех чисел из массива в консоль.</p>

            <button onClick={Sum}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task19;