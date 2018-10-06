import { call, put, take,takeEvery } from 'redux-saga/effects';
//import "CLICK_COUNT" from '../actions/index.js';


//fetch('/game-info/gameInfo.json')
function* gameLoopSaga(){
  while(true){
    const timeCount = window.requestAnimationFrame(()=>new Date().getTime())
    if(!timeCount%200){
      yield console.log(timeCount)
    }
    // if (game.crashed){
    //   break
    // }

  }

}

function* fetchGameInfo() {
   try {
      const response = yield call(fetch,'/game-info/gameInfo.json');
      const res = yield response.json()
      yield put({type: "SET_APP_JSON", setData:res});
   } catch (e) {
      yield console.log(e.message)
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("SET_APP_JSON", gameLoopSaga);
  //yield takeEvery("USER_FETCH_REQUESTED", fetchGameInfo);

}


export default mySaga;
