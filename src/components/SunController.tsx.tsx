import React, { useRef, useState, ChangeEvent } from 'react';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
} 

const SunController: React.FunctionComponent<IMapChangeMode> = (props) => {
  const [currentTime, setCurrentTime] = useState(12.15);

  const { uxpContext } = props;
  const mapContainerRef = useRef(null);

  const changeFormatTime = (value: number) => {
    const hours = Math.floor(value);
    const minutes = Math.round((value % 1) * 60);
    
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}`;
  };

  const handleTimeChange = (event:any) => {
    setCurrentTime(parseFloat(event.target.value));
  };

  return (
      <div className='timer-widget'>

        <div className='timer-slider' >
          <input
            className='timer-range'
            type="range"
            min={0}
            max={24}
            step={0.01}
            value={currentTime}
            onChange={handleTimeChange}
            onClick={() => uxpContext.eventHandler?.(EventsEnum.SunPosition, { time: changeFormatTime(currentTime) })}
          
          />
      {/* <p>Selected Time: {changeFormatTime(currentTime)}</p> */}
    </div>
    </div>
  );
};

export default SunController;


