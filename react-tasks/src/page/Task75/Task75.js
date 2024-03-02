import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo } from 'react';
import axios from 'axios';

function Task75() {
    const [ipAdress, setIpAdress] = useState('');

    useMemo(async () => {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setIpAdress(response.data.ip);
    }, [])
    return (
        <>
            <h1>Задача 75</h1>
            <p>Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес должен быть получен с использованием
                useMemo при монтировании компонента и кэширован для избегания повторных запросов к API при обновлении других
                частей компонента. https://api.ipify.org/?format=json </p>

            <h1>{ipAdress}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task75;