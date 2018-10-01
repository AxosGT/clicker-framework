import { call, put, take } from 'redux-saga/effects'


fetch('/game-info/gameInfo.json')

function* fetchGameInfo() {
   try {
      const data = yield call(()=>fetch('/game-info/gameInfo.json'));
      yield put({type: "SET_APP_JSON", setData:data.json()});
   } catch (e) {
      yield console.log(e.message)
      //put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield take("USER_FETCH_REQUESTED", fetchGameInfo);
}


export default mySaga;
