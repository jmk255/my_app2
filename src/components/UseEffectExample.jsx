//문제1: 기본 사용법

// 버튼을 클릭할 때마다 현재 시간과 함께 카운트가 증가하는 컴포넌트를 만드세요.
// 카운트와 현재 시간을 `useEffect`를 사용하여 콘솔에 로그를 찍어보세요.

//1. 카운트는 useStat로 상태 관리
//2. useEffect로 현재 시간을 콘솔로 출력
// 현재 시간을 구하는 메서드 = new Date().toLocaleTimeString()

export const Timer = () => {
  
  return (
    <>
      <p>Count: </p>
      <button>Increment</button>
	    <hr />
    </>
  );
};

// 문제 2: 컴포넌트가 처음 렌더링될 때만 실행

// 컴포넌트가 처음 렌더링될 때만 한 번만 `console.log`로 "Component Mounted"를 출력하세요.
// 컴포넌트가 언마운트될 때 "Component Unmounted"를 출력하세요.

export const Lifecycle = () => {
  //처음 렌더링될 때만 Component Mounted를 출력하고 언마운트될 때 Component Unmounted 출력

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

  return (
    <>
	    {/* input1이 변경되면 input2도 변경되도록 작성 */}
      <input
        type="text"
        value={input1}
        placeholder="Input 1"
      />
      {/* input2가 변경되면 input1도 변경되도록 작성 */}
      <input
        type="text"
        value={input2}
        placeholder="Input 2"
      />
      <hr />
    </>
  );
};