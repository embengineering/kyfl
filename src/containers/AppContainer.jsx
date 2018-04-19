// libraries
import React from 'react';

// containers
import AppBarContainer from '../containers/AppBarContainer.jsx';
import DashboardContainer from '../containers/DashboardContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';
import ConfirmationContainer from '../containers/ConfirmationContainer.jsx';

const App = () => (
  <div>
    <AppBarContainer />
    <DashboardContainer />
    <NotificationContainer />
    <ConfirmationContainer />
  </div>
);

export default App;
