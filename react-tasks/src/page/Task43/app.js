import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Task43() {
    const [img, setImg] = useState('');


    async function getData() {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')
        setImg(response.data)
    }
    
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <h1>Задача 43</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios
                обращаться к https://dog.ceo/api/breeds/image/random.
                API возвращает ссылку на случайные изображения.Ваша
                задачаотображатькартинкивimg.</p>

            <img src={img.message} alt="" />
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task43;