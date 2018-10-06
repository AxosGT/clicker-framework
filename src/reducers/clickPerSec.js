import {CLICK_PER_SEC} from '../actions/index';


function clickPerSec(state = 0, action){
  switch (action.type) {
    case CLICK_PER_SEC:
      return state + action.setCPS
    default:
      return state
  }
}
export default clickPerSec
