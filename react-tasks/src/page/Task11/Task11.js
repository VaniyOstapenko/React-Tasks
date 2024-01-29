import { Link } from 'react-router-dom'
import style from './style.module.css'

function Task11() {
    const arr = [1, 2, 3, 'vania', 'hello']

    const newArr = arr.map((el) => {
        if (!isNaN(el)) {
            return (
                <p className={style.num}>{el}</p>
            )
        } else {
            return (
                <p className={style.str}>{el}</p>
            )
        }
    })

    return (
        <>
            <h1>Задача 11</h1>
            <p>Создайте компонент, который принимает статичный массив
                чисел и строк. Если элемент-число, то отобразите его в
                параграфе с зеленым цветом текста, если строка-с синим.</p>

            <p>{newArr}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>


    );
}

export default Task11;