import React from 'react';
import { WidgetWrapper } from "uxp/components";
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const WeatherIcons: React.FC<IMapChangeMode> = ({ uxpContext }) => {
  const weatherIcons = [ 
    'rainy',  
    'cloud',
    'sun'
  ];

  const handleWeatherClick = (state: string) => {
    uxpContext.eventHandler?.(EventsEnum.WeatherControl, { state });
    console.log('Weather', state)
  };

  return (
    <WidgetWrapper className="smart-city_box">
      <div className='weather-list'>
        <ul>
          {weatherIcons.map((icon, index) => (
            <li key={index}>
              <a href="javascript:void(0);" onClick={() => handleWeatherClick(icon)}>
                <img src={`https://static.iviva.com/images/Udhayimages/${icon}.png`} alt={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </WidgetWrapper>
  );
};

export default WeatherIcons;



//2
 
 
// import React, { useState } from 'react';
// import axios from 'axios';
// import { WidgetWrapper } from 'uxp/components';
// import { IContextProvider } from '../uxp';
// import { EventsEnum } from '../index';

// interface IMapChangeMode {
//   uxpContext: IContextProvider;
// }

// const WeatherIcons: React.FC<IMapChangeMode> = ({ uxpContext }) => {
//   const [city, setCity] = useState('Medina');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const API_KEY = '607a538dc29b5380f8ed270cd7db39c2';

//   const weatherIcons = ['rainy', 'cloud', 'sun'];

//   const handleWeatherClick = async (icon: string) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city},SA&appid=${API_KEY}`
//       );

//       setWeather(response.data);
//       setError(null);

//       uxpContext.eventHandler?.(EventsEnum.WeatherControl, { state: icon });
//       console.log('Weather', icon);
//     } catch (err) {
//       setWeather(null);
//       setError('City not found');
//     }
//     console.log('Hello',setWeather);
//   };

//   return (
//     <WidgetWrapper className="smart-city_box">
//       <div>
//         {/* <h2>Weather Icons</h2>
//         <input
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         /> */}

//         <div className='weather-list'>
//           <ul>
//             {weatherIcons.map((icon, index) => (
//               <li key={index}>
//                 <a href="javascript:void(0);" onClick={() => handleWeatherClick(icon)}>
//                   <img src={`https://static.iviva.com/images/Udhayimages/${icon}.png`} alt={icon} />
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {weather && (
//           <div>
//             <h3>{weather.name}, {weather.sys.country}</h3>
//             <p>Temperature: {weather.main.temp} K</p>
//             <p>Weather: {weather.weather[0].description}</p>
//           </div>
//         )}

//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default WeatherIcons;


 