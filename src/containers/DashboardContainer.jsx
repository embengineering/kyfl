// misc
import React from 'react';
import {connect} from 'react-redux';

// app specific
import '../scss/dashboard.css';
import * as widgetListActions from '../actions/widgetListActions';
import * as goalActions from '../actions/goalActions';
import WidgetList from '../components/WidgetList.jsx';
import ManageGoal from '../components/ManageGoal.jsx';

// material-ui
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const mapStateToProps = (state) => {
  return {
    allowEdit: state.auth.uid,
    widgetList: state.widgetList,
    manageGoal: state.manageGoal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // widget list
    onDecrease: (id) => dispatch(widgetListActions.decreaseWidgetValue(id)),
    onIncrease: (id) => dispatch(widgetListActions.increaseWidgetValue(id)),
    onTakeOwnership: (id) => dispatch(widgetListActions.takeOwnership(id)),
    onRemove: (id) => dispatch(widgetListActions.removeWidget(id)),

    // mange goal form
    handleShowManageGoal: () => dispatch(goalActions.show()),
    handleCancelManageGoal: () => dispatch(goalActions.cancel()),
    handleValidForm: () => dispatch(goalActions.enableSubmit()),
    handleInvalidForm: () => dispatch(goalActions.disableSubmit()),
    handleSubmitForm: (model) => dispatch(goalActions.submit(model))
  };
};

const DashboardContainer = (props) => {
  const addAction = props.allowEdit
    ? (
      <div className="animated bounce action-add">
        <FloatingActionButton
          onClick={props.handleShowManageGoal}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
    : null;

  return (
    <div>
      {addAction}
      <WidgetList
        allowEdit={props.allowEdit}
        widgetList={props.widgetList}
        onDecrease={props.onDecrease}
        onIncrease={props.onIncrease}
        onTakeOwnership={props.onTakeOwnership}
        onRemove={props.onRemove}
      />
      <ManageGoal
        canSubmit={props.manageGoal.canSubmit}
        isVisible={props.manageGoal.isVisible}
        model={props.manageGoal.model}
        errorMessages={props.manageGoal.errorMessages}
        handleCancel={props.handleCancelManageGoal}
        handleValidForm={props.handleValidForm}
        handleInvalidForm={props.handleInvalidForm}
        handleSubmitForm={props.handleSubmitForm}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
