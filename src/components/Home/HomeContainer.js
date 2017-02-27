import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeView from './HomeView.js';

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
