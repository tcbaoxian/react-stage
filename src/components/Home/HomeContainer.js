import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeView from './HomeView.js';
import { addItem, deleteItem } from '../../actions/Home/Home.js';

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addItem,
    deleteItem
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
