import React, { useState, useEffect } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const TopRightHeader: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [currentWeather, setCurrentWeather] = useState<string>('');

  useEffect(() => {
    // Function to get current date and time
    const getCurrentDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
      setCurrentDate(now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }));
    };

    // Function to get current weather
    const getCurrentWeather = async () => {
      try {
        const apiKey = '607a538dc29b5380f8ed270cd7db39c2';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Madinah&units=metric&appid=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          // Extract the relevant weather information from the response data
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
          // setCurrentWeather(`${temperature}°C, ${weatherDescription}`);
          setCurrentWeather(`${temperature}°C`);
        } else {
          console.error('Error fetching weather data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };

    // Call functions to set initial values
    getCurrentDateTime();
    getCurrentWeather();

    // Update time every second
    const intervalId = setInterval(getCurrentDateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <WidgetWrapper className="smart-city_box top-rht-container-box">
      <div className='header-rht-content'>
          <div className='rgt-head-cont head-timer'>{currentTime}</div>
          <div className='rgt-head-cont head-date'>{currentDate}</div>
          <div className='rgt-head-cont head-weather'>{currentWeather}</div>
          <div className='rgt-head-cont head-location'>Pullman Hotel</div> 
      </div>  
      
      {/* <div className='power-by-cont'><p>Power By</p> <h1><sub>Hello</sub>Vizz</h1></div> */}

      {/* <div className='power-by-cont'> 
         <h1><sub>Power By</sub>Vizz</h1>
      </div> */}


    </WidgetWrapper>
  );
};

export default TopRightHeader;


// import React, { useState, useEffect } from 'react';
// import { WidgetWrapper } from 'uxp/components';
// import { IContextProvider } from '../uxp';

// interface IMapChangeMode {
//   uxpContext: IContextProvider;
// }

// const TopRightHeader: React.FunctionComponent<IMapChangeMode> = (props) => {
//   const { uxpContext } = props;
//   const [currentTime, setCurrentTime] = useState<string>('');
//   const [currentDate, setCurrentDate] = useState<string>('');
//   const [currentTemperature, setCurrentTemperature] = useState<number>(0);

//   useEffect(() => {
//     // Function to get current date and time
//     const getCurrentDateTime = () => {
//       const now = new Date();
//       setCurrentTime(now.toLocaleTimeString());
//       setCurrentDate(now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }));
//     };

//     // Function to get current weather
//     const getCurrentWeather = async () => {
//       try {
//         const apiKey = '607a538dc29b5380f8ed270cd7db39c2';
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=Madinah&appid=${apiKey}`
//         );

//         if (response.ok) {
//           const data = await response.json();
//           // Extract the temperature in Celsius from the response data
//           const temperatureKelvin = data.main.temp;
//           const temperatureCelsius = temperatureKelvin - 273.15;
//           setCurrentTemperature(temperatureCelsius);
//         } else {
//           console.error('Error fetching weather data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching weather data:', error.message);
//       }
//     };

//     // Call functions to set initial values
//     getCurrentDateTime();
//     getCurrentWeather();

//     // Update time every second
//     const intervalId = setInterval(getCurrentDateTime, 1000);

//     // Clean up interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures useEffect runs only once on mount

//   return (
//     <WidgetWrapper className="smart-city_box top-rht-container-box">
//       <div className='header-rht-content'>
//         <div className='rgt-head-cont head-timer'>{currentTime}</div>
//         <div className='rgt-head-cont head-date'>{currentDate}</div>
//         <div className='rgt-head-cont head-weather'>{`${currentTemperature.toFixed(1)}°C`}</div>
//         <div className='rgt-head-cont head-location'>Pullman Hotel</div>
//       </div>  
      
//       <div className='power-by-cont'></div>
//     </WidgetWrapper>
//   );
// };

// export default TopRightHeader;


 