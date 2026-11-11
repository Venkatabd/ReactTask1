import React from 'react'
import { useState } from 'react';

export default function StateTopic() {
  const [count, setCount] = useState(0);

  return (
    <div className='btn-cls'>
      <h1>Count: {count}</h1>
      <button className='btn-cls1' onClick={() => setCount(count + 1)}>
        Click to increase
      </button>
      <button className='btn-cls1' onClick={()=>setCount(count-1)}>
        Click to decrease
      </button>
      <button className='btn-cls1' onClick={()=>setCount(0)}>Reset </button>
    </div>
  )
}
