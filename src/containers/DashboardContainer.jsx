// misc
import React from 'react';
import {connect} from 'react-redux';

// app specific
import '../scss/dashboard.css';
import WidgetListContainer from './WidgetListContainer.jsx';
import ManageGoalContainer from './ManageGoalContainer.jsx';
import * as goalActions from '../actions/goalActions';

// material-ui
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const mapStateToProps = ({ auth }) => ({
  allowEdit: !!auth.uid
});

const mapDispatchToProps = dispatch => ({
  handleShowManageGoal: () => dispatch(goalActions.show())
});

const DashboardContainer = ({
  allowEdit,
  handleShowManageGoal
}) => {
  const addAction = allowEdit
    ? (
      <div className="animated bounce action-add">
        <FloatingActionButton onClick={handleShowManageGoal} secondary={true}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
    : null;

  return (
    <div>
      {addAction}
      <WidgetListContainer />
      <ManageGoalContainer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
