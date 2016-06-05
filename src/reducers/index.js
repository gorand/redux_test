import { combineReducers } from 'redux'
import list from './list'
import timer from './timer'

const rootReducer = combineReducers({
  list,
  timer
})

export default rootReducer
