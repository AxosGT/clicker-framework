import { connect } from 'react-redux'
import App from '../components/App'
import {clickCount} from '../actions/index'
import {clickCountAdd} from '../actions/index'
//import {userFetchRequested} from '../actions/index'
import {setAppJson} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    clickCount: state.clickCount.myCount,
    appJsonData: state.setAppJson
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickCount: ()=>dispatch(clickCount()),
    onClickCountAdd: (n)=>dispatch(clickCountAdd(n)),
    onPageLode:  ()=>dispatch(setAppJson())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
