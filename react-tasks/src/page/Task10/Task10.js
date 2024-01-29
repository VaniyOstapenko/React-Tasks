import { Link } from 'react-router-dom'
import code1 from './assets/code1.png'
import code2 from './assets/code2.png'
import code3 from './assets/code3.png'

function Task10() {
    const arr = [
        {
            title: 'Оливъе',
            description: 'Салат',
            image: code1
        },
        {
            title: 'Борщ',
            description: 'Суп',
            image: code2
        },
        {
            title: 'Шаурма',
            description: 'Вредная гадость, но вкусная блин',
            image: code3
        }
    ]

    const newArr = arr.map((el) => {
        return (
            <div style={{ margin: '10px', padding: '10px' }}>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <img src={el.image} />
            </div>
        )
    })

    return (
        <>
            <h1>Задача 10</h1>
            <p>Реализуйте компонент, который принимает массив объектов
                с полями title название рецепта,description – описание
                рецепта и image – картинка блюда.Для каждого объекта
                создайте карточку с заголовком, описанием и изображением.
                Добавьте немного стилей</p>

            <div>
                <p>{newArr}</p>
            </div>
            <p><Link to='/'>HomePage</Link></p>
        </>


    );
}

export default Task10;