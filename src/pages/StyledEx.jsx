import { useState } from 'react'
//스타일컴포넌트 라이브러리
import styled from 'styled-components'

//CSS서식 부분은 전역 변수로 분리, Div 컴포넌트를 사용할 때, color porps 값을 전달해야 한다
//scss확장 문법
const Div = styled.div`
  border: 1px solid gray;
  box-shadow: 5px 5px 5px gray;
  padding: 40px;
  margin: 20px;
  display: inline-block;
  background-color:${props => props.color};
  & h1{
    margin:10px;
  }
  & select{
    padding:4px;
    width:150px;
    font-size:12px;
  }
`;

// const H1 = styled.h1`
//   margin:10px;
// `;
// const Select = styled.select`
//   padding:4px;
//   width:150px;
//   font-size:12px;
// `;

function StyledEx() {
  const [color, setColor] = useState("#ffa");

  return (
    <>
      {/*color props값을 전달 */}
      <Div color={color}>
        <h1>Color</h1>
        <select
          onChange={e => setColor(e.target.value)}
          value={color}
        >
          <option value="#ffa">yellow</option>
          <option value="#dfd">green</option>
          <option value="#ccf">blue</option>
          <option value="#fdd">red</option>
        </select>
      </Div>
    </>
  )
}

export default StyledEx