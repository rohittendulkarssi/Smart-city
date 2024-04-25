
import React, { useEffect, useState } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';
interface IMapChangeMode {
  uxpContext: IContextProvider;
  page?:string,
  objectId?:string
}

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

interface ITab {
 id:string,
 label: string,
 className: string
}
const TopNavTabs: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  const [activeTab, setActiveTab] = useState('Streetlight');
 const tabs: { [key: string]: ITab } = { 
      Waste: { label: 'Waste', className: 'waste', id: 'waste' },
      Streetlight:  { label: 'Streetlight', className: 'streetlight', id: 'streetlight' },
      CCTV: { label: 'CCTV', className: 'cctv', id: 'cctv' }, 
      Water: { label: 'Water', className: 'water', id: 'water' },
      Pollution: { label: 'Pollution', className: 'pollution', id: 'pollution' },
      Fire: { label: 'Fire', className: 'fire', id: 'fire' },   
    };


    useEffect(() => {
      if(!!props.page) setActiveTab(props.page)
    },[props.page])
   
    const handleTabClick = (label: string) => {
      console.log('Tab clicked:', label); // Add this line to check if the function is triggered
      setActiveTab(label);
      const page = tabs[label];
      if (page) { 
        // Remove 'active' class from all tabs
        document.querySelectorAll('.nav-link').forEach((element) => {
          element.classList.remove('active');
        }); 
        
        // Add 'active' class to the clicked tab
        const clickedTab = document.querySelector(`.nav-link.${label}`);
        clickedTab?.classList.add('active');
    
        uxpContext.eventHandler?.(EventsEnum.Navigation, { page: page.id });
    
        console.log('Hello',page);
      }
    };
    
    
    
  return (
    <WidgetWrapper className="smart-city_box">
      <div className="top-nav-tabs">
        <ul id="navList">
          { Object.values(tabs).map((tab) => (
            <li
              key={tab.id} 
              onClick={() => handleTabClick(tab.label)}
              className={`nav-link ${tab.className}`}
            >
              <a href="javascript:void(0);" onClick={(e) => e.preventDefault()}>
                <span></span>
                <label>{tab.label}</label>
              </a>
            </li> 
            
          ))}
        </ul>

         
      </div>
      
    </WidgetWrapper>
  );
};
export default TopNavTabs; 

 





















// import React, { useEffect, useState } from 'react';
// import { WidgetWrapper } from 'uxp/components';
// import { IContextProvider } from '../uxp';
// import { EventsEnum } from '../index';
// interface IMapChangeMode {
//   uxpContext: IContextProvider;
//   page?:string,
//   objectId?:string
// }

// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

// interface ITab {
//  id:string,
//  label: string,
//  className: string
// }
// const TopNavTabs: React.FunctionComponent<IMapChangeMode> = (props) => {
//   const { uxpContext } = props;
//   const [activeTab, setActiveTab] = useState('Streetlight');
//  const tabs: { [key: string]: ITab } = { 
//       Waste: { label: 'Waste', className: 'waste', id: 'waste' },
//       Streetlight:  { label: 'Streetlight', className: 'streetlight', id: 'streetlight' },
//       CCTV: { label: 'CCTV', className: 'cctv', id: 'cctv' }, 
//       Water: { label: 'Water', className: 'water', id: 'water' },
//       Pollution: { label: 'Pollution', className: 'pollution', id: 'pollution' },
//       Fire: { label: 'Fire', className: 'fire', id: 'fire' },  
//       //Emission: { label: 'Emission', className: 'emission', id: 'emission' },
//     };


//     useEffect(() => {
//       if(!!props.page) setActiveTab(props.page)
//     },[props.page])
   
//     const handleTabClick = (label: string) => {
//       setActiveTab(label);
//       const page = tabs[label];
//       // if (page) {
//       //   uxpContext.eventHandler?.(EventsEnum.Navigation, { page: page.id });
//       // }
 
//     if (page) { 
//       document.querySelectorAll('.nav-link').forEach((element) => {
//         element.classList.remove('active');
//       }); 
       
//       document.querySelector(`.nav-link.${label}`)?.classList.add('active');  
//       setActiveTab(label);  
      
//       uxpContext.eventHandler?.(EventsEnum.Navigation, { page: page.id });

//       console.log('Hello',page);
//     }
//     };
    
//   return (
//     <WidgetWrapper className="smart-city_box">
//       <div className="top-nav-tabs">
//         <ul id="navList">
//           { Object.values(tabs).map((tab) => (
//             <li
//               key={tab.id} 
//               onClick={() => handleTabClick(tab.label)}
//               className={`nav-link ${tab.className} ${activeTab === tab.label ? 'active' : ''}`}
//             >
//               <a href="javascript:void(0);" onClick={(e) => e.preventDefault()}>
//                 <span></span>
//                 <label>{tab.label}</label>
//               </a>
//             </li>

//             //   <li  key={tab.id} onClick={() => handleTabClick(tab.label)}
//             //   className={`nav-link ${tab.className} ${activeTab === tab.label ? 'active' : ''}`}
//             // >
//             //   <a href="javascript:void(0);" onClick={(e) => e.preventDefault()}>
//             //     <span><FontAwesomeIcon icon="fa-solid fa-traffic-light" /></span>
//             //     <label>{tab.label}</label>
//             //   </a>
//             // </li>

            
//           ))}
//         </ul>

         
//       </div>
      
//     </WidgetWrapper>
//   );
// };
// export default TopNavTabs; 

 


