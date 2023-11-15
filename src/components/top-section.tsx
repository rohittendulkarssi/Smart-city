import React, { useState } from 'react'; 
import {WidgetWrapper} from "uxp/components";

import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';
 

interface IMapChangeMode {
  uxpContext: IContextProvider;
} 


const TopNavTabs: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;

// function TopNavTabs() {
  const [activeTab, setActiveTab] = useState('Waste');

  const handleTabClick = (label: string) => {

    setActiveTab(label === activeTab ? null : label);
    // setActiveTab(label);
    sendMessage(`You clicked on: ${label}`); 
    
    uxpContext.eventHandler?.( EventsEnum.Navigation, { page: 'map' }); 
      
  };

  function sendMessage(message: string) {
    alert(message);
  }

  // const tabs = [
  //   { label: 'Waste', className: 'nav-link waste', id: 'waste' },
  //   { label: 'Streetlight', className: 'nav-link streetlight', id: 'streetlight' },
  //   { label: 'Cctv', className: 'nav-link cctv', id: 'cctv' },
  //   { label: 'Water', className: 'nav-link water', id: 'water' },
  //   { label: 'Pollution', className: 'nav-link pollution', id: 'pollution' },
  //   { label: 'Fire', className: 'nav-link fire', id: 'fire' },
  // ];

  // const [activeTab, setActiveTab] = useState(null);

  // const handleTabClick = (label) => {
  //   setActiveTab(label === activeTab ? null : label);
  // };

  return (
    <WidgetWrapper className="smart-city_box">   
         
          <div className="top-nav-tabs">
            {/* <ul>
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
            </ul> */}


          <ul>
               
                {/* <li className='nav-link waste '> <a href="#"> <span></span> <label>Waste</label> </a> </li>
                <li className='nav-link streetlight'> <a href="#"> <span></span> <label>Streetlight</label> </a> </li>
                <li className='nav-link cctv'> <a href="#"> <span></span> <label>Cctv</label> </a> </li>
                <li className='nav-link water'> <a href="#"> <span></span> <label>Water</label> </a> </li>
                <li className='nav-link pollution'> <a href="#"> <span></span> <label>Pollution</label> </a> </li>
                <li className='nav-link fire'> <a href="#"> <span></span> <label>Fire</label> </a> </li> */}


<ul id="navList">
      <li className={`nav-link waste ${activeTab === 'Waste' ? 'active' : ''}`} onClick={() => handleTabClick('Waste')}>
        <a href="#">
          <span></span>
          <label>Waste</label>
        </a>
      </li>
      <li className={`nav-link streetlight ${activeTab === 'Streetlight' ? 'active' : ''}`} onClick={() => handleTabClick('Streetlight')}>
        <a href="#">
          <span></span>
          <label>Streetlight</label>
        </a>
      </li>
      <li className={`nav-link cctv ${activeTab === 'Cctv' ? 'active' : ''}`} onClick={() => handleTabClick('Cctv')}>
        <a href="#">
          <span></span>
          <label>Cctv</label>
        </a>
      </li>
      <li className={`nav-link water ${activeTab === 'Water' ? 'active' : ''}`} onClick={() => handleTabClick('Water')}>
        <a href="#">
          <span></span>
          <label>Water</label>
        </a>
      </li>
      <li className={`nav-link pollution ${activeTab === 'Pollution' ? 'active' : ''}`} onClick={() => handleTabClick('Pollution')}>
        <a href="#">
          <span></span>
          <label>Pollution</label>
        </a>
      </li>
      <li className={`nav-link fire ${activeTab === 'Fire' ? 'active' : ''}`} onClick={() => handleTabClick('Fire')}>
        <a href="#">
          <span></span>
          <label>Fire</label>
        </a>
      </li>
    </ul>
              
            </ul>


          </div>
          <div id="messageBox"></div>
      </WidgetWrapper>  
  );
}

export default TopNavTabs;
