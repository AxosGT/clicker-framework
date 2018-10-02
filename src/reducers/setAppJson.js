import {SET_APP_JSON} from '../actions/index';

function setAppJson(state = {'test':'test'}, action){
  switch (action.type) {
    case SET_APP_JSON:
      return action.setData
    default:
      return state
  }
}
export default setAppJson
