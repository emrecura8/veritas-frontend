import './theme/TabMenu.css';

const TabMenu = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="tab-menu">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => onTabClick(tab)}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default TabMenu;
