import { createBrowserRouter } from "react-router";

import App from "./App";
import InputForm from "./pages/InputForm";
//브라우저 라우터를 생성
//배열 안에 모든 페이지(URL)를 등록
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[ //App안에서 변경될 페이지들을 등록
      {
        index: true,
        element: <InputForm />
      }
    ]
  }
])

export default router;