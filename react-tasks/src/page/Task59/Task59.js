import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Task59() {
    const [inp, setInp] = useState('')
    const [answer, setAnswer] = useState('');

    async function clickButton() {
        const data = await axios.get('https://yesno.wtf/api');
        setAnswer(data.data.answer)
    }
    return (
        <>
            <h1>Задача 59</h1>
            <p>Форма с отправкой запроса к API с использованием useState:
                Создайте компонент, который предоставляет input, button.
                После ввода днных в input по нажатию кнопку необходимо
                отправлять асинхронный запрос к API https://yesno.wtf/api
                с получением рандомно сгенерированного “да/нет”. Отобразить
                результат в заголовок. Таким образом у вас получается игра в
                предсказателя: где пользователь вводит вопрос в input, а далее
                получает ответ на заданный вопрос.</p>

            <input type="text" onChange={(e) => setInp(e.target.value)} />
            <button onClick={clickButton}>Получить ответ</button>
            <p>{inp} {answer}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task59;