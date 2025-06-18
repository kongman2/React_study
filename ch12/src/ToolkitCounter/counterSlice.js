import { createSlice } from '@reduxjs/toolkit'

// reducer대신 slice 생성
// createSlice() 함수는 reducer함수, 초기 state들을 알아서 생성해준다.

const counterSlice = createSlice({
   name: 'counterSlice', // slice 이름
   initialState: { value: 0 }, // 초기 state
   reducers: {
      // reducer의 역할(state 바꿈)을 하는 함수 지정
      up: (state, action) => {
         // ★ Toolkit: 자동으로 불변성을 유지해주므로 직접 state 변경 가능
         // state = { value: 0 }
         state.value += action.paylosd
      },
      down: (state, action) => {
         state.value -= action.paylosd
      },
   },
})
// 리듀서 함수 내보냄
export default counterSlice.reducer

// 액션 생성자 함수를 내보냄
export const { up, down } = counterSlice.actions
