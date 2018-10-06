export const CLICK_COUNT = 'CLICK_COUNT';
export const CLICK_COUNT_SUMADD ='CLICK_COUNT_SUMADD';
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const SET_APP_JSON ='SET_APP_JSON'; //part of mySaga
export const CLICK_PER_SEC = 'CLICK_PER_SEC';


export function clickCount(added=0){
  return{type:CLICK_COUNT,added}
}
export function clickCountSumAdd(sumAdded){
  return{type:CLICK_COUNT_SUMADD,sumAdded}
}

export function userFetchRequested(data){
  return {type: USER_FETCH_REQUESTED,data}
}

export function setAppJson(){
  return {type: SET_APP_JSON}
}

export function clickPerSec(setCPS){
  return {type:CLICK_PER_SEC,setCPS}
}
