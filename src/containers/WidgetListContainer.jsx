import {connect} from 'react-redux';
import * as widgetListActions from '../actions/widgetListActions';
import WidgetList from '../components/WidgetList.jsx';

const mapStateToProps = ({ widgetList, auth }) => ({
  widgetList,
  allowEdit: !!auth.uid
});

const mapDispatchToProps = dispatch => ({
  onDecrease: id => dispatch(widgetListActions.decreaseWidgetValue(id)),
  onIncrease: id => dispatch(widgetListActions.increaseWidgetValue(id)),
  onTakeOwnership: id => dispatch(widgetListActions.takeOwnership(id)),
  onRemove: id => dispatch(widgetListActions.removeWidget(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetList);
