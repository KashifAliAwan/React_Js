import { useState } from "react";


function App() {
  let [num, setNum] = useState(0);
  function addNum() {
    setNum(num += 1)
    console.log(num);

  }
  function subNum() {
    if (num > 0) {
      setNum(num - 1)
      console.log(num);
    }

  }
  return (
    <>
      <h1>App {num}</h1>
      <button onClick={addNum}>+</button>
      <button onClick={subNum}>-</button>
    </>
  )
}
export default App;