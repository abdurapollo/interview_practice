import React, { useReducer, useState, useEffect } from 'react'

const initialState = 0
const reducer = (state, action) => {
   switch(action){
       case 'increment':
         return state + 1
       case 'decrement':
         return state - 1  
       case 'reset':
         return initialState 
       default : 
         return state  
   }
}
const Counters = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count1, setCount1] = useState(initialState)
    const [count2, setCount2] = useState(initialState)
    useEffect(() => {
        setInterval(() => {
            setCount2((count2) => count2 + 1)
        }, 1000)
    }, [])
    return (
        <>
           <h1>useState Counter - {count1}</h1>
           <button onClick={() => setCount1( count1 + 1 )}>Inc</button>
           <br />
          
           <h1>useEffecr Counter - {count2}</h1>
           <br />
    
           <h1>useReducer Counter - {count}</h1>
           <button onClick={() => dispatch('increment')}>Increment</button>
           <button onClick={() => dispatch('decrement')}>Decrement</button>
           <button onClick={() => dispatch('reset')}>Reset</button>
           
        </>
    )
}

export default Counters