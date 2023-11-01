import { useState } from "react";

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(props.counter);

  const incrementClickHandler = () => {
    console.log(counterValue);
    setCounterValue(counterValue + props.inc);
    // setCounterValue((prev){
    //   return prev + props.inc;
    // }) //problem is setter donot update in console even UI updated
    console.log(counterValue);
  };
  const decrementClickHandler = () => {
    if (counterValue > 0) setCounterValue(counterValue - 1);
  };
  return (
    <>
      {/* turnary operator */}
      {/* {counterValue === 0 ? <></> : <h1>This is counter: {counterValue}</h1>} */}
      {/* shortcircuiting */}
      <h1>
        Item name:{props.itemName}
        {props.itemNames}
      </h1>
      {counterValue !== 0 && <h1>This is counter: {counterValue}</h1>}
      <button onClick={incrementClickHandler}>Increment</button>
      <button onClick={decrementClickHandler}>Decrement</button>
    </>
  );
};
export default Counter;
