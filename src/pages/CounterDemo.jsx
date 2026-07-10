import { useState } from "react";
import GroupComponent from "../components/GroupComponent";

function CounterDemo(){
  console.log("CounterDemo 호출됨")
  const [value, setValue] = useState(0);
  return (
    <div className="box">
      <h1>GroupComponent</h1>
      <button onClick={() => setValue(value+1)}>
        {value}
      </button>
      <GroupComponent />
    </div>
  )
}

export default CounterDemo;