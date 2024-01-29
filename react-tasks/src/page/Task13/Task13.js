import { Link } from 'react-router-dom'

function Task13() {
    const show = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
            <h1>Задача 8</h1>
            <p>По событию изменения input отображать в консоль каждое вводимое значени</p>

            <input onChange={show}></input>
            <p><Link to='/'>HomePage</Link></p>
        </>


    );
}

export default Task13;