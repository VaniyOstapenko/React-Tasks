import { useContext, useReducer, useState } from "react";
import { Link } from 'react-router-dom';

// function Task87() {
//     const [inp, setInp] = useState('');

//     function changeInp(e) {
//         setInp(e.target.value);
//     }
//     return (
//         <>
//             <p>Задача 87</p>
//             <p>Создайте компонент отслеживающий вводимое значение в input.
//                 Результат отображать в h1</p>

//             <input onChange={changeInp} type="text" />
//             <h1>{inp}</h1>
//         </>
//     );
// }

function reducer(state, obj) {
    switch (obj.action) {
        case 'changeInp':
            return obj.text;
        default:
            break;
    }
}

function Task87() {
    const [inp, dispatch] = useReducer(reducer, '')
    return (
        <>
            <p>Задача 87</p>
            <p>Создайте компонент отслеживающий вводимое значение в input.
                Результат отображать в h1</p>

            <input onChange={(e) => dispatch({ action: 'changeInp', text: e.target.value })} type="text" />
            <h1>{inp}</h1>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task87;