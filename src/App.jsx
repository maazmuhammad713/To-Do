import { useState } from "react";
import Counter from "./components/counter/Counter";
const App = () => {
  const [data, setData] = useState([]);
  // const itemsInCart = [
  //   {
  //     id: 1,
  //     itemName: "shirt",
  //     counter: 5,
  //     inc: 2,
  //   },
  //   {
  //     id: 2,
  //     itemName: "jeans",
  //     counter: 8,
  //     inc: 4,
  //   },
  // ];
  const addItems = () => {
    const inputVal = document.getElementById("addInput").value;
    setData([...data, { itemName: inputVal, counter: 1, inc: 4 }]);
  };
  console.log(data);
  return (
    <>
      {/* {itemsInCart.map((subhan, tariq) => {
        return (
          <Counter
            id={subhan.id}
            itemName={subhan.itemName}
            counter={subhan.counter}
            inc={subhan.inc}
          />
        );
      })} */}
      <input type="text" name="" id="addInput" />
      <button onClick={addItems}>Submit</button>
      {data.map((itemEntries, index) => {
        return (
          <Counter
            key={itemEntries.id} // map function must want a key with unique value. it increase the rendering speed because now each <counter/> has unique key (never pass index in key, pass id)
            itemName={itemEntries.itemName}
            counter={itemEntries.counter}
            inc={itemEntries.inc}
          />
        );
      })}
    </>
  );
};

export default App;
