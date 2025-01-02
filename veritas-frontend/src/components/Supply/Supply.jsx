import React from 'react';
import '../../theme/Supply.css';

const Supply = () => {
  // Placeholder data
  const supplyData = [
    { token: 'usoar', amount: '7000000000' },
  ];

  return (
    <div className="supply-container">
      {/* Header */}
      <div className="supply-header">
        <h2>Token Supply</h2>
      </div>

      {/* Table */}
      <table className="supply-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {supplyData.map((item, index) => (
            <tr key={index}>
              <td>{item.token}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Supply;
