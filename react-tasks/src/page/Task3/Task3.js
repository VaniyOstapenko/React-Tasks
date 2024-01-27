import { Link } from 'react-router-dom'

function Task3() {
    const arr = ['Vania', 'Vania@mail.com']
    const newArr = arr.filter((el) => {
        if (el.includes('@')) {
            return true;
        }
    })

    return (
        <>
            <h1>Задача3</h1>
            <p>На входе статичный массив строк. Ваша задача отфильтровать и
                отобразить на странице только те строки, которые содержат
                знак @</p>
            <p>Старый массив: {arr}</p>
            <p>Новый массив: {newArr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task3;