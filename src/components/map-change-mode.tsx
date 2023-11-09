import React, { useEffect, useRef, useState } from 'react';
 
const MapChangeMode = () => {
  const mapContainerRef = useRef(null); 
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
 