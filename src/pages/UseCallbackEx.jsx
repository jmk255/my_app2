import { useState, useCallback } from "react";

function UseCallbackEx() {
  const [count, setCount] = useState(0)
  //매번 다시 만들 필요없는 inner함수를 다음과 같이 생성
  //[setCount]부분의 값이 바뀌었을 때만 inner함수를 새로 만든다
  const increase = useCallback(() => setCount(count => count + 1), [setCount])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
    </div>
  )
}

export default UseCallbackEx