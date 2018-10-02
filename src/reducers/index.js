import { combineReducers } from 'redux'
import clickCount from './clickCount.js'
import setAppJson from './setAppJson'


const rootReducer = combineReducers({
  clickCount,
  setAppJson
})

export default rootReducer
