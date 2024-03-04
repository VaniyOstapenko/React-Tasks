import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Task81Context } from "../../Context/Context";

function Task81() {
    const obj = useContext(Task81Context)
    return (
        <>
            <p>Задача 81</p>
            <p>Используйте useContext, чтобы сохранять данные о текущем пользователе. Отобразите эту информацию в
                компоненте, используя контекст.</p>

            <h1>{obj.name}</h1>
            <h1>{obj.surname}</h1>
            <h1>{obj.email}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task81;