import React from 'react'
import useCountStore from './store/count-store';

function Display() {
    const count = useCountStore(state => state.count);
    
  return (
    <p>Count: { count }</p>
  )
}

export default Display
