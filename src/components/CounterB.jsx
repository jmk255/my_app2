import { memo } from "react"

function CounterB({value, increase}) {
  console.log("CounterB 호출됨")

  return (
    <div className="box">
      <h1>Counter B</h1>
      <button onClick={increase}>
        {value}
      </button>
    </div>
  )
}

export default memo(CounterB)