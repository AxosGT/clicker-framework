import {CLICK_COUNT} from '../actions/index';
import {CLICK_COUNT_SUMADD} from '../actions/index';

function clickCount(state = {myCount:0,mySumAdded:0}, action){
  switch (action.type) {
    case CLICK_COUNT:
      return(
      {myCount:(state.myCount+action.added+(state.mySumAdded*action.added)),
        mySumAdded:state.mySumAdded}
      )
    case CLICK_COUNT_SUMADD:
      return(
      {myCount:state.myCount,
        mySumAdded:(state.mySumAdded+action.sumAdded)}
      )
    default:
      return state
  }
}
export default clickCount
