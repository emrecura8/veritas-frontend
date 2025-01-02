import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Governance from './components/Governance/Governance';
import Blocks from './components/Blocks/Blocks'; 
import Staking from './components/Staking/Staking'; 
import Transactions from './components/Transactions/Transactions';
import Uptime from './components/Uptime/Uptime';
import IBC from './components/IBC/IBC';
import Supply from './components/Supply/Supply';
import Parameters from './components/Parameters/Parameters';
import Consensus from './components/Consensus/Consensus';
import Cosmwasm from './components/Cosmwasm/Cosmwasm';
import Widgets from './components/Widgets/Widgets';
import StateSync from './components/State Sync/StateSync';
import Dashboard  from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      {/* Flex container for layout */}
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', backgroundColor: '#111', color: 'white' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/uptime" element={<Uptime />} />
            <Route path="/ibc" element={<IBC />} />
            <Route path="/supply" element={<Supply />} />
            <Route path="/parameters" element={<Parameters />} />
            <Route path="/consensus" element={<Consensus />} />
            <Route path="/cosmwasm" element={<Cosmwasm />} />
            <Route path="/statesync" element={<StateSync />} />
            <Route path="/widgets" element={<Widgets />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
