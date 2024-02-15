import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Task45() {
    const [university, setUniversity] = useState([]);

    async function getUniversity() {
        const response = await axios('http://universities.hipolabs.com/search?country=Belarus')
        setUniversity(response.data);
    }

    useEffect(() => {
        getUniversity()
    }, [])
    return (
        <>
            <h1>Задача 45</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios
                обращаться к http://universities.hipolabs.com/search?country=Belarus.
                API возвращает университеты страны переданной в качестве одного из
                домен то вurl. Ваша задача отображать все университеты в тег параграф.</p>

            <div>
                {university.map((el) => <p>{el.name}</p>)}
            </div>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task45;