import { useDispatch, useSeletor } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   // state.counter = { value: 0 }
   // ☆ store에 slice가 여러개가 지정되므로 state.store에 지정한 슬라이스 key값으로 가져온다.
   const count = useSeletor((state) => state.counter.value)
   return (
      <div>
         <button
            onClick={() => {
               // 액션 생성자 함수(payload값)
               dispatch(up(2))
            }}
         >
            증가
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            감소
         </button>
         {count}
      </div>
   )
}

export default Counter
