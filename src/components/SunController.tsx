import React, { useState, ChangeEvent, useEffect } from 'react';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const SunController: React.FunctionComponent<IMapChangeMode> = (props) => {
  const [currentHour, setCurrentHour] = useState(12); // 12 pm in hours
  const [showTooltip, setShowTooltip] = useState(false);

  const { uxpContext } = props;

 useEffect(() => { 
    const now = new Date();
    const initialHour = now.getHours();
    setCurrentHour(initialHour);
  }, []); 


  const changeFormatTime = (value: number) => {
    const continuousHours = value % 24;  
    const formattedHours = String(continuousHours).padStart(2, '0');
    const minutes = Math.round((value % 1) * 60);
    const formattedMinutes = String(minutes).padStart(2, '0');  
    return `${formattedHours}:${formattedMinutes}`;
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newHour = parseFloat(event.target.value);
    setCurrentHour(newHour); 
    console.log(`Current Time: ${changeFormatTime(newHour)}`);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const calculateGradientPercentage = () => {
    const start = 6;  
    const end = 29;  

    return ((currentHour - start) / (end - start)) * 100;
  };

  return (
    <div className='timer-widget'>
      <div className='timer-slider' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <input
          className='timer-range'
          type="range"
          min={6}
          max={29}
          step={1}
          value={currentHour}
          onChange={handleTimeChange}
          onClick={() => uxpContext.eventHandler?.(EventsEnum.SunPosition, { time: changeFormatTime(currentHour) })} 

          style={{

            background: `linear-gradient(to right, rgb(9 230 152) 0%, #023d28 ${calculateGradientPercentage()}%, #fff ${calculateGradientPercentage()}%, #ddd 100%)`
            //background: `linear-gradient(to right, rgb(9 230 152) 0%, rgb(5 193 126) 30.4348%, rgb(255, 255, 255) 30.4348%, rgb(221, 221, 221) 100%)`
            //background: `linear-gradient(to right, #023d28 0%, #023d28 ${calculateGradientPercentage()}%, #fff ${calculateGradientPercentage()}%, #ddd 100%)`
          }}

          

          title={`Selected Time: ${changeFormatTime(currentHour)}`}
        />
        {showTooltip && (
          <p className='tooltip' style={{ top: `calc(${calculateGradientPercentage()}% - 5rem)` }}>
            Time: {changeFormatTime(currentHour)}
          </p>
        )}
      </div>
    </div>
  ); 
 }

export default SunController;
 

// const SunController: React.FunctionComponent<IMapChangeMode> = (props) => {
//   const [currentTime, setCurrentTime] = useState(360); // 6 am in minutes

//   const { uxpContext } = props;
//   const mapContainerRef = useRef(null);

//   const changeFormatTime = (value: number) => {
//     const hours = Math.floor(value / 60);
//     const minutes = value % 60;

//     const formattedHours = String(hours).padStart(2, '0');
//     const formattedMinutes = String(minutes).padStart(2, '0');

//     return `${formattedHours}:${formattedMinutes}`;
//   };

//   const handleTimeChange = (event: any) => {
//     setCurrentTime(parseFloat(event.target.value));
//     console.log("currentTime", currentTime);
//       alert(currentTime);
//   };

//   const calculateGradientPercentage = () => {
//     const start = 360;  
//     // const end = 1439 + 360;  
//     const end = 1439 ; 
//     return ((currentTime - start) / (end - start)) * 100;
//   };

//   return (
//     <div className='timer-widget'>
//     <div className='timer-slider'>
//       <input
//         className='timer-range'
//         type="range"
//         min={360}  
//         max={1439}  
//         step={1}  
//         value={currentTime}
//         onChange={handleTimeChange}
//         onClick={() => uxpContext.eventHandler?.(EventsEnum.SunPosition, { time: changeFormatTime(currentTime) })}
//         style={{
//           background: `linear-gradient(to right, #023d28 0%, #023d28 ${calculateGradientPercentage()}%, #fff ${calculateGradientPercentage()}%, #ddd 100%)`
//         }}
//       />
//       {/* <p>Selected Time: {changeFormatTime(currentTime)}</p> */}
//     </div>
//     </div>
//   );
// };

// export default SunController;

  