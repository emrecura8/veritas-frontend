import React from 'react';
import '../../theme/Parameters.css';

const Parameters = () => {
  // Placeholder values for dynamic updates later
  const stakingParams = {
    unbondingTime: '21 days',
    maxValidators: 100,
    maxEntries: 7,
    historicalEntries: 10000,
    bondDenom: 'usoar',
  };

  const governanceParams = {
    votingPeriod: '10 mins',
    minDeposit: '1,000,000',
    maxDepositPeriod: '2 days',
    quorum: '33.4%',
    threshold: '50%',
    vetoThreshold: '33.4%',
  };

  const distributionParams = {
    communityTax: '2%',
    baseProposerReward: '0',
    bonusProposerReward: '0',
    withdrawAddrEnabled: 'true',
  };

  const slashingParams = {
    signedBlocksWindow: 100,
    minSignedPerWindow: '50%',
    downtimeJailDuration: '10 mins',
    slashFractionDoubleSign: '5%',
    slashFractionDowntime: '1%',
  };

  return (
    <div className="parameters-container">
      {/* Staking Parameters */}
      <div className="parameters-section">
        <h2 className="parameters-header">Staking Parameters</h2>
        <div className="parameter-item">
          {Object.entries(stakingParams).map(([key, value]) => (
            <div className="parameter-box" key={key}>
              <div className="parameter-title">{key.replace(/([A-Z])/g, ' $1')}</div>
              <div className="parameter-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Governance Parameters */}
      <div className="parameters-section">
        <h2 className="parameters-header">Governance Parameters</h2>
        <div className="parameter-item">
          {Object.entries(governanceParams).map(([key, value]) => (
            <div className="parameter-box" key={key}>
              <div className="parameter-title">{key.replace(/([A-Z])/g, ' $1')}</div>
              <div className="parameter-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution Parameters */}
      <div className="parameters-section">
        <h2 className="parameters-header">Distribution Parameters</h2>
        <div className="parameter-item">
          {Object.entries(distributionParams).map(([key, value]) => (
            <div className="parameter-box" key={key}>
              <div className="parameter-title">{key.replace(/([A-Z])/g, ' $1')}</div>
              <div className="parameter-value">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slashing Parameters */}
      <div className="parameters-section">
        <h2 className="parameters-header">Slashing Parameters</h2>
        <div className="parameter-item">
          {Object.entries(slashingParams).map(([key, value]) => (
            <div className="parameter-box" key={key}>
              <div className="parameter-title">{key.replace(/([A-Z])/g, ' $1')}</div>
              <div className="parameter-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parameters;
