import React, { useState } from 'react';
import '../../theme/Staking.css'; // Separate CSS for staking

const Staking = () => {
  const [selectedTab, setSelectedTab] = useState('popular');

  return (
    <div className="staking-container">
      {/* Header */}
      <div className="staking-header">
        <h2>#2145358</h2>
        <p>https://rpc1.mainnet.soarchain.com/api</p>
      </div>

      {/* Stats */}
      <div className="staking-stats">
        <div className="stat-item">
          <p>0%</p>
          <p>Inflation</p>
        </div>
        <div className="stat-item">
          <p>21 days</p>
          <p>Unbonding Time</p>
        </div>
        <div className="stat-item">
          <p>5%</p>
          <p>Double Sign Slashing</p>
        </div>
        <div className="stat-item">
          <p>1%</p>
          <p>Downtime Slashing</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="staking-tabs">
        <button
          className={`tab-button ${selectedTab === 'popular' ? 'active' : ''}`}
          onClick={() => setSelectedTab('popular')}
        >
          Popular
        </button>
        <button
          className={`tab-button ${selectedTab === 'active' ? 'active' : ''}`}
          onClick={() => setSelectedTab('active')}
        >
          Active
        </button>
        <button
          className={`tab-button ${selectedTab === 'inactive' ? 'active' : ''}`}
          onClick={() => setSelectedTab('inactive')}
        >
          Inactive
        </button>
      </div>

      {/* Table Placeholder */}
      <div className="staking-table">
        {selectedTab === 'popular' && (
          <div className="table-row">Popular Validator Placeholder</div>
        )}
        {selectedTab === 'active' && (
          <div className="table-row">Active Validator Placeholder</div>
        )}
        {selectedTab === 'inactive' && (
          <div className="table-row">Inactive Validator Placeholder</div>
        )}
      </div>
    </div>
  );
};

export default Staking;
