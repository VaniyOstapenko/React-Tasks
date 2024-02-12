import { Link } from 'react-router-dom'
import { useState } from 'react';

function Task38() {
    const [inp, setInp] = useState('');

    function saveInp(e) {
        setInp(e.target.value)
    }
    return (
        <>
            <h1>Задача 38</h1>
            <p>
                отображай в h1 каждое введенное значение из input </p>


            <h1>{inp}</h1>
            <input onChange={saveInp} type="text" />
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task38;