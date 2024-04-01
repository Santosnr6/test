import DecreaseBtn from "./DecreaseBtn";
import IncreaseBtn from "./IncreaseBtn";
import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleDecrease = () => {
        if(counter > 0)
            setCounter(c => c - 1);
    }

    const handleIncrease = () => {
        setCounter(c => c + 1);
    }

  return (
    <div className="counter">
        <DecreaseBtn handleDecrease={ handleDecrease } />
        <p>{ counter }</p>
        <IncreaseBtn handleIncrease={ handleIncrease } />
    </div>
  )
}

export default Counter;
