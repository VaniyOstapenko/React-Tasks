import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Task47() {
    const [inp, setInp] = useState('');

    function changeInp(e) {
        setInp(e.target.value);
    }
    return (
        <>
            <h1>Задача 47</h1>
            <p>Создайте форму ввода, в которой пользователь может вводить
                своё имя и отображать его под формой.</p>

            <input onChange={changeInp} type="text" />
            <h1>{inp}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task47;