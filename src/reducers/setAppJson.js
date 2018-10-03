import {SET_APP_JSON} from '../actions/index';
const gameDataDefult=
{
  "passive": [
    {
      "id":"Default",
      "name":"Default Passive",
      "data":0
    }
  ],
  "auto": [
    {
      "id":"Default",
      "name":"Default Auto",
      "data":0,
      "frequency":0
    }
  ]
}

function setAppJson(state = gameDataDefult, action){
  switch (action.type) {
    case SET_APP_JSON:
      return action.setData
    default:
      return state
  }
}
export default setAppJson
