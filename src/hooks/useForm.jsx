import { useState } from "react";

//입력값을 useForm컴포넌트의 인잘(initValue)로 전달받는다
function useForm (initValue) {
  //initValue값을 상태값으로 할당 -> 현재 상태 값 : value, 상태값 변경함수 : setValue
  const [value, setValue] = useState(initValue)
  const onChangeHandler = (e) => e.target.type === "checkbox" ?
    //이벤트가 발생한 요소의 타입이 checkbox일 경우
    //...value(현재 state는 그대로 유지)
    //[e.target.name] : e.target.checked(클릭한 체크박스의 name에 해당하는 속성만 자동으로 업데이트 시키기 위한 코드)
    setValue({...value, [e.target.name] : e.target.checked}) :
    //이벤트가 발생한 요소의 타입이 checkbox가 아닐 경우
    //[e.target.name] : e.target.value(name에 해당하는 속성만 입력값을 저장)
    setValue({...value, [e.target.name] : e.target.value})
    
    //상태와 메서드를 배열로 리턴
    return [value, onChangeHandler, setValue];
}

export default useForm;