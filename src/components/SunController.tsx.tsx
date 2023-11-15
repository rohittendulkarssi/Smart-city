  
// import React, { useRef, useState } from 'react';
// import { IContextProvider } from "../uxp";
// import { EventsEnum } from '../index'; 
// import { WidgetWrapper } from "uxp/components";

// interface IMapChangeMode {
//   uxpContext: IContextProvider;
// }

// const SunController: React.FunctionComponent<IMapChangeMode> = (props) => {
//   const { uxpContext } = props;
//   const mapContainerRef = useRef(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);  
//     uxpContext.eventHandler?.(EventsEnum.SunPosition, { 'mode': isDarkMode? 'dark' : 'light' });
//   };

//   return ( 

//       <div className={`map-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <div className={`slider ${isDarkMode ? 'active' : ''}`}>
//         <span onClick={toggleDarkMode}></span>
//       </div>
//       </div>  

//   );
// };

// export default SunController;




import React, { useRef, useState, ChangeEvent } from 'react';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}




  

const SunController: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  const mapContainerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
     uxpContext.eventHandler?.(EventsEnum.SunPosition, { mode: 'time', time: newTime }); 
  };

  return (
    
    <div className='timer-widget'>

        <div className='timer-slider'>

            <input 
              className='timer-range'
              type="range"
              min={0}
              max={24}
              step={1}
              value={currentTime}
                onChange={handleTimeChange} 
              //onClick={() => uxpContext.eventHandler?.(EventsEnum.Zoom, { 'mode': '+' })}

              //onClick={() => uxpContext.eventHandler?.(EventsEnum.Zoom, { 'mode': '+' })}
              onClick={() =>uxpContext.eventHandler?.( EventsEnum.SunPosition, { time: '12:15' })}

                
            />
             <span>{currentTime} hours</span> 

        </div> 
      
    </div>

  );
};

export default SunController;


 




