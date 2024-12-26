import '../theme/Sidebar.css'

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
            <a
              href="#dashboard"
              className="dashboard"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#governance"
              className="governance"
            >
              Governance
            </a>
          </li>
          <li>
            <a
              href="#staking"
              className="staking"
            >
              Staking
            </a>
          </li>
          <li>
            <a
              href="#blocks"
              className="blocks"
            >
              Blocks
            </a>
          </li>
          <li>
            <a
              href="#transactions"
              className="transactions"
            >
              Transactions
            </a>
          </li>
          <li>
            <a
              href="#uptime"
              className="uptime"
            >
              Uptime
            </a>
          </li>
          <li>
            <a
              href="#ibc"
              className="ibc"
            >
              IBC
            </a>
          </li>
          <li>
            <a
              href="#supply"
              className="supply"
            >
              Supply
            </a>
          </li>
          <li>
            <a
              href="#parameters"
              className="parameters"
            >
              Parameters
            </a>
          </li>
          <li>
            <a
              href="#consensus"
              className="consensus"
            >
              Consensus
            </a>
          </li>
          <li>
            <a
              href="#cosmwasm"
              className="cosmwasm"
            >
              CosmWasm
            </a>
          </li>
          <li>
            <a
              href="#statesync"
              className="statesync"
            >
              State Sync
            </a>
          </li>
          <li>
            <a
              href="#widgets"
              className="widgets"
            >
              Widgets
            </a>
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
            <a
              href="#wallet-helper"
              className="bottomlist"
            >
              Wallet Helper
            </a>
          </li>
        </ul>
      </div>

      {/* Links */}
      <div className="bottom">
        <h2 className="bottomtext">
          Links
        </h2>
        <ul className="bottomlist">
          <li>
            <a
              href="#wallet-helper"
              className="bottomlist"
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href="#wallet-helper"
              className="bottomlist"
            >
              discord
            </a>
          </li>
          <li>
            <a
              href="#wallet-helper"
              className="bottomlist"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;