import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//라우터 설정을 React앱에 적용하는 역할
import { RouterProvider } from 'react-router'
//라우터 객체를 가져옵니다
import router from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*RouterProvider에 router객체를 전달 */}
    <RouterProvider router={router} />
  </StrictMode>,
)
