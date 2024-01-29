import { Link } from 'react-router-dom'

function Task12() {
    const pwd1 = '!Vania@122994';
    const pwd2 = '!Vania@122994';

    const password = () => {
        if (!/^[\w\d\!\@\#\*\.]{8,}$/gm.test(pwd1 || pwd2)) {
            alert(false)
        }
        if (pwd1 === pwd2) {
            alert(true);
        } else {
            alert(false);
        }
    }
    return (
        <>
            <h1>Задача 12</h1>
            <p>На входе 2 статичные переменные пароля. По клику на кнопку
                необходимо реализовать метод валидации. Написать регулярное
                выражение: пароль от 8 символов, содержит числа,буквы,
                !@#$^&*.Результат отобразить вконсоль</p>

            <button onClick={password}>Click</button>
            <p><Link to='/'>HomePage</Link></p>
        </>


    );
}

export default Task12;