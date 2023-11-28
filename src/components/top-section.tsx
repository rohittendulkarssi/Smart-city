import React, { useState } from 'react';
import { WidgetWrapper } from 'uxp/components';

import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';
 

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const TopNavTabs: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  const [activeTab, setActiveTab] = useState('Streetlight');

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    // sendMessage(`You clicked on: ${label}`);
 
    const pageMapping: { [key: string]: string } = {
      Waste: 'waste',
      Streetlight: 'map',
      Cctv: 'cctv',
      Water: 'water',
      Pollution: 'pollution',
      Fire: 'fire',
    };

    const page = pageMapping[label];

    if (page) {
      uxpContext.eventHandler?.(EventsEnum.Navigation, { page });
    }
  };

  function sendMessage(message: string) {
    alert(message);
  }

  const tabs = [
    // { label: 'Waste', className: 'waste', id: 'waste' },
    { label: 'Streetlight', className: 'streetlight', id: 'streetlight' },
    { label: 'CCTV', className: 'cctv', id: 'cctv' },
    // { label: 'Water', className: 'water', id: 'water' },
    // { label: 'Pollution', className: 'pollution', id: 'pollution' },
    // { label: 'Fire', className: 'fire', id: 'fire' },
  ];

  return (
    <WidgetWrapper className="smart-city_box">
      <div className="top-nav-tabs">
        <ul id="navList">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`nav-link ${tab.className} ${activeTab === tab.label ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.label)}
            >
              <a href="javascript:void(0);" onClick={(e) => e.preventDefault()}>
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
};

export default TopNavTabs;





// import React, { useState } from 'react'; 
// import {WidgetWrapper} from "uxp/components";

// import { IContextProvider } from '../uxp';
// import { EventsEnum } from '../index';
 

// interface IMapChangeMode {
//   uxpContext: IContextProvider;
// } 


// const TopNavTabs: React.FunctionComponent<IMapChangeMode> = (props) => {
//   const { uxpContext } = props;
 
//   const [activeTab, setActiveTab] = useState('Waste');

//   const handleTabClick = (label: string) => {

//     setActiveTab(label === activeTab ? null : label); 
//     sendMessage(`You clicked on: ${label}`);  
//     uxpContext.eventHandler?.( EventsEnum.Navigation, { page: 'map' }); 
      
//   };

//   function sendMessage(message: string) {
//     alert(message);
//   }

//   const tabs = [
//     { label: 'Waste', className: 'nav-link waste', id: 'waste' },
//     { label: 'Streetlight', className: 'nav-link streetlight', id: 'streetlight' },
//     { label: 'Cctv', className: 'nav-link cctv', id: 'cctv' },
//     { label: 'Water', className: 'nav-link water', id: 'water' },
//     { label: 'Pollution', className: 'nav-link pollution', id: 'pollution' },
//     { label: 'Fire', className: 'nav-link fire', id: 'fire' },
//   ]; 

//   return (
//     <WidgetWrapper className="smart-city_box">   
         
//           <div className="top-nav-tabs">
//             <ul>
//               {tabs.map((tab) => (
//                 <li
//                   key={tab.id}
//                   className={`${tab.className} ${activeTab === tab.label ? 'active' : ''}`}
//                   onClick={() => handleTabClick(tab.label)}
//                 >
//                   <a href="javascript:void(0);">
//                     <span></span>
//                     <label>{tab.label}</label>
//                   </a>
//                 </li>
//               ))}
//             </ul>     
//           </div>
//           <div id="messageBox"></div>
//       </WidgetWrapper>  
//   );
// }

// export default TopNavTabs;
