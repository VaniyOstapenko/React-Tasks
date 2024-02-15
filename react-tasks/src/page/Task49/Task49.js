import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Task49() {
    const [university, setUniversity] = useState([])
    const [flag, setFlag] = useState(false);

    async function getUniversity() {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus')
        setUniversity(response.data);
    }

    useEffect(() => {
        getUniversity()
    }, [])
    return (
        <>
            <h1>Задача 49</h1>
            <p>Совместить задачи 3 и 6. По клику на кнопку отображать
                университеты выбранной страны</p>

            <button onClick={() => setFlag(!flag)}>Click me</button>
            {flag ? university.map((el) => <p>{el.name}</p>) : null}
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task49;