// misc libraries
import React from 'react';

// styling
import '../scss/widget.scss';

// child component
import Progress from '../components/Progress.jsx';

// material-ui components
import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';

const Widget = ({
    widgetData,
    onIncrease,
    onDecrease,
    allowEdit,
    onTakeOwnership,
    onRemove
  }) => {
  let menuIcon = null, cardStatus = null, percentComplete = widgetData.value / widgetData.limit * 100;

  if (percentComplete < 50) {
      cardStatus = "red";
  } else if (percentComplete >= 50 && percentComplete < 100) {
      cardStatus = "orange";
  } else {
      cardStatus = "green";
  }

  widgetData.percentComplete = percentComplete;
  widgetData.color = cardStatus;

  if(allowEdit) {
    menuIcon = (
      <IconMenu
        className="widget-iconmenu"
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem
          primaryText="Increase"
          leftIcon={<FontIcon className="fa fa-arrow-circle-up" />}
          onTouchTap={onIncrease}
        />
        <MenuItem
          primaryText="Decrease"
          leftIcon={<FontIcon className="fa fa-arrow-circle-down" />}
          onTouchTap={onDecrease}
        />
        <MenuItem
          primaryText="Take Ownership"
          leftIcon={<FontIcon className="fa fa-bullhorn" />}
          onTouchTap={onTakeOwnership}
        />
        <MenuItem
          primaryText="Remove"
          leftIcon={<FontIcon className="fa fa-warning" />}
          onTouchTap={onRemove}
        />
        <Divider />
        <MenuItem primaryText="Cancel" />
      </IconMenu>
    );
  }

  return (
    <Card className={"animated flipInX widget " + cardStatus}>
      <CardHeader
        className="widget-header"
        title={<span className="widget-title">{widgetData.title}</span>}
        subtitle={<span className="widget-subtitle"><span className={cardStatus}>{widgetData.value}</span>{` | ` + widgetData.limit}</span>}
        avatar={<Avatar size={60} src={widgetData.avatar} />}
      >
        {menuIcon}
        <Progress progressData={widgetData} />
      </CardHeader>
    </Card>
  );
};

export default Widget;
