import { useContext, useReducer, useState } from "react";
import { Link } from 'react-router-dom';


// function Task86() {
//     const [flag, setFlag] = useState(false)
//     return (
//         <>
//             <p>Задача 86</p>
//             <p>Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on»и«off». По клику на кнопку
//                 текст меняется на противоположный</p>

//             <button onClick={() => flag ? setFlag(false) : setFlag(true)}>{flag ? 'on' : 'off'}</button >
//         </>
//     );
// }

function reducer(state, action) {
    switch (action) {
        case 'changeFlag':
            return state ? false : true;
    }
}

function Task86() {
    const [flag, dispatch] = useReducer(reducer, false);
    return (
        <>
            <p>Задача 86</p>
            <p>Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on»и«off». По клику на кнопку
                текст меняется на противоположный</p>

            <button onClick={() => dispatch('changeFlag')}>{!flag ? 'on' : 'off'}</button >

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task86;