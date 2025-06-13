import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userSlice from './userSlice'

const store = configureStore({
   reducer: {
      counter: counterSlice, // counter reducer
      user: userSlice, // user reducer
   },
})

export default store
