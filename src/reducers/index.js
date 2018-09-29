import { combineReducers } from 'redux'
import clickCount from './clickCount.js'

const setMyApp = combineReducers({
  clickCount
})

export default setMyApp
