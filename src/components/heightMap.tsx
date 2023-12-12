// import React, { useState } from 'react';



// import { IContextProvider } from '../uxp';
// import { EventsEnum } from '../index';

// interface IMapChangeMode {
//   uxpContext: IContextProvider;
// }

  
//   const HeightMap: React.FunctionComponent<IMapChangeMode> = (props) => { 
    
//     const { uxpContext } = props;
  
//     const [isToggled, setToggled] = useState(false);
    
//     const handleButtonClick = () => { 
//         setToggled(!isToggled); 
//         uxpContext.eventHandler?.( EventsEnum.HeightMap, { showHeightMap: true } ); 
    
//         if (!isToggled) {
//             console.log('Button is ON! Event triggered.'); 
//         } else {
//             console.log('Button is OFF! Event triggered.'); 
//         }
//     };

//     return (
//         <div>
//         <button onClick={handleButtonClick}>
//             {isToggled ? 'OFF' : 'ON'}
//         </button>
//         </div>
//     );
// } 

// export default HeightMap;



import React, { useState } from 'react'; 

import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const HeightMap: React.FunctionComponent<IMapChangeMode> = (props) => { 

  const { uxpContext } = props;
  const [isToggled, setToggled] = useState(false);

   

  const handleButtonClick = () => {
    setToggled((prevState) => {
        console.log('Previous state:', prevState); 
      const nextState = !prevState; 
        console.log('Next state:', nextState); 
      uxpContext.eventHandler?.(EventsEnum.HeightMap, { showHeightMap: nextState });
      return nextState;
    });
  };

  return (
    <div className={`toggle-container ${isToggled ? 'on' : 'off'}`}>
      <button onClick={handleButtonClick} className="toggle-button">
        <div className={`slider-toggle ${isToggled ? 'on' : 'off'}`} />
      </button>

      <label className="toggle-label">{isToggled ? 'On' : 'Off'}</label>
    </div>
  );
}

export default HeightMap;
