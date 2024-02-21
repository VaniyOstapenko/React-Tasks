import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task50() {
    const [flag, setFlag] = useState(false);

    function clickButton() {
        setFlag(!flag);
    }
    return (
        <>
            <h1>Задача 50</h1>
            <p>По клику на кнопку открывать и закрывать параграфы</p>

            <button onClick={clickButton}>Click me</button>
            {flag ? <div><p>1</p><p>2</p><p>3</p></div> : null}
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task50;