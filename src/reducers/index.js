import { combineReducers } from 'redux'
import clickCount from './clickCount'
import setAppJson from './setAppJson'
import clickPerSec from'./clickPerSec'


const rootReducer = combineReducers({
  clickCount,
  setAppJson,
  clickPerSec
})

export default rootReducer
