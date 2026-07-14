import { useEffect, useRef } from "react"
import styled from "styled-components"

const Div = styled.div`
  border:1px solid #ccc;
  padding:5px;
  overflow-y:scroll;
  width: ${props => props.$w};
  height: ${props => props.$h};
`;//width와 height를 외부에서 전달받은 w와 h값으로 대입


//ScrollBox 외부에서 width와 height와 children(자식 요소)를 props로 받아 옵니다
function ScrollBox({width, height, children}) {
  return (
    //Div스타일 컴포넌트로 외부에서 전달받은 width와 height값을 전달
    <Div $w={width} $h={height}>
      {children}
    </Div>
  )
}

export default ScrollBox