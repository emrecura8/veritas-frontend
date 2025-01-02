import React from 'react';
import '../../theme/Cosmwasm.css'; // Import CSS for styling

const Cosmwasm = () => {
  return (
    <div className="cosmwasm-container">
      {/* Header */}
      <div className="cosmwasm-header">
        <h2>Cosmos Wasm Smart Contracts</h2>
      </div>

      {/* Input Section */}
      <div className="input-group">
        <select className="query-dropdown">
          <option>Contract</option>
          <option>Code ID</option>
          <option>Creator</option>
        </select>
        <input type="text" placeholder="address" />
        <button className="query-button">QUERY</button>
        <select className="query-dropdown">
          <option>History</option>
          <option>State</option>
        </select>
      </div>

      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Code Id</th>
            <th>Code Hash</th>
            <th>Creator</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      {/* Upload Button */}
      <div className="upload-section">
        <button className="upload-button">UPLOAD SMART CONTRACT</button>
      </div>
    </div>
  );
};

export default Cosmwasm;
