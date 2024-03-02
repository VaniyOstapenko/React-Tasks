import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo } from 'react';
import axios from 'axios';

function Task73() {
    const [inp, setInp] = useState(0)

    function changeInp(e) {
        setInp(e.target.value);
    }

    const doSum = useMemo(() => {
        let res = 0;
        for (let i = 0; i <= inp; i++) {
            res += i;
        }
        return res;
    }, [inp]);
    return (
        <>
            <h1>Задача 73</h1>
            <p></p>

            <input onChange={changeInp} type="text" />
            <h1>{doSum}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task73;