import { connect } from 'react-redux'
import App from '../components/App'
import {clickCount} from '../actions/index'
import {clickCountSumAdd} from '../actions/index'
//import {userFetchRequested} from '../actions/index'
import {setAppJson} from '../actions/index'
import {clickPerSec} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  console.log('count:'+state.clickCount.myCount)
  return {
    clickCount: state.clickCount.myCount,
    appJsonData: state.setAppJson
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickCount: (n)=>dispatch(clickCount(n)),
    onClickCountSumAdd: (n)=>dispatch(clickCountSumAdd(n)),
    onPageLode:  ()=>dispatch(setAppJson()),
    onAutoAdd: (n)=>dispatch(clickPerSec(n))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
