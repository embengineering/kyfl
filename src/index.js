// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// misc
import 'babel-polyfill';
// import './scss/main.scss';
import './utils/dateUtils';
import './utils/firebase';

// linbraries and tools
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// store
import store from './stores';

// actions
import * as authActions from './actions/authActions';
import * as widgetListActions from './actions/widgetListActions';

// components
import AppContainer from './containers/AppContainer.jsx';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// on load start listening to authorization actions
setTimeout(function(){
    store.dispatch(authActions.startListeningToAuth());
    store.dispatch(widgetListActions.startListeningToWidgetList());
});
