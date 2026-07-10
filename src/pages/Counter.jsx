import { useState } from "react"
import CounterAction from "../components/CounterAction"

function Counter() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <h1>Counter</h1>
      <input 
        type="checkbox" 
        checked={visible} 
        style={{ height: 20, width:20 }}
        onChange={e => setVisible(e.target.checked)}
      />
      {visible ? <CounterAction /> : null}
    </div>
  )
}

export default Counter