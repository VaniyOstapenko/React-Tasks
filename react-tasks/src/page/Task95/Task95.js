import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task95() {
    const [inp, setInp] = useState('')
    const [flag, setflag] = useState(false)

    return (<>

        <p>Задача 95</p>
        <p>Создайте компонент с полем ввода имени и кнопкой"Привет". При вводе имени в поле и нажатии на кнопку, компонент должен отображать
            приветственное сообщение с именем, введенным пользователем</p>

        <input onChange={(e) => setInp(e.target.value)} type="text" placeholder='Как вас зовут?' />
        <button onClick={() => setflag(true)}>Привет</button>
        <hr />
        <p>Результат:{flag ? ` Приветствую ${inp}` : null}</p>
        <p><Link to='/'>HomePage</Link></p>

    </>);
}

export default Task95;