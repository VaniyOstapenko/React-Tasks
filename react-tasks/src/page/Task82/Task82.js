import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { Task82Context } from "../../Context/Context";

function Task82() {
    const { language, setLanguage } = useContext(Task82Context)

    function clickButton(e) {
        setLanguage(e.target.textContent)
    }

    const obj = {
        Ru: 'Привет',
        En: 'Hi',
        By: 'Прывітанне'
    }

    return (
        <>
            <p>Задача 82</p>
            <p>Создайте приложение, где пользователь сможет выбирать язык интерфейса (например, английский или испанский).
                Используйте useContext для сохранения текущего выбранного языка и перевода текста в выбранный язык в компонентах.</p>

            <h1>{obj[language]}</h1>
            <button onClick={clickButton}>Ru</button>
            <button onClick={clickButton}>En</button>
            <button onClick={clickButton}>By</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task82;