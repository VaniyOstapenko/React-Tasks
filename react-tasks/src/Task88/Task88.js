import { useContext, useReducer, useState } from "react";
import { Link } from 'react-router-dom';

// function Task88() {
//     const colors = ['red', 'blue', 'purple', 'pink']
//     const [color, setColor] = useState('black')

//     function changeColor(e) {
//         setColor(e.target.textContent)
//     }
//     return (
//         <>
//             <p>Задача 88</p>
//             <p>Вам предоставлен массив цветов, таких как red, blue, purple, pink.
//                 При клике на кнопку ваша задача изменить цвет заголовка на цвет,
//                 соответствующий нажатой кнопке.</p>

//             {colors.map((el) => <p onClick={changeColor}>{el}</p>)}
//             <h1 style={{ color: color }}>Hi there</h1>
//             <p><Link to='/'>HomePage</Link></p>
//         </>
//     );
// }

function reducer(state, obj) {
    switch (obj.action) {
        case 'changeColor':
            return obj.text;
        default:
            break;
    }
}

function Task88() {
    const colors = ['red', 'blue', 'purple', 'pink']
    const [color, dispatch] = useReducer(reducer, 'black');

    return (
        <>
            <p>Задача 88</p>
            <p>Вам предоставлен массив цветов, таких как red, blue, purple, pink.
                При клике на кнопку ваша задача изменить цвет заголовка на цвет,
                соответствующий нажатой кнопке.</p>

            {colors.map((el) => <p onClick={(e) => dispatch({ action: 'changeColor', text: e.target.textContent })}>{el}</p>)}
            <h1 style={{ color: color }}>Hi there</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task88;