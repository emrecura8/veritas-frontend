import React, { useState } from 'react';
import '../../theme/Widgets.css';

const Widgets = () => {
  const [endpoint, setEndpoint] = useState('https://rpc1.mainnet.soarchain.com/api');

  const handleEndpointChange = (e) => {
    setEndpoint(e.target.value);
  };

  return (
    <div className="widgets-container">
      <h1 className="widgets-header">Initial Setting</h1>

      {/* Endpoint Selector */}
      <div className="endpoint-selector">
        <label>Endpoint:</label>
        <select
          value={endpoint}
          onChange={handleEndpointChange}
          className="endpoint-dropdown"
        >
          <option value="https://rpc1.mainnet.soarchain.com/api">https://rpc1.mainnet.soarchain.com/api</option>
          <option value="https://rpc2.mainnet.soarchain.com/api">https://rpc2.mainnet.soarchain.com/api</option>
        </select>
      </div>

      {/* Code Block */}
      <div className="widgets-section">
        <h3>Import global script</h3>
        <div className="widgets-code">
          &lt;script type="module" src="<span className="value">https://unpkg.com/ping-widget@latest/dist/ping-widget.js</span>"&gt;&lt;/script&gt;
        </div>
      </div>

      <h2 className="widgets-header">Widgets</h2>

      {/* Connect Wallet Widget */}
      <div className="widgets-section">
        <h3>1. Connect Wallet</h3>
        <div className="widgets-code">
          <span className="comment">&lt;!-- This widget is optional. --&gt;</span>
          <br />
          &lt;<span className="tag">ping-connect-wallet</span> 
          <span className="attr"> chain-id</span>=<span className="value">"soarchain-1"</span> 
          <span className="attr"> hd-path</span>=<span className="value">"m/44'/118'/0'/0/0"</span>/&gt;
        </div>
      </div>

      {/* Osmosis Convert Widget */}
      <div className="widgets-section">
        <h3>2. Osmosis Convert</h3>
        <div className="widgets-code">
          &lt;<span className="tag">ping-token-convert</span> 
          <span className="attr"> chain-name</span>=<span className="value">"soarchain"</span> 
          <span className="attr"> endpoint</span>=<span className="value">"{endpoint}"</span> 
          <span className="attr"> hd-path</span>=<span className="value">"m/44'/118'/0'/0/0"</span>/&gt;
          <br />
          &lt;<span className="tag">label</span> 
          <span className="attr"> for</span>=<span className="value">"PingTokenConvert"</span> 
          <span className="attr"> class</span>=<span className="value">"btn btn-sm"</span>&gt;
          Buy SOARCHAIN
          &lt;/<span className="tag">label</span>&gt;
        </div>
      </div>
    </div>
  );
};

export default Widgets;
