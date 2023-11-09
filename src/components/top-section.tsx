import React, { useState } from 'react'; 
import {WidgetWrapper} from "uxp/components";
 

function TopNavTabs() {
  const [activeTab, setActiveTab] = useState('Waste');

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    sendMessage(`You clicked on: ${label}`);
  };

  function sendMessage(message: string) {
    alert(message);
  }

  const tabs = [
    { label: 'Waste', className: 'nav-link waste', id: 'waste' },
    { label: 'Streetlight', className: 'nav-link streetlight', id: 'streetlight' },
    { label: 'Cctv', className: 'nav-link cctv', id: 'cctv' },
    { label: 'Water', className: 'nav-link water', id: 'water' },
    { label: 'Pollution', className: 'nav-link pollution', id: 'pollution' },
    { label: 'Fire', className: 'nav-link fire', id: 'fire' },
  ];

  return (
    <WidgetWrapper className="smart-city_box">   
         
          <div className="top-nav-tabs">
            <ul>
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`${tab.className} ${activeTab === tab.label ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.label)}
                >
                  <a href="#">
                    <span></span>
                    <label>{tab.label}</label>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div id="messageBox"></div>
      </WidgetWrapper>  
  );
}

export default TopNavTabs;
