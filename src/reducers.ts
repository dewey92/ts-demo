import { combineReducers } from 'redux'
import { userReducer } from './user'

const reducers = combineReducers({
  users: userReducer,
})

export type TsDemoStore = ReturnType<typeof reducers>

export default reducers
