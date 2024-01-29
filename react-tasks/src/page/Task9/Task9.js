import { Link } from 'react-router-dom'

function Task9() {
    const arr = ['Vania', 'Anna', 'DariaAntonArtemi']

    const newArr = arr.filter((el) => el.length < 10)

    return (
        <>
            <h1>Задача 9</h1>
            <p>Создайте компонент, который принимает массив строк
                ифильтрует строки, оставляятолькоте,длинакоторыхне
                превышает10символов.</p>

            <p>Старый массив: {arr}</p>
            <p>Новый массив: {newArr}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>


    );
}

export default Task9;