import { createBrowserRouter } from "react-router";

import App from "./App";
import InputForm from "./pages/InputForm";
import LoginForm from "./pages/LoginForm";
import Product from "./pages/Product";
import CounterDemo from "./pages/CounterDemo";
import CounterDemo2 from "./pages/CounterDemo2";
import Counter from "./pages/Counter";

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
      },
      {
        path:"login",
        element: <LoginForm />
      },
      {
        path:"product",
        element: <Product />
      },
      {
        path:"counter",
        element: <CounterDemo />
      },
      {
        path:"counter2",
        element: <CounterDemo2 />
      },
      {
        path:"counter3",
        element: <Counter />
      },
    ]
  }
])

export default router;