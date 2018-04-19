import React, {Component} from 'react';
import {ToastContainer, ToastMessageAnimated } from 'react-toastr';
import * as constants from '../constants';

const ToastMessageFactory = React.createFactory(ToastMessageAnimated);

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
        this.container.success(msg, title, {timeOut: 3000, extendedTimeOut: 1000});
        break;
      case constants.WARNING:
        this.container.warning(msg, title, {timeOut: 5000, extendedTimeOut: 1000});
        break;
      case constants.ERROR:
        this.container.error(msg, title, {timeOut: 0, extendedTimeOut: 0});
        break;
      default:
        this.container.info(msg, title, {timeOut: 3000, extendedTimeOut: 1000});
        break;
    }
  }

  render () {
    return (
      <ToastContainer
        ref={ref => this.container = ref}
        className="toast-container toast-bottom-right"
        toastMessageFactory={ToastMessageFactory}
      />
    );
  }
}

export default Notification;
