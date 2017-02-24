import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ValuaterView from './ValuaterView.js'
import { fetchFactorys, chooseFactory } from '../../actions/Valuater/valuater.js'


function mapStateToProps(state) {
  return {
    valuater: state.valuater
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFactorys,
    chooseFactory
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ValuaterView)
