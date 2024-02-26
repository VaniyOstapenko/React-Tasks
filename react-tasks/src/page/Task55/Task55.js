import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task55() {
    const [array, setArray] = useState(['do', 'read', 'play', 'sleep']);
    const [inp, setInp] = useState('');

    function addTask(e) {
        setInp(e.target.value);
    }

    function pushArr() {
        setArray([...array, inp]);
    }

    function deleteTask(e) {
        const newArray = array.filter((el) => el != e.target.id)
        setArray(newArray)
    }
    return (
        <>
            <h1>Задача 55</h1>
            <p>Список задач с использованиемuseState: Создайте компонент списка задач, которыйпозволяетпользователюдобавлятьиудалятьзадачиизсписка.</p>

            <input onChange={addTask} type="text" />
            <button onClick={pushArr}>add</button>
            {array.map((el) => <div><p>{el}<button id={el} onClick={deleteTask}>delete</button></p></div>)}
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task55;