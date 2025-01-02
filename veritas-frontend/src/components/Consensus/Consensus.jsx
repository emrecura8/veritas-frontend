import React from 'react';
import '../../theme/Consensus.css'; // Import CSS for styling

const Consensus = () => {
  return (
    <div className="consensus-container">
      {/* Header */}
      <div className="consensus-header">
        <h2>Consensus State</h2>
        <button className="monitor-button">Monitor</button>
      </div>

      {/* Monitor Section */}
      <div className="monitor-section">
        <input
          type="text"
          placeholder="Enter RPC Endpoint URL"
          style={{ padding: '0.5rem', borderRadius: '5px', flex: 1 }}
        />
        <button className="monitor-button">Apply</button>
      </div>

      {/* Stats */}
      <div className="consensus-stats">
        <div className="stat-item">
          <h3>0%</h3>
          <p>Onboard Rate</p>
        </div>
        <div className="stat-item">
          <h3>2145959</h3>
          <p>Height</p>
        </div>
        <div className="stat-item">
          <h3>0</h3>
          <p>Round</p>
        </div>
        <div className="stat-item">
          <h3>1</h3>
          <p>Step</p>
        </div>
      </div>

      {/* Tips Section */}
      <div className="tips-section">
        <p>
          • This tool is useful for validators to monitor who is onboard during an upgrade.
        </p>
        <p>
          • Make sure HTTPS and CORS are enabled on your server for API access.
        </p>
      </div>
    </div>
  );
};

export default Consensus;
