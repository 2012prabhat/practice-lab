import React from 'react'
import Child from './Child'

function Memo() {
    const [btnClick, setBtnClick] = React.useState(0);
  return (
    <div className=''>
        <button className='bg-red-200' onClick={() => setBtnClick(btnClick + 1)}>Click Me</button>
        <p>Button clicked {btnClick} times</p>
        {btnClick%2 === 0 && <Child value="Hello Memoization!" />}
    </div>
  )
}

export default Memo