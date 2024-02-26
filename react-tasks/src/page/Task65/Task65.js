import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task65() {
    return (
        <>
            <h1>Задача 65</h1>
            <p>ФормавводасиспользованиемuseStateиuseEffect:СоздайтекомпонентReact, которыйсодержитформусполемввода.ИспользуйтехукuseStateдляхранения значениявведенноготекстаихукuseEffectдляотслеживанияизмененийэтого значения.Прикаждомизменениизначениявполеввода,выводитьеговконсоль спомощьюuseEffect.</p>



            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task65;