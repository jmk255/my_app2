import useForm from "../hooks/useForm"

function InputForm() {
  const initValue = {
    name : "",
    age: NaN,
    gender: "",
    subjectId: 0,
    enabled: false
  }
  // useForm컴포넌트로 현재 상태값과 변경 함수를 전달
  const [student, handler] = useForm(initValue)

  return (
    <div id="box">
      <h1>입력폼</h1>
      <div className="control">
        <input type="text" placeholder="이름" name="name"
          onChange={handler} value={student.name} />
      </div>
      {/*parseInt = 문자열을 숫자(정수)로 변환 */}
      <div className="control">
        <input type="number" placeholder="나이" min="0" step="1" name="age"
          onChange={handler} value={student.age} />
      </div>
      <div className="control">
        <label>
          <input type="radio" name="gender" value="남자"
            onChange={handler} checked={student.gender === "남자"} />
          <span>남자</span>
        </label>
        <label>
          <input type="radio" name="gender" value="여자"
            onChange={handler} checked={student.gender === "여자"} />
          <span>여자</span>
        </label>
      </div>
      <select value={student.subjectId}
        onChange={handler}
        name="subjectId"
      >
        <option value={0}>과목을 선택하세요</option>
        <option value={1}>HTML</option>
        <option value={2}>JAVA</option>
        <option value={3}>JAVASCRIPT</option>
        <option value={4}>PYTHON</option>
      </select>
      <div className="control">
        <label>
          <input type="checkbox" name="enabled"
            onChange={handler} checked={student.enabled} />
          <span>활성화</span>
        </label>
      </div>
      <hr />
      <div className="control">이름 : {student.name}</div>
      <div className="control">나이 : {student.age}</div>
      <div className="control">성별 : {student.gender}</div>
      <div className="control">선택과목 : {student.subjectId}</div>
      <div className="control">활성화 : {student.enabled ? "true" : "false"}</div>
    </div>
  )
}

export default InputForm