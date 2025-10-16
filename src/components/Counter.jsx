import React, { useState } from 'react'

function Counter() {
  const [Count, setCount] = useState(0);
  return (
    <div>
<div>{Count}</div>
    <button onClick={()=>{
      console.log(Count);
      setCount(Count + 1);
    }}>Click me</button>
    </div>
  )
}

export default Counter