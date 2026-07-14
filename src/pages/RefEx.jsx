import { useState } from "react"
import ScrollBox from "../components/ScrollBox"

function RefEx() {
  //데이터 목록 상태
  const [list, setList] = useState([]);
  //add 버튼이 클릭되면 이 메소드가 호출된다
  const addItem = () => {
    const time = new Date().toLocaleTimeString();
    //현재 시각 문자열이 데이터 목록에 추가된다
    setList(list => [...list, time])
  }
  return (
    <div style={{ padding:20 }}>
      <button 
        style={{width:100, padding:10}} 
        onClick={addItem}
      >
        Add Item
      </button>
      <ScrollBox width="200px" height="500px">
        {list.map(item => <p>{item}</p>)}
      </ScrollBox>
    </div>
  )
}

export default RefEx