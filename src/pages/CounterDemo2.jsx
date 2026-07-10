import { useState } from "react"

function CounterDemo2() {
  const [person, setPerson] = useState({
    name : "홍길동",
    age : 16,
    height: 180
  })
  const increase = (key) => {
    if(key === "height"){ 
      person.height++;
    }else if(key === "age") {
      person.age++;
    }
    //새 객체로 setPerson되어야 다시 렌더링 된다
    setPerson({...person});
  }

  return (
    <div className="box">
      <h1>객체 사용</h1>
      <p>{person.age}, {person.height}</p>
      <button onClick={() => increase("age")}>age++</button>
      <button onClick={() => increase("height")}>height++</button>
    </div>
  )
}

export default CounterDemo2