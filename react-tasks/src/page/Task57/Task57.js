import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task57() {
    const [size, setSize] = useState('20')
    return (
        <>
            <h1>Задача 57</h1>
            <p>Изменениеразмерашрифта сиспользованиемuseState: Создайтекомпонент, которыйпредоставляетдвекнопки: "Увеличить"и"Уменьшить".Принажатиина этикнопкизначениеfont-sizeизменяетсясоответствующимобразомна+/– 1px.</p>

            <h1 style={{ fontSize: size }}>Random text</h1>
            <button onClick={() => setSize(+size + 1)}>Click me</button>
            <button onClick={() => setSize(+size - 1)}>Click me</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task57;