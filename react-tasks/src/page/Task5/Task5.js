import { Link } from "react-router-dom";


function Task5() {
    const arr = [1, 'a', 2, 'b', 3, 'c']
    const newArr = arr.map((el) => {
        if (isNaN(el)) {
            return <p>{el}</p>
        } else {
            if (el % 2 === 0) {
                return <p>{el} чёт</p>;
            } else {
                return <p>{el} нечёт</p>
            }
        }
    })
    return (
        <>
            <h1>Задача5:</h1>
            <p>На входе статичный массив чисел и букв.
                Ваша задача отобразить на странице в
                случае числа четность и нечетность
                текущего значения в параграфе, в случае
                строки отобразить саму строку в параграфе
            </p>
            <p>Старый массив: {arr}</p>
            <p>Новый массив: {newArr}</p>


            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task5;