import "../../theme/Dashboard.css"

import {
  ChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  AcademicCapIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'; // Import Heroicons

const Dashboard = () => {
  // Top 6 Stats Data
  const stats = [
    { label: 'Height', value: '5916051', icon: <ChartBarIcon className="card-icon" /> },
    { label: 'Validators', value: '1', icon: <UsersIcon className="card-icon" /> },
    { label: 'Supply', value: '70,000,000,000', icon: <CurrencyDollarIcon className="card-icon" /> },
    { label: 'Bonded Tokens', value: '1,000,000', icon: <LockClosedIcon className="card-icon" /> },
    { label: 'Community Pool', value: '63.1k utsoar', icon: <AcademicCapIcon className="card-icon" /> },
    { label: 'Car Count', value: '15862', icon: <TruckIcon className="card-icon" /> },
  ];

  // Bottom 4 Wallet Data
  const walletData = [
    { label: 'Balance', value: '0 utsoar', sub: '$0' },
    { label: 'Staking', value: '0 utsoar', sub: '$0' },
    { label: 'Reward', value: '0 utsoar', sub: '$0' },
    { label: 'Unbonding', value: '0 utsoar', sub: '$0' },
  ];

  return (
    <div className="dashboard-container">
      {/* Title */}
      <h1 className="dashboard-title">Dashboard</h1>

      {/* Top 6 Stats */}
      <div className="section">
        <div className="grid-container-top">
          {stats.map((item, index) => (
            <div key={index} className="card">
              {item.icon}
              <h2 className="card-label">{item.label}</h2>
              <p className="card-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Proposals */}
      <div className="section">
        <h2 className="section-title">Active Proposals</h2>
        <div className="proposals-content">No active proposals</div>
      </div>

      {/* Not Connected */}
      <div className="section">
        <h2 className="section-title">Not Connected</h2>
        <div className="grid-container-bottom">
          {walletData.map((item, index) => (
            <div key={index} className="card">
              <h3 className="card-label">{item.label}</h3>
              <p className="card-value">{item.value}</p>
              <p className="card-subtext">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="button button-swap">SWAP</button>
        <button className="button button-send">SEND</button>
        <button className="button button-delegate">DELEGATE</button>
      </div>
    </div>
  );
};

export default Dashboard;