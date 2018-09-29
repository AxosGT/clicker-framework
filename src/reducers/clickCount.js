import {CLICK_COUNT} from '../actions/index';

function clickCount(state = 0, action){
  switch (action.type) {
    case CLICK_COUNT:
      return state+action.sumAdded
    default:
      return state
  }
}
export default clickCount
