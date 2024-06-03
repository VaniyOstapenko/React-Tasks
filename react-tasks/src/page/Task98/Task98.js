import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task98() {
    const [task, setTask] = useState(['Сделать зарядку', 'Позавтракать', 'Поехать на работу'])
    const [inp, setInp] = useState('')

    function changeInp(e) {
        setInp(e.target.value)
    }

    function clickAddButton() {
        setTask([...task, inp])
    }

    function clickDeleteButton(e) {
        const newTask = task.filter((el) => el != e.target.id)
        setTask(newTask)
    }

    return (<>

        <p>Задача 98</p>
        <p>Список задач с использованием useState: Создайте компонент списка задач, который позволяет пользователю добавлять и удалять
            задачи из списка.</p>

        <input style={{ borderRadius: 10, padding: 10, border: '1px solid red' }} onChange={changeInp} type="text" placeholder='Введите цель на день' />
        <button style={{ backgroundColor: 'gray', marginLeft: 10, borderRadius: 20, width: 85, height: 40 }} onClick={clickAddButton}>Click me</button>
        <hr />
        {task.map((el) => <div style={{ marginTop: 20, width: 200, padding: 20, backgroundColor: 'red', border: '2px solid black', borderRadius: 40 }}><p>{el}<button style={{ backgroundColor: 'gray', marginLeft: 10, borderRadius: 20, width: 65, height: 40 }} id={el} onClick={clickDeleteButton}>Delete</button></p></div>)}

        <p><Link to='/'>HomePage</Link></p>
    </>)
}

export default Task98;