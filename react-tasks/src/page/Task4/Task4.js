import { Link } from "react-router-dom";
import img1 from './assets/1.jpg';

function Task4() {
    const arr = ['vania', 'ivan', 'ostapenko']
    const newArr = arr.map((el) => <div><p>{el}</p><img alt ='Ошибка вывода картинки' src={img1} /></div>)

    return (
        <>
            <h1>Задача4:</h1>
            <p>На входе статичный массив строк. Ваша
                задача отобразить на странице все строки
                массива, а также картинку. Каждая итерация будет
                возвращать {'<div>    <p>el</p>    <img /> </div>'}
            </p>
            <div>{newArr}</div>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task4;