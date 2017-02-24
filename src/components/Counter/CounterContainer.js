import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CounterView from './CounterView.js'
import { increment, decrement} from '../../actions/Counter/Counter.js'


function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    increment,
    decrement,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)
