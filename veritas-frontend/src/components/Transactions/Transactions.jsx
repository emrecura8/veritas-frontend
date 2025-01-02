import React, { useState } from 'react';
import '../../theme/Transactions.css'; // Import the CSS

const Transactions = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="transactions-container">
      {/* Header */}
      <div className="transactions-header">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => handleTabChange('recent')}
          >
            RECENT
          </button>
          <button
            className={`tab-button ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => handleTabChange('search')}
          >
            SEARCH
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="transactions-content">
        {activeTab === 'recent' ? (
          // Placeholder table for recent transactions
          <div className="transactions-table">
            <table>
              <thead>
                <tr>
                  <th>Height</th>
                  <th>Hash</th>
                  <th>Messages</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2145471</td>
                  <td>9125D42E45BD6113DEC3D4...</td>
                  <td>RunnerChallenge×10</td>
                  <td>0 SOAR</td>
                </tr>
                <tr>
                  <td>2145433</td>
                  <td>BBC31E97B95B80B582E2F3...</td>
                  <td>RunnerChallenge×10</td>
                  <td>0 SOAR</td>
                </tr>
                {/* Add more rows dynamically later */}
              </tbody>
            </table>
          </div>
        ) : (
          // Placeholder for search box
          <div className="search-box">
            <input type="text" placeholder="Search by Tx Hash" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
