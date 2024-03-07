import React, { useState, useEffect } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp'; 

interface IMapChangeMode {
  uxpContext: IContextProvider;
}
interface ITab {
 
} 

const TopHeader: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
 
  
  return (
    <WidgetWrapper className="smart-city_box empty-box"> 

        <div className="header-content">
                <div className='logo'></div>
                 <h2>Madina Smart City</h2>   
                
        </div> 

    </WidgetWrapper> 
  );
};
export default TopHeader; 







// import React, { useState, useEffect } from 'react';
// import { WidgetWrapper } from 'uxp/components';
// import { IContextProvider } from '../uxp'; 

// interface IMapChangeMode {
//   uxpContext: IContextProvider;
// }
// interface ITab {
 
// } 

// const TopHeader: React.FunctionComponent<IMapChangeMode> = (props) => {
//   const { uxpContext } = props;

//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const [logoClass, setLogoClass] = useState('');
//   const [displayText, setDisplayText] = useState('');

 
//   useEffect(() => {
//     const setStylesByResolution = () => {
//       const width = window.innerWidth;
 
//       if (width >= 3440) {
//         setLogoClass('header-content-large');
//       } else if (width >= 1920) {
//         setLogoClass('header-content-small');
//       } else {
//         setLogoClass('header-content-large');
//       }
 
//       if (width >= 3440) {
//         setDisplayText('Madina Smart City');
//       } else if (width <= 1920) {
//         setDisplayText('Smart City Digital Twin');
//       } else {
//         setDisplayText('Madina Smart City');
//       }

//       setScreenWidth(width);
//     };

//     window.addEventListener('resize', setStylesByResolution);

//     setStylesByResolution();

//     return () => {
//       window.removeEventListener('resize', setStylesByResolution);
//     };
//   }, []);
  
//   return (
//     <WidgetWrapper className="smart-city_box empty-box"> 

//         <div className={`header-content ${logoClass}`}>
//                 <div className='logo'></div>
//                 {/* <h2>Madina Smart City</h2>   */}
//                 <h2>{ displayText}</h2>   
                
//         </div> 

//     </WidgetWrapper> 
//   );
// };
// export default TopHeader; 