import { Link } from 'react-router-dom';
import '../theme/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo / Brand */}
      <div className="logo">
        <img
          src="/src/assets/react.svg"
          alt="Veritas Logo"
          className="w-8 h-8 mr-2"
        />
        <span className="navheader">Veritas</span>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <ul className="uppernav">
          <li>
            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/governance" className="block px-3 py-2 rounded hover:bg-gray-700">
              Governance
            </Link>
          </li>
          <li>
            <Link to="/staking" className="block px-3 py-2 rounded hover:bg-gray-700">
              Staking
            </Link>
          </li>
          <li>
            <Link to="/blocks" className="block px-3 py-2 rounded hover:bg-gray-700">
              Blocks
            </Link>
          </li>
          <li>
            <Link to="/transactions" className="block px-3 py-2 rounded hover:bg-gray-700">
              Transactions
            </Link>
          </li>
          <li>
            <Link to="/uptime" className="block px-3 py-2 rounded hover:bg-gray-700">
              Uptime
            </Link>
          </li>
          <li>
            <Link to="/ibc" className="block px-3 py-2 rounded hover:bg-gray-700">
              IBC
            </Link>
          </li>
          <li>
            <Link to="/supply" className="block px-3 py-2 rounded hover:bg-gray-700">
              Supply
            </Link>
          </li>
          <li>
            <Link to="/parameters" className="block px-3 py-2 rounded hover:bg-gray-700">
              Parameters
            </Link>
          </li>
          <li>
            <Link to="/consensus" className="block px-3 py-2 rounded hover:bg-gray-700">
              Consensus
            </Link>
          </li>
          <li>
            <Link to="/cosmwasm" className="block px-3 py-2 rounded hover:bg-gray-700">
              CosmWasm
            </Link>
          </li>
          <li>
            <Link to="/statesync" className="block px-3 py-2 rounded hover:bg-gray-700">
              State Sync
            </Link>
          </li>
          <li>
            <Link to="/widgets" className="block px-3 py-2 rounded hover:bg-gray-700">
              Widgets
            </Link>
          </li>
        </ul>
      </nav>

      {/* Tools */}
      <div className="bottom">
        <h2 className="bottomtext">
          Tools
        </h2>
        <ul className="bottomlist">
          <li>
            <Link to="/wallet-helper" className="block px-3 py-2 rounded hover:bg-gray-700">
              Wallet Helper
            </Link>
          </li>
        </ul>
      </div>

      {/* Links */}
      <div className="bottom">
        <h2 className="bottomtext">
          Links
        </h2>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com/your-account"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://discord.com/invite/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            Discord
          </a>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
