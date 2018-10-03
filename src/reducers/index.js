import { combineReducers } from 'redux'
import clickCount from './clickCount'
import setAppJson from './setAppJson'


const rootReducer = combineReducers({
  clickCount,
  setAppJson
})

export default rootReducer
