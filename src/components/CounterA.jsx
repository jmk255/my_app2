import { memo } from "react"

//value = 부모로 부터 전달 받은 숫자
//increase = 부모로 부터 전달 받은 상태변경함수
function CounterA({value, increase}) {
  console.log("CounterA 호출됨")

  return (
    <div className="box">
      <h1>Counter A</h1>
      <button onClick={increase}>
        {value}
      </button>
    </div>
  )
}
//불필요한 렌더링을 막아주는 리액트 기능(memo)
export default memo(CounterA)