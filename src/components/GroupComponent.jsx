import { memo, useState, useCallback } from "react";
import CounterA from "./CounterA";
import CounterB from "./CounterB";

function GroupComponent(){
  console.log("GroupComponent 호출됨")
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [value, setValue] = useState(0);

  //렌더링 될때마다 함수가 다시 생성되지 않는다
  const increaseA = useCallback(() => {
    setCountA(countA => countA + 1)
  }, [setCountA])
  
  //렌더링 될때마다 함수가 다시 생성되지 않는다
  const increaseB = useCallback(() => {
    setCountB(countB => countB + 1)
  }, [setCountB])

  return (
    <div className="box">
      <h1>GroupComponent</h1>
      <button onClick={() => setValue(value+1)}>
        {value}
      </button>
      {/*increase={setCountA(countA + 1)} : 여기서 함수를 전달하는게 아니라 즉시 실행하는 것이므로 이렇게 작성하면 안된다 */}
      <CounterA value={countA} increase={increaseA} />
      <CounterB value={countB} increase={increaseB} />
    </div>
  )
}

export default memo(GroupComponent)