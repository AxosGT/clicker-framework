import { call, put, take,takeEvery } from 'redux-saga/effects'
//import "USER_FETCH_REQUESTED" from '../actions/index';


//fetch('/game-info/gameInfo.json')

function* fetchGameInfo() {
   try {
      const response = yield call(fetch,'/game-info/gameInfo.json');
      const res = yield response.json()
      yield put({type: "SET_APP_JSON", setData:res});
   } catch (e) {
      yield console.log(e.message)
      //put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {

  yield takeEvery("USER_FETCH_REQUESTED", fetchGameInfo);

}


export default mySaga;
