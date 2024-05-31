import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task92() {
    const num = [1, 2, 3, -5, 7, -8]
    const newArr = num.map((el) => {
        if (el > 0) {
            return ('+')
        } else {
            return ('-')
        }
    })

    return (
        <>
            <p>Задача 92</p>
            <p>Создайте компонент, который принимает статичный массив чисел и выводит в параграф информацию о положительности и отрицательности
                числа.</p>

            <p>{`Старый массив: ${num}`}</p>
            <p>{`Новый массив: ${newArr}`}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task92;