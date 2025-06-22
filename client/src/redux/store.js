import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reduxslices/counterSlices';
import boxSlice from './reduxslices/boxSlices'
import userSlice from './reduxslices/userSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    box: boxSlice,
    user:userSlice
  }
})