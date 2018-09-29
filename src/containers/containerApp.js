import { connect } from 'react-redux'
import App from '../components/App'
import {clickCount} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  console.log(state.clickCount)
  return {
    clickCount: state.clickCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickCount: ()=>dispatch(clickCount())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
