
// If you want to show social icons, install react-icons:
// npm install react-icons


const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      {/* Logo / Brand */}
      <div className="flex items-center px-4 py-4 bg-gray-800">
        <img
          src="/src/assets/logo.png"
          alt="Soarchain Logo"
          className="w-8 h-8 mr-2"
        />
        <span className="text-xl font-bold">Soarchain</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <ul className="space-y-1">
          <li>
            <a
              href="#dashboard"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#governance"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Governance
            </a>
          </li>
          <li>
            <a
              href="#staking"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Staking
            </a>
          </li>
          <li>
            <a
              href="#blocks"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Blocks
            </a>
          </li>
          <li>
            <a
              href="#transactions"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Transactions
            </a>
          </li>
          <li>
            <a
              href="#uptime"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Uptime
            </a>
          </li>
          <li>
            <a
              href="#ibc"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              IBC
            </a>
          </li>
          <li>
            <a
              href="#supply"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Supply
            </a>
          </li>
          <li>
            <a
              href="#parameters"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Parameters
            </a>
          </li>
          <li>
            <a
              href="#consensus"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Consensus
            </a>
          </li>
          <li>
            <a
              href="#cosmwasm"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              CosmWasm
            </a>
          </li>
          <li>
            <a
              href="#statesync"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              State Sync
            </a>
          </li>
          <li>
            <a
              href="#widgets"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Widgets
            </a>
          </li>
        </ul>
      </nav>

      {/* Tools */}
      <div className="px-4 py-3 bg-gray-800">
        <h2 className="text-sm uppercase text-gray-400 tracking-wider mb-2">
          Tools
        </h2>
        <ul className="space-y-1">
          <li>
            <a
              href="#wallet-helper"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Wallet Helper
            </a>
          </li>
        </ul>
      </div>

      {/* Links */}
      <div className="px-4 py-3 bg-gray-900">
        <h2 className="text-sm uppercase text-gray-400 tracking-wider mb-2">
          Links
        </h2>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com/your-account"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            
          </a>
          <a
            href="https://discord.com/invite/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            
          </a>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;