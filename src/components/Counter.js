import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCounter = () => {
    console.log('clicked');
    setCount(count + 1);
  };
  const handleDecrementCounter = () => {
    setCount(count - 1);
  };
  const handleCounter = () => {
    setCount(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            onClick={handleIncrementCounter}
            disabled={count === 5 ? true : false}>
            +
          </button>
          <button
            className="btn card__btn"
            onClick={handleDecrementCounter}
            disabled={count === 0 ? true : false}>
            -
          </button>
          <button className="btn card__btn" onClick={handleCounter}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
