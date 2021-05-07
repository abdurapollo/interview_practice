import React,{ useState, useEffect } from 'react'

const CountEachSecond = () => {
   const [counter, setCounter] = useState(0)
    useEffect(() => {
       setInterval(() => {
            setCounter((counter) => counter+1)
       }, 1000);
    },[]);

    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}

export default CountEachSecond
