// misc
import 'babel-polyfill';
import './scss/main.css';
import './utils/dateUtils';
import './utils/firebase';

// linbraries and tools
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// store
import store from './stores';

// actions
import * as authActions from './actions/authActions';
import * as widgetListActions from './actions/widgetListActions';

// containers
import AppMainBarContainer from './containers/AppMainBarContainer.jsx';
import DashboardContainer from './containers/DashboardContainer.jsx';
import NotificationContainer from './containers/NotificationContainer.jsx';
import ConfirmationContainer from './containers/ConfirmationContainer.jsx';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <AppMainBarContainer />
        <DashboardContainer />
        <NotificationContainer />
        <ConfirmationContainer />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// on load start listening to authorization actions
setTimeout(function(){
    store.dispatch(authActions.startListeningToAuth());
    store.dispatch(widgetListActions.startListeningToWidgetList());
});
