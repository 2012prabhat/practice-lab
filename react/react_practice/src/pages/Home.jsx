import React from 'react'
import ClassBased from './ClassBased';
import User from './User'
import { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import { useCounter } from '../CounterContext';


function Home() {
  const {count,setCount,increaseCount} = useCounter();
  return (
    <>
    <div>Home</div>
    <ClassBased/>
    <User name="Prabhat Kumar" /> 
    {count}
    <br />
    <button onClick={increaseCount} className='bg-red-700 text-white'>IncreaseCount</button>
    </>
  )
}

export default Home