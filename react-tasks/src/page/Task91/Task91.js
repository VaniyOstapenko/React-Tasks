import { useState } from 'react';
import { Link } from 'react-router-dom'

function Task91() {
    const [color, setColor] = useState(true);
    const [color2, setColor2] = useState('white');

    function clickMe() {
        setColor(!color)
    }

    function clickMe2() {
        setColor2(newColor => newColor === 'white' ? 'red' : 'white')
    }

    return (
        <>
            <p>Задача 91</p>
            <p></p>

            <div style={{ border: '2px solid black', width: 20, height: 20, backgroundColor: color ? 'white' : 'red' }} onClick={clickMe}></div >
            <div style={{ border: '2px solid black', width: 20, height: 20, backgroundColor: color2 }} onClick={clickMe2}></div >

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task91;