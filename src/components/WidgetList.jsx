import React from 'react';
import '../scss/widget-list.scss';

import Widget from '../components/Widget.jsx';

const WidgetList = ({
    widgetList,
    onIncrease,
    onDecrease,
    allowEdit,
    onTakeOwnership,
    onRemove
  }) => {
  const properties = Object.getOwnPropertyNames(widgetList);

  return (
    <div className="widget-list-wrapper">
      {properties.map((key) => (
        <Widget
          allowEdit={allowEdit}
          key={key}
          onDecrease={() => onDecrease(key)}
          onIncrease={() => onIncrease(key)}
          onTakeOwnership={() => onTakeOwnership(key)}
          widgetData={widgetList[key]}
          onRemove={() => onRemove(key)}
        />
      ))}
    </div>
  );
};

export default WidgetList;
