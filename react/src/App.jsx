import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Counter (){
  const [count, setCount] =useState(0)

  const increment = ()=>{
    setCount((count)=> count +1);
  }

  const decrement = ()=>{
    setCount((count) => count -1);
  }

  const reset =()=>{
    setCount((reset)=> reset =0);
  }

  ;
  return (
    <div>
      <h2>My Counter is: {count} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

    </div>

  )
}

export default Counter
