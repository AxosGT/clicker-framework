import {CLICK_COUNT} from '../actions/index';
import {CLICK_COUNT_ADD} from '../actions/index';

function clickCount(state = {myCount:0,mySumAdded:1}, action){
  switch (action.type) {
    case CLICK_COUNT:
      return(
      {myCount:(state.myCount+state.mySumAdded),
        mySumAdded:state.mySumAdded}
      )
    case CLICK_COUNT_ADD:
      return(
      {myCount:state.myCount,
        mySumAdded:(state.mySumAdded+action.sumAdded)}
      )
    default:
      return state
  }
}
export default clickCount
