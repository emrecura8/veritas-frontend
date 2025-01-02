import { useState } from 'react';
import '../../theme/Blocks.css';

const Blocks = () => {
  const [selectedTab, setSelectedTab] = useState('recent');

  return (
    <div className="blocks-container">
      {/* Header */}
      <div className="blocks-header">
        <h2>#Block Height</h2>
        <p>https://rpc.example.api</p>
      </div>

      {/* Tab Menu */}
      <div className="blocks-tabs">
        <button
          className={`tab-button ${selectedTab === 'recent' ? 'active' : ''}`}
          onClick={() => setSelectedTab('recent')}
        >
          RECENT
        </button>
        <button
          className={`tab-button ${selectedTab === 'future' ? 'active' : ''}`}
          onClick={() => setSelectedTab('future')}
        >
          FUTURE
        </button>
      </div>

      {/* Placeholder Content */}
      {selectedTab === 'recent' ? (
        <div>
          {/* Placeholder Graph */}
          <div className="blocks-graph">[Graph Placeholder]</div>
          {/* Placeholder Blocks */}
          <div className="placeholder-blocks">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="placeholder-item">Block {i + 1}</div>
            ))}
          </div>
        </div>
      ) : (
        <div className="future-tab">
          <h1>Countdown Timer</h1>
          <p>0 days 13 hours 53 minutes 15 seconds</p>
          <p>Estimated Time: 03.01.2025 06:35:11</p>
          <div className="countdown-details">
            <p>Countdown For Block: 2155136</p>
            <p>Current Height: #2145137</p>
            <p>Remaining Blocks: 9999</p>
            <p>Average Block Time: 5.0s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blocks;
