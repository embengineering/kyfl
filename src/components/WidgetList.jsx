import React from 'react';
import '../scss/widget-list.css';

import Widget from '../components/Widget.jsx';

const WidgetList = ({
    widgetList,
    allowEdit,
    onIncrease,
    onDecrease,
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
