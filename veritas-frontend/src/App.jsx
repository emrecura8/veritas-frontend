import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Governance from './components/Governance/Governance'; // Import Governance component

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<h1 className="text-2xl font-bold">Dashboard</h1>} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/staking" element={<h1 className="text-2xl font-bold">Staking</h1>} />
            <Route path="/blocks" element={<h1 className="text-2xl font-bold">Blocks</h1>} />
            <Route path="/transactions" element={<h1 className="text-2xl font-bold">Transactions</h1>} />
            <Route path="/uptime" element={<h1 className="text-2xl font-bold">Uptime</h1>} />
            <Route path="/ibc" element={<h1 className="text-2xl font-bold">IBC</h1>} />
            <Route path="/supply" element={<h1 className="text-2xl font-bold">Supply</h1>} />
            <Route path="/parameters" element={<h1 className="text-2xl font-bold">Parameters</h1>} />
            <Route path="/consensus" element={<h1 className="text-2xl font-bold">Consensus</h1>} />
            <Route path="/cosmwasm" element={<h1 className="text-2xl font-bold">CosmWasm</h1>} />
            <Route path="/statesync" element={<h1 className="text-2xl font-bold">State Sync</h1>} />
            <Route path="/widgets" element={<h1 className="text-2xl font-bold">Widgets</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
