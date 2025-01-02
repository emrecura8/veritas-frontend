import React, { useState } from 'react';
import '../../theme/Uptime.css';

const Uptime = () => {
  const [activeTab, setActiveTab] = useState('overall');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="uptime-container">
      {/* Header */}
      <div className="uptime-header">
        <h2>Uptime</h2>
      </div>

      {/* Tabs */}
      <div className="uptime-tabs">
        <button
          className={`tab-button ${activeTab === 'overall' ? 'active' : ''}`}
          onClick={() => handleTabChange('overall')}
        >
          Overall
        </button>
        <button
          className={`tab-button ${activeTab === 'blocks' ? 'active' : ''}`}
          onClick={() => handleTabChange('blocks')}
        >
          Blocks
        </button>
        <button
          className={`tab-button ${activeTab === 'customize' ? 'active' : ''}`}
          onClick={() => handleTabChange('customize')}
        >
          Customize
        </button>
      </div>

      {/* Tabs Content */}
      <div className="uptime-content">
        {activeTab === 'overall' && (
          <div>
            <input
              type="text"
              className="uptime-filter"
              placeholder="Keywords to filter validators"
            />
            <table className="uptime-table">
              <thead>
                <tr>
                  <th>Validator</th>
                  <th>Uptime</th>
                  <th>Last Jailed Time</th>
                  <th>Signed Precommits</th>
                  <th>Start Height</th>
                  <th>Tombstoned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>soarchain-1</td>
                  <td style={{ color: 'green' }}>100%</td>
                  <td>-</td>
                  <td>2145531</td>
                  <td>0</td>
                  <td>False</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'blocks' && (
          <div>
            <input
              type="text"
              className="uptime-filter"
              placeholder="Keywords to filter validators"
            />
            <h3>Blocks Uptime Visualization</h3>
            <div className="uptime-graph">
              {/* Placeholder Visualization */}
              <p>Graph Placeholder</p>
            </div>
          </div>
        )}

        {activeTab === 'customize' && (
          <div>
            <h3>Customize Settings</h3>
            <button>Add Validators</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Uptime;
