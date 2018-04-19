import {connect} from 'react-redux';
import Notification from '../components/Notification.jsx';

const mapStateToProps = (state) => {
  return {
    title: state.notification.title,
    msg: state.notification.msg,
    msgType: state.notification.msgType
  };
}

export default connect(mapStateToProps)(Notification);
