import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeView from './HomeView.js';
import { fetchInitData } from '../../actions/Home/home.js';

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchInitData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
