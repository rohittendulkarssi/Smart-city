import React, { useRef, useState, ChangeEvent } from 'react';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
} 

const SunController: React.FunctionComponent<IMapChangeMode> = (props) => {
  const [currentTime, setCurrentTime] = useState(360); // 6 am in minutes

  const { uxpContext } = props;
  const mapContainerRef = useRef(null);

  const changeFormatTime = (value: number) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  };

  const handleTimeChange = (event: any) => {
    setCurrentTime(parseFloat(event.target.value));
    console.log("currentTime", currentTime);
  };

  const calculateGradientPercentage = () => {
    const start = 360;  
    const end = 1439 + 360;  
    return ((currentTime - start) / (end - start)) * 100;
  };

  return (
    <div className='timer-widget'>
    <div className='timer-slider'>
      <input
        className='timer-range'
        type="range"
        min={360}  
        max={1439 + 360}  
        step={359}  
        value={currentTime}
        onChange={handleTimeChange}
        onClick={() => uxpContext.eventHandler?.(EventsEnum.SunPosition, { time: changeFormatTime(currentTime) })}
        style={{
          background: `linear-gradient(to right, #023d28 0%, #023d28 ${calculateGradientPercentage()}%, #fff ${calculateGradientPercentage()}%, #ddd 100%)`
        }}
      />
      {/* <p>Selected Time: {changeFormatTime(currentTime)}</p> */}
    </div>
    </div>
  );
};

export default SunController;

 




// const SunController: React.FunctionComponent<IMapChangeMode> = (props) => {
//   // const [currentTime, setCurrentTime] = useState(1180);
//   const [currentTime, setCurrentTime] = useState(12.00);

//   const { uxpContext } = props;
//   const mapContainerRef = useRef(null);

//   const changeFormatTime = (value: number) => {
//     const hours = Math.floor(value);
//     const minutes = Math.round((value % 1) * 60);
    
//     const formattedHours = String(hours).padStart(2, '0');
//     const formattedMinutes = String(minutes).padStart(2, '0');
    
//     return `${formattedHours}:${formattedMinutes}`;
//   };

//   const handleTimeChange = (event:any) => {
//     setCurrentTime(parseFloat(event.target.value));
//     console.log("currentTime", currentTime)
//   };

//   return (
//       <div className='timer-widget'>
//          {/* <div className='timer-icons'>
//               <ul>
//                   <li><img src='https://static.iviva.com/images/Udhayimages/moon.png' /></li>
//                   <li><img style={{transform :"rotate(-90deg)", maxHeight:"100%",  maxWidth:"100%"}}  src='https://static.iviva.com/images/Udhayimages/sunset.png' /></li>
//                   <li><img src='https://static.iviva.com/images/Udhayimages/sun.png' /></li>
//                   <li><img style={{transform :"rotate(90deg)", maxHeight:"100%",  maxWidth:"100%"}} src='https://static.iviva.com/images/Udhayimages/sunrise.png' /></li>
//                   <li><img src='https://static.iviva.com/images/Udhayimages/moon.png' /></li>
//               </ul>
//           </div> */}

//         <div className='timer-slider'> 

//           <input
//             className='timer-range'
//             type="range"
//             min={0}
//             max={2359}
//             // step={0.01}
//             step={589}
//             value={currentTime}
//             onChange={handleTimeChange}
//             onClick={() => uxpContext.eventHandler?.(EventsEnum.SunPosition, { time: changeFormatTime(currentTime) })}
//             style={{ background: `linear-gradient(to right, #023d28 0%, #023d28 ${(currentTime / 2359) * 100}%, #fff ${(currentTime / 2359) * 100}%, #ddd 100%)` }}
//           />
//       {/* <p>Selected Time: {changeFormatTime(currentTime)}</p> */}
//     </div>
//     </div>
//   );
// };

// export default SunController;


