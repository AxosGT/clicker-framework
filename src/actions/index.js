export const CLICK_COUNT = 'CLICK_COUNT';
export const CLICK_COUNT_ADD ='CLICK_COUNT_ADD';
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const SET_APP_JSON ='SET_APP_JSON'; //part of mySaga


export function clickCount(){
  return{type:CLICK_COUNT}
}
export function clickCountAdd(sumAdded){
  return{type:CLICK_COUNT_ADD,sumAdded}
}

export function userFetchRequested(data){
  return {type: USER_FETCH_REQUESTED,data}
}

// export function setAppJson(setData){
//   return {type: SET_APP_JSON, setData}
// }
