import React from 'react';
import useCountStore from './store/count-store';

function Buttons() {
    const { increaseCount, decreaseCount, clearCount } = useCountStore(state => ({
        increaseCount : state.increaseCount,
        decreaseCount : state.decreaseCount,
        clearCount : state.clearCount
    }));

  return (
    <div>
        <button onClick={ decreaseCount }>-</button>
        <button onClick={ increaseCount }>+</button>
        <button onClick={ clearCount }>Clear</button>
    </div>
  )
}

export default Buttons
