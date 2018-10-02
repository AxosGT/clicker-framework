import { connect } from 'react-redux'
import App from '../components/App'
import {clickCount} from '../actions/index'
import {userFetchRequested} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  console.log(state.clickCount)
  return {
    clickCount: state.clickCount,
    appJsonData: state.setAppJson
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickCount: (n)=>dispatch(clickCount(n)),
    onPageLode:  ()=>dispatch(userFetchRequested())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
