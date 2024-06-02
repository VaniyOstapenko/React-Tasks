import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task94() {
    const [inp, setInp] = useState('')

    return (<>

        <p>Задача 94</p>
        <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input и проверить вводимую строку на палиндром. Результат отображать в консоль</p>

        <input onChange={(e) => setInp(e.target.value)} type="text" />
        <button onClick={() => { inp === inp.split('').reverse().join('') ? console.log('Palindrom') : console.log('Not palindrom') }}>Click me</button>
        <p><Link to='/'>HomePage</Link></p>

    </>);
}

export default Task94;