import React from 'react';
import '../../theme/StateSync.css';

const StateSync = () => {
  return (
    <div className="state-sync-container">
      <h1 className="state-sync-header">What's State Sync?</h1>
      <p className="state-sync-description">
        The Tendermint Core 0.34 release includes support for state sync, which allows a new node to join a network by fetching a snapshot of the application state at a recent height instead of fetching and replaying all historical blocks. This can reduce the time needed to sync with the network from days to minutes. Click <a href="#">here</a> for more information.
      </p>

      <h2 className="state-sync-subheader">Starting New Node From State Sync</h2>
      <ol>
        <li>
          <p>Install Binary (soarchain Version: v0.2.14)</p>
          <p>We need to install the binary first and make sure that the version is the one currently in use on mainnet.</p>
        </li>
        <li>
          <p>Enable State Sync</p>
          <p>
            We can configure Tendermint to use state sync in <code>$DAEMON_HOME/config/config.toml</code>.
          </p>
        </li>
      </ol>

      <div className="code-box">
        <p>&gt; [state-sync]</p>
        <p>&gt; enable = <span className="key">true</span></p>
        <p>&gt; rpc_servers = <span className="value">"https://rpc1.mainnet.soarchain.com"</span></p>
        <p>&gt; trust_height = <span className="value">2144000</span></p>
        <p>&gt; trust_hash = <span className="value">"61A0EC..."</span></p>
        <p>&gt; <span className="comment"># 2/3 of unbonding time</span></p>
        <p>&gt; trust_period = <span className="value">"168h"</span></p>
      </div>

      <h2 className="state-sync-subheader">Enable Snapshot For State Sync</h2>
      <p>To make state sync work, we can enable snapshot in <code>$DAEMON_HOME/config/app.toml</code>.</p>
      <div className="code-box">
        <p>&gt; [state-sync]</p>
        <p>&gt; <span className="comment"># snapshot-interval specifies the block interval at which snapshots are taken</span></p>
        <p>&gt; snapshot-interval = <span className="value">1000</span></p>
        <p>&gt; <span className="comment"># snapshot-keep-recent specifies the number of recent snapshots to keep</span></p>
        <p>&gt; snapshot-keep-recent = <span className="value">2</span></p>
      </div>

      <div className="tip-box">
        <p>
          <strong>Tips</strong>
        </p>
        <ul>
          <li>
            This tool is useful for validators to monitor who is onboard during an upgrade.
          </li>
          <li>
            If you want to change the default RPC endpoint, make sure that <code>https</code> and <code>CORS</code> are enabled on your server.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StateSync;
