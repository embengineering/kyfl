import React from 'react';
import '../scss/progress.css';

// material-ui components
import CircularProgress from 'material-ui/CircularProgress';

const Progress = ({progressData}) => (
  <div className={"progress " + progressData.color}>
     <CircularProgress
       mode="determinate"
       value={progressData.percentComplete}
       size={64}
     />
  </div>
);

export default Progress;
