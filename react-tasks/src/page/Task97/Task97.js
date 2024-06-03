import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task97() {
    const [flag, setFlag] = useState(false);

    function clickButton() {
        setFlag(!flag)
    }

    return (<>

        <p>Задача 97</p>
        <p>Отображение текста с использованием useState: Создайте компонент, который предоставляет кнопку: "Показать" и "Скрыть".
            При нажатии на "Показать" отображается текст, а принажатии на"Скрыть" текст скрывается.</p>

        <button onClick={clickButton}>Показать/Скрыть</button>
        <hr />
        <p>{flag ? 'Hi' : ''}</p>
        <p><Link to='/'>HomePage</Link></p>
    </>)
}

export default Task97;


