//Outlet은 현재 URL에 해당하는 페이지를 출력하는 자리
import { Link, Outlet } from "react-router"
import "./styles/style.css"

function App() {
  
  return (
    <>
      <nav>
        {/*to속성을 이용해서 이동하고자 하는 페이지 경로를 지정할 수 있다 */}
        <Link to="/">입력폼</Link>{" | "}
        <Link to="/login">로그인</Link>{" | "}
        <Link to="/product">상품페이지</Link>{" | "}
        <Link to="/counter">렌더링</Link>{" | "}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
