import React, { useState } from 'react';
import '../../theme/IBC.css';

const IBC = () => {
  const [activeTab, setActiveTab] = useState('registry');
  const [connectionId, setConnectionId] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleApply = () => {
    console.log('Connection ID:', connectionId);
    // Placeholder for future data handling
  };

  return (
    <div className="ibc-container">
      {/* Header */}
      <div className="ibc-header">
        <h2>IBC Connections</h2>
        <div className="ibc-tabs">
          <button
            className={`ibc-tab ${activeTab === 'registry' ? 'active' : ''}`}
            onClick={() => handleTabClick('registry')}
          >
            Registry
          </button>
          <button
            className={`ibc-tab ${activeTab === 'favorite' ? 'active' : ''}`}
            onClick={() => handleTabClick('favorite')}
          >
            Favorite
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'registry' && (
        <div className="ibc-input-container">
          <input
            type="text"
            value={connectionId}
            onChange={(e) => setConnectionId(e.target.value)}
            placeholder="Enter Connection ID"
            className="ibc-input"
          />
          <button className="ibc-button" onClick={handleApply}>
            Apply
          </button>
        </div>
      )}

      {activeTab === 'favorite' && (
        <div className="ibc-placeholder">
          <p>Favorite connections will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default IBC;
