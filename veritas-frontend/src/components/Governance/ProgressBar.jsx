import React from 'react';
import './theme/ProgressBar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div style={{ width: `${progress}%` }}>{progress}%</div>
    </div>
  );
};

export default ProgressBar;
