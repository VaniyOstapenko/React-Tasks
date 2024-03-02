import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

function Task78() {
    const [status, setStatus] = useState('Неактивный');

    const updateStatus = useCallback(() => {
        status == 'Неактивный' ? setStatus('Активный') : setStatus('Неактивный')
    }, [status])
    return (
        <>
            <h1>Задача 78</h1>
            <p>Создайте компонент, который имеет кнопку "Изменить статус".
                При каждом клике на кнопку статус компонент а должен меняться
                между "Активный" и "Неактивный". Используйте useCallback,
                чтобы оптимизировать функцию изменения статуса.</p>

            <h1>{status}</h1>
            <button onClick={updateStatus}>Изменить статус</button>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task78;