import './Tabs.scss';

import { useState } from 'react';
import styled from 'styled-components';

const TabContent = styled.div`
  width: 100%;
`;

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs">
      <ul className="nav">
        {props.tabs.map((tab, index) => (
          <li
            key={tab.id}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTab(index)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className="out">
        {props.tabs.map((tab, index) => {
          return (
            <TabContent
              key={tab.id}
              style={activeTab === index ? {} : { display: 'none' }}
            >
              {tab.tab}
            </TabContent>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
