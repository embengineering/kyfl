import React from 'react';
import * as constants from '../constants';

// material-ui components
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppMainBar = ({auth, onLogoutUser, onAttemptLogin, onResetData}) => {
  let iconElementRight = null;

  switch (auth.currently) {
    case constants.LOGGED_IN:
      iconElementRight = (
        <IconMenu
          iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText={`Signed in as ` + auth.displayName} disabled />
          <MenuItem primaryText={`Reset to Default`} onTouchTap={onResetData} />
          <Divider />
          <MenuItem primaryText={`Log out`} onTouchTap={onLogoutUser} />
        </IconMenu>
      );
      break;

    case constants.AWAITING_AUTH_RESPONSE:
      iconElementRight = (
        <FlatButton label={`authenticating...`} icon={ <i className="fa fa-spinner fa-spin"></i> } />
      );
      break;

    default:
      iconElementRight = (
        <FlatButton label={`Log in`} onClick={onAttemptLogin} />
      );
      break;
  }

  return (
    <MuiThemeProvider>
      <AppBar
        title={`ROCK - Dashboard`}
        showMenuIconButton={false}
        iconElementRight={iconElementRight}
      />
    </MuiThemeProvider>
  );
};

export default AppMainBar;
