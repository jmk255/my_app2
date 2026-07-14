import {useEffect, useState} from 'react'

function Clock() {
  //현재 날짜 정보를 상태값으로 설정
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    //Clock 컴포넌트가 마운트 될때 실행
    const timer = setInterval(() => setTime(new Date()), 1000)

    return () => clearInterval(timer); //Clock 컴포넌트가 언마운트될때 실행
    //콜백 함수 등록을 취소하지 않으면, 메모리 누수가 발생한다
  }, [])
  return (
    <div className='Clock'>
      <h1>Clock</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock