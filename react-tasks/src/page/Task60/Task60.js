import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task60() {
    const [inp, setInp] = useState('')

    function changeStateInput(e) {
        setInp(e.target.value)
    }

    useEffect(() => {
        console.log(inp)
    }, [inp])
    return (
        <>
            <h1>Задача 60</h1>
            <p>Форма ввода с и спользованиемuseStateиuseEffect:СоздайтекомпонентReact, которыйсодержитформусполемввода.ИспользуйтехукuseStateдляхранения значениявведенноготекстаихукuseEffectдляотслеживанияизмененийэтого значения.Прикаждомизменениизначениявполеввода,выводитьеговконсоль спомощьюuseEffect.</p>


            <input onChange={changeStateInput} type="text" />

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task60;