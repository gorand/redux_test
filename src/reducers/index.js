import { combineReducers } from 'redux'
import todos from './todos'
import openList from './toggle'

const rootReducer = combineReducers({
  todos,
  openList
})

export default rootReducer
