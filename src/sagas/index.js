import { call, put, take,takeEvery,select } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import {clickCount} from '../actions/index'
//import "CLICK_COUNT" from '../actions/index.js';

// function animationPromise(){
//     const myPromise = new Promise((resolve, reject) => {
//         window.requestAnimationFrame((dt)=>resolve(dt))
//       })
//     return myPromise
//}
// timeCount = yield call(animationPromise)
// if(!Math.floor(timeCount)%2000){
//   yield
// }

function* gameLoopSaga(){
  while(true){
    let cps = yield select((state)=>state.clickPerSec);
    let passive = yield select((state)=>state.clickCount.mySumAdded);
    console.log('CPS Base:'+cps)
    console.log('passive Added:'+passive)
    console.log('CPS ie cps+cps*passive:'+(cps+cps*passive))
    yield delay(1000);
    yield put(clickCount(cps));
  }
}

// function* fetchGameInfo() {
//    try {
//       const response = yield call(fetch,'/game-info/gameInfo.json');
//       const res = yield response.json()
//       yield put({type: "SET_APP_JSON", setData:res});
//    } catch (e) {
//       yield console.log(e.message)
//       //yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }

function* mySaga() {
  yield takeEvery("SET_APP_JSON", gameLoopSaga);
  //yield takeEvery("USER_FETCH_REQUESTED", fetchGameInfo);

}


export default mySaga;
