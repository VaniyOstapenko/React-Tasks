import { Link } from 'react-router-dom'

function Task6() {
    const arr = [
        {
            title_: 'movie1',
            description_: 'description1'
        },
        {
            title_: 'movie2',
            description_: 'description2'
        },
        {
            title_: 'movie3',
            description_: 'description3'
        }
    ]

    const newArr = arr.map((el, i) => {
        return <div key={i}><h1>{el.title_}</h1> <p>{el.description_}</p></div>
    })
    return (
        <>
            <h1>Задача 6</h1>
            <p>на входе массив из объектов. каждый объект содержит
                title с названием фильма и  description с кратким описанием
                фильма. В h1 отобразить каждый title, в p - description </p>
            <p>Старый массив:{JSON.stringify(arr)}</p>
            <p>Новый массив:{newArr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task6;