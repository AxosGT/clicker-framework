import {SET_APP_JSON} from '../actions/index';
import gameDataInport from '../game-info/gameInfo'
import gameDataDefult from '../game-info/gameInfoDefault'


function setAppJson(state = gameDataDefult,action){
  switch (action.type) {
    case SET_APP_JSON:
      return gameDataInport
    default:
      return state
  }
}
export default setAppJson
