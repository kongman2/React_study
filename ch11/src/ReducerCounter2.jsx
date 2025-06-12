import { act, useReducer } from 'react'

function ReducerCounter2() {
   //[state 값, dispatch로 사용할 함수의 이름]
   const [count, countDispatch] = useReducer(countReducer, 0)

   //reducer함수: 직접 state를 변경한다(회계직원 역할)
   function countReducer(oldCount, action) {
      if (action === 'UP') return oldCount + 1
      else if (action === 'DOWN') return oldCount - 1
      else if (action === 'RESET') return 0
   }

   // dispatch함수: 이벤트가 발생시 reducer 함수를 실행시키면서 action을 전달(창구 직원 역할)
   //action: 요청
   const down = () => countDispatch('DOWN')
   const reset = () => countDispatch('RESET')
   const up = () => countDispatch('UP')

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter2
