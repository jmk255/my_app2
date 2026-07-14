import { useState, useEffect } from "react";
//문제1: 기본 사용법

// 버튼을 클릭할 때마다 현재 시간과 함께 카운트가 증가하는 컴포넌트를 만드세요.
// 카운트와 현재 시간을 `useEffect`를 사용하여 콘솔에 로그를 찍어보세요.

//1. 카운트는 useState로 상태 관리
//2. useEffect로 현재 시간을 콘솔로 출력
// 현재 시간을 구하는 메서드 = new Date().toLocaleTimeString()

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count: ${count}, Time: ${new Date().toLocaleTimeString()}`)
  },[count]); //의존성 배열에 count를 추가(count값이 변경되면 useEffect함수가 실행됨)

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <hr />
    </>
  );
};

// 문제 2: 컴포넌트가 처음 렌더링될 때만 실행

// 컴포넌트가 처음 렌더링될 때만 한 번만 `console.log`로 "Component Mounted"를 출력하세요.
// 컴포넌트가 언마운트될 때 "Component Unmounted"를 출력하세요.

export const Lifecycle = () => {
  //처음 렌더링될 때만 Component Mounted를 출력하고 언마운트될 때 Component Unmounted 출력
  useEffect(() => {
    console.log(`Component Mounted`)

    return () => {//return문 뒤에 오는 함수가 언마운트될때 실행
      console.log("Component Unmounted")
    }

  }, []); //빈 의존성 배열을 전달하면 최초 마운트 될때 한번만 실행이된다

  return (
    <>
      <div>콘솔에 mounted 또는 unmounted를 표시</div>
      <hr />
    </>
  )
};

//문제 3: 타이머 구현

// useEffect를 사용하여 컴포넌트가 렌더링될 때 1초마다 카운트가 증가하는 타이머를 구현하세요.
// 타이머를 클린업(clean up)하여 컴포넌트가 언마운트될 때 타이머를 정리하세요.

export const TimerWithCleanup = () => {
  const [count, setCount] = useState(0);
  //1. 타이머 메서드로 1초마다 1씩 증가하는 타이머 구현(setInterval())
  //2. 언마운트될 때 타이머를 정리(clearInterval())
  useEffect(() => {
    const timer = setInterval(() => {
      //변경된 count상태값을 인자로 받아서 +1 합니다
      setCount((prevCount) => prevCount + 1)
    },1000)
    
    //클린업 함수 반환
    return () => {
      clearInterval(timer)
    }

  }, [])//빈 의존성 배열
  return (
    <>
      <p>Timer: {count}s</p>
      <hr />
    </>
  );
};

//문제 4: 의존성 배열 사용하기(dependency array)

//두개의 입력 필드를 만들고, 하나의 입력값이 변경될 때마다 다른 입력필드의 값을 업데이트하세요
//useEffect를 사용하여 입력 필드의 값이 변경될 때마다 콘솔에 로그를 찍으세요

export const SyncedInputs = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  //입력값이 변경될 때마다 콘솔에 로그를 찍는 코드 구현
  useEffect(() => {
    console.log(`input1: ${input1}`)
  },[input1]); //input1이 변경될 때마다 실행

  useEffect(() => {
    console.log(`input2: ${input2}`)
  },[input2]);//input2가 변경될때마다 실행
  return (
    <>
      {/* input1이 변경되면 input2도 변경되도록 작성 */}
      <input
        type="text"
        value={input1}
        placeholder="Input 1"
        onChange={(e) => {
          setInput1(() => e.target.value)
          setInput2(() => e.target.value)
        }}
      />
      {/* input2가 변경되면 input1도 변경되도록 작성 */}
      <input
        type="text"
        value={input2}
        placeholder="Input 2"
        onChange={(e) => {
          setInput1(() => e.target.value)
          setInput2(() => e.target.value)
        }}
      />
      <hr />
    </>
  );
};