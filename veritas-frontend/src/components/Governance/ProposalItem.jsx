import '../../theme/ProposalItem.css';
import ProgressBar from './ProgressBar';

const ProposalItem = ({ proposal }) => {
  return (
    <div className="proposal-item">
      <span className="proposal-id">#{proposal.id}</span>
      <span className="proposal-type">{proposal.type}</span>
      <ProgressBar progress={proposal.progress} />
      <span className={`status ${proposal.status}`}>{proposal.status.toUpperCase()}</span>
      <span className="date">{proposal.date}</span>
    </div>
  );
};

export default ProposalItem;
