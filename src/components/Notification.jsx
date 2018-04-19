import React, {Component} from 'react';
import {ToastContainer, ToastMessage} from 'react-toastr';
import * as constants from '../constants';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class Notification extends Component {

  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.msg !== nextProps.msg && nextProps.msg) {
      this.addNotification(nextProps.title, nextProps.msg, nextProps.msgType);
    }
  }

  addNotification(title, msg, msgType) {
    switch (msgType) {
      case constants.SUCCESS:
        this.refs.container.success(msg, title, {timeOut: 3000, extendedTimeOut: 1000});
        break;
      case constants.WARNING:
        this.refs.container.warning(msg, title, {timeOut: 5000, extendedTimeOut: 1000});
        break;
      case constants.ERROR:
        this.refs.container.error(msg, title, {timeOut: 0, extendedTimeOut: 0});
        break;
      default:
        this.refs.container.info(msg, title, {timeOut: 3000, extendedTimeOut: 1000});
        break;
    }
  }

  render () {
    return (
      <ToastContainer
        className="toast-container toast-bottom-right"
        ref="container"
        toastMessageFactory={ToastMessageFactory}
      />
    );
  }
}

export default Notification;
