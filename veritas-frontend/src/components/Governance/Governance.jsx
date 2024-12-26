import React, { useState, useEffect } from 'react';
import './theme/Governance.css';
import ProposalItem from './Governance/ProposalItem';
import TabMenu from './Governance/TabMenu';

const Governance = () => {
  const [tab, setTab] = useState('passed');
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch('/api/proposals') // Replace with actual API endpoint
      .then((response) => response.json())
      .then((data) => setProposals(data))
      .catch((error) => console.error('Error fetching proposals:', error));
  }, []);

  const filteredProposals = proposals.filter((proposal) => proposal.status === tab);

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
