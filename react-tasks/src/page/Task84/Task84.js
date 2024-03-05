import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { Task84Context } from "../../Context/Context";

function Task84() {
    const result = useContext(Task84Context);

    function clickButton() {
        if (result.flag) {
            result.setFlag(false);
            result.setBackground('black')
            result.setColor('white')
        } else {
            result.setFlag(true);
            result.setBackground('white');
            result.setColor('black')
        }
    }
    return (
        <body style={{ backgroundColor: result.background, color: result.color, width: 1500, height: 900 }}>
            <div>
                <p>Задача 84</p>
                <p>Разработайте простое приложение для переключения между светлой и темной темами. Используйте useContext, чтобы
                    хранить информацию о текущей теме (светлая или темная). В компоненте отобразите интерфейс, который позволяет
                    пользователю переключаться между темами.</p>
                <h1>Привет Ваня</h1>
                <p>Как ты?</p>
                <p>Ты стараешься в учёбе или занимаешься ерундой?</p>
                <hr />
                <h3>Нука соберись, осталось совсем немного, не ленись, последний, усиленный рывок!!!!!!!</h3>
                <button style={{ backgroundColor: result.color, color: result.background }} onClick={clickButton}>{result.flag ? 'black' : 'white'}</button>
                <p><Link to='/'>HomePage</Link></p>
            </div>
        </body>
    );
}

export default Task84;