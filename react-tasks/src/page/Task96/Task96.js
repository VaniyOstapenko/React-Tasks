import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task96() {
    const [inp, setInp] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    function changeInput(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    return (<>

        <p>Задача 96</p>
        <p>Создайте компонент с полями ввода и кнопкой, необходимо ввести данные в инпуты и вывести их в консоль лог,
            например, имя, фамилия, почта</p>

        <input name='name' type="text" placeholder='name' onChange={changeInput} />
        <input name='surname' type="text" placeholder='surname' onChange={changeInput} />
        <input name='email' type="text" placeholder='email' onChange={changeInput} />
        <input name='password' type="password" placeholder='password' onChange={changeInput} />
        <button onClick={() => console.log(inp)}>Click me</button>
        <p><Link to='/'>HomePage</Link></p>
    </>)
}

export default Task96;