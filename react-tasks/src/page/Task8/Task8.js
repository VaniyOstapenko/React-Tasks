import { Link } from 'react-router-dom'

function Task8() {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const max = Math.max(...arr);
    const min = Math.min(...arr);


    return (
        <>
            <h1>Задача 8</h1>
            <p>Реализуйтекомпонент, которыйпринимаетстатичныймассивчисел и
                выводит минимальноеимаксимальноезначениянастранице.</p>

            <p>Маскимальное значение: {max}</p>
            <p>Минимальное значение: {min}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>


    );
}

export default Task8;