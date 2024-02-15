import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Task44() {
    const [ip, setIp] = useState('');

    async function getIpAdress() {
        const response = await axios.get('https://api.ipify.org/?format=json')
        setIp(response.data.ip);
    }
    useEffect(() => {
        getIpAdress()
    })
    return (
        <>
            <h1>Задача 44</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к https://api.ipify.org/?format=json.
                API возвращает ваш ip-адрес. Ваша задача отображать ip-адрес в тег h1.</p>

            <h1>{ip}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task44;