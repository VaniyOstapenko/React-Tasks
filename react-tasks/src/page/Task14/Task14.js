import { Link } from 'react-router-dom'

function Task14() {
    function check(e) {
        if (e.key == 'Enter') {
            console.log(e.target.value === e.target.value.split('').reverse().join('') ? true : false)
        }
    }
    return (
        <>
            <h1>Задача 14</h1>
            <p>Понажатиюнаenter вinput onKeyDown выявлятьявляетсяливведенноеслово палиндромом. Результатпроверкиотобразитьвконсоль</p>

            <input onKeyDown={check}></input>
            <p><Link to='/'>HomePage</Link></p>
        </>


    );
}

export default Task14;