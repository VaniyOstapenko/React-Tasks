import { useContext, useReducer, useState } from "react";
import { Link } from 'react-router-dom';



// function Task85() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <p>Задача 85</p>
//             <p>Создайте компонент счетчика, который может увеличивать, уменьшать, сбрасывать значение при нажатии на соответствующие
//                 кнопки.</p>

//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <button onClick={() => setCount(0)}>delete</button>
//         </>
//     );
// }

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'delete':
            return 0;
        default:
            break;
    }
}

function Task85() {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <p>Задача 85</p>
            <p>Создайте компонент счетчика, который может увеличивать, уменьшать, сбрасывать значение при нажатии на соответствующие
                кнопки.</p>

            <h1>{count}</h1>
            <button onClick={() => dispatch('increment')}>+1</button>
            <button onClick={() => dispatch('decrement')}>-1</button>
            <button onClick={() => dispatch('delete')}>delete</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}


export default Task85;