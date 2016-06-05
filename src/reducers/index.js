import { combineReducers } from 'redux'
import notes from './notes'
import time from './time'

const rootReducer = combineReducers({
  notes,
  time
})

export default rootReducer
