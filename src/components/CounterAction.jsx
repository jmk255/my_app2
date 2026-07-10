import { useState, useEffect } from "react"

function CounterAction() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  //컴포넌트가 맨 처음 화면에 렌더링 될때 콜백함수가 호출된다
  useEffect(() => {
    console.log("마운트", count1)
    //리턴된 함수는 컴포넌트가 언마운트 될때 호출된다
    return () => console.log("언마운트")
  }, [])
  //count2가 변경되었을 경우 콜백함수가 호출된다
  useEffect(() => console.log("상태값 변경", count2), [count2])
  return (
    <div className="counter">
      <div>
        <span>{count1}</span>
        <button onClick={() => setCount1(count1 + 1)}>++</button>
      </div>
      <div>
        <span>{count2}</span>
        <button onClick={e => setCount2(count2 + 1)}>++</button>
      </div>
    </div>
  )
}

export default CounterAction