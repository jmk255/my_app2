import { useState } from "react"

function LoginForm() {
  //로그인 상태 관리, 초기값은 사용자 이름과 비밀번호가 빈 문자열인 객체입니다
  const [login, setLogin] = useState({
    username: "", 
    password : ""
  })
  //에러 상태 관리, 초기값으로 사용자 이름과 비밀번호에 대한 에러 메시지를 설정
  const [errors, setErrors] = useState({
    username: "아이디를 입력하세요",
    password: "비밀번호를 입력하세요"
  })

  //사용자의 입력을 처리하기 위한 입력 핸들러
  const handler = (e) => {
    //구조 분해 할당하여 입력 필드의 name(필드 이름)과 value(입력값)를 추출합니다.
    const {name, value} = e.target;

    //로그인 상태 업데이트, 현재의 login상태를 복사한 뒤, 사용자가 입력한 값을 해당 필드에 업데이트합니다.
    setLogin({...login, [name]:value})

    //에러 메시지 제거, 입력값이 있을 경우 해당 필드의 에러 메시지를 빈문자열로 설정
    if(value){
      setErrors({...errors, [name]:""})
    }
  }
  //로그인 핸들러 함수 정의
  const handleLogin = () => {
    //새 에러 객체 초기화, 나중에 여기서 에러 메시지를 저장
    let newErrors = {username: "", password:""}

    //사용자 이름 입력폼이 비어 있다면 에러 메시지를 표시
    if(!login.username) newErrors.username = "아이디를 입력하세요"
    //비밀번호 입력폼이 비어 있다면 에러 메시지를 표시
    if(!login.password) newErrors.password = "비밀번호를 입력하세요"

    //에러 메시지 설정, newErrors에 에러 메시지가 있으면 setErrors를 호출하여 상태를 업데이트 합니다(에러 메시지가 화면에 표시됩니다)
    if(newErrors.username || newErrors.password){
      setErrors(newErrors);
    } else { //로그인 성공 처리, 에러가 없을 경우 입력된 사용자 이름과 비밀번호를 알림창으로 표시
      alert(`Username : ${login.username}, Password : ${login.password}`)
    }
  }

  return (
    <div id="container">
      <h1>로그인 폼</h1>
      <div className="control">
        <input 
          type="text"
          placeholder="사용자 이름"
          name="username"
          onChange={handler}
          value={login.username}
        />
        {/*에러 메시지가 있으면 span태그로 에러 메시지를 표시하고 없으면 빈자열만 전달하여 에러 메시지를 표시하지 않는다 */}
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div className="control">
        <input 
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={handler}
          value={login.password}
        />
        {/*에러 메시지가 있으면 span태그로 에러 메시지를 표시하고 없으면 빈자열만 전달하여 에러 메시지를 표시하지 않는다 */}
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button onClick={handleLogin}>
        로그인
      </button>
      <hr /> 
      <h1>입력된 값</h1>
      <div className="control">사용자 이름 : {login.username}</div>
      <div className="control">비밀번호 : {login.password}</div>
    </div>
  )
}

export default LoginForm