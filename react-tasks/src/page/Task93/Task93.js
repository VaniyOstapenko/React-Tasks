import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task93() {
    const [inp, setInp] = useState('')

    return (<>

        <p>Задача 93</p>
        <p>Создайте компонент с полем ввода и параграфом. При вводе данных в input отображать вводимое значение в параграф текущей страницы</p>

        <input onChange={(e) => setInp(e.target.value)} type="text" />
        <p>{inp}</p>
        <p><Link to='/'>HomePage</Link></p>

    </>);
}

export default Task93;