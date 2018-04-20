import {connect} from 'react-redux';
import Notification from '../components/Notification.jsx';

const mapStateToProps = ({ notification }) => ({ ...notification });

export default connect(mapStateToProps)(Notification);
