// libraries
import React from 'react';

// containers
import AppBarContainer from '../containers/AppBarContainer.jsx';
import DashboardContainer from '../containers/DashboardContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';
import ConfirmationContainer from '../containers/ConfirmationContainer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <AppBarContainer />
    <DashboardContainer />
    <NotificationContainer />
    <ConfirmationContainer />
  </MuiThemeProvider>
);

export default App;
