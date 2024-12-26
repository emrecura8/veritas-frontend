import React, { useState, useEffect } from 'react';
import '../../theme/Governance.css';
import ProposalItem from './ProposalItem';
import TabMenu from './TabMenu';

const Governance = () => {
  const [tab, setTab] = useState('passed');
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, type: 'MsgSoftwareUpgrade', status: 'passed', progress: 100, date: '9 days ago' },
      { id: 2, type: 'MsgParameterChange', status: 'rejected', progress: 40, date: '15 days ago' },
      { id: 3, type: 'MsgCommunitySpend', status: 'voting', progress: 70, date: '2 days ago' }
    ];
    setProposals(data);
  }, []);

  const filteredProposals = proposals.filter((p) => p.status === tab);

  return (
    <div className="governance-container">
      <TabMenu tabs={['voting', 'passed', 'rejected']} activeTab={tab} onTabClick={setTab} />
      <div className="proposal-list">
        {filteredProposals.map((proposal) => (
          <ProposalItem key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
};

export default Governance;
