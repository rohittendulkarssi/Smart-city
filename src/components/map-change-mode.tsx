  
import React, { useRef, useState } from 'react';
import { IContextProvider } from "../uxp";
import { EventsEnum } from '../index'; 
import { WidgetWrapper } from "uxp/components";

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const MapChangeMode: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  const mapContainerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);  
    uxpContext.eventHandler?.(EventsEnum.SunPosition, { 'mode': isDarkMode? 'dark' : 'light' });
  };

  return ( 

      <div className={`map-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`slider ${isDarkMode ? 'active' : ''}`}>
        <span onClick={toggleDarkMode}></span>
      </div>
      </div>  

  );
};

export default MapChangeMode;


 


