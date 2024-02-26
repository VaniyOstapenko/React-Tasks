import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task58() {
    const [flag, setFlag] = useState(false);
    return (
        <>
            <h1>Задача 58</h1>
            <p>Отображение навигации с использованием useState: По нажатию
                на кнопку “бургер” отображать блок навигации из 4 параграфов.</p>

            <button onClick={() => setFlag(!flag)}>Бургер</button>
            {flag && <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>}
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task58;