import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task27() {
    const [num, setNum] = useState(0)

    function numPlus() {
        setNum(num + 1)
    }
    return (
        <>
            <h1>Задача 27</h1>
            <p>Создайте компонент с кнопкой и параграфом для отображения результата счетчика(изначальносчетчикравен0).Вашазадачатакреализоватьфункционал, чтобыприкликенакнопкуавтоматическиприбавлялась+1кстейтусчетчика</p>

            <h1>{num}</h1>
            <button onClick={numPlus}>+1</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task27;