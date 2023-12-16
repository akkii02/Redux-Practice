import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const IncrementHandler = () => {
    dispatch({type:'increment'})
  };
  const DecrementHandler = () => {
    dispatch({type:'decrement'})
  };
  const IncrementBy5Handler = () => {
    dispatch({type:'INCREMENTBY5'})
  };
  const DecrementBy5Handler = () => {
    dispatch({type:'DECREMENTBY5'})
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={IncrementHandler}>Increment</button>
      <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <div>
      <button onClick={IncrementBy5Handler}>IncrementBy5</button>
      <button onClick={DecrementBy5Handler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
