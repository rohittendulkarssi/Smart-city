import React, { useState } from 'react'; 
import {WidgetWrapper} from "uxp/components";
 
const WeatherIcons = () => {
   

  var weather_list = [ 
    {
      id:1,
      pict: "https://static.iviva.com/images/Udhayimages/snowflake.png"
    },
    {
      id:2,
      pict: "https://static.iviva.com/images/Udhayimages/rainy.png"
    },
    {
      id:3,
      pict: "https://static.iviva.com/images/Udhayimages/thunder.png"
    },
    {
      id:4,
      pict: "https://static.iviva.com/images/Udhayimages/cloudy-day.png"
    },
    {
      id:5,
      pict: "https://static.iviva.com/images/Udhayimages/cloud.png"
    },
    {
      id:6,
      pict: "https://static.iviva.com/images/Udhayimages/sun.png"
    }
  ]

  return (  
    <WidgetWrapper className="smart-city_box">   
      <div className='weather-list'>
          <ul> 
              {weather_list.map((item) => (
                <li key={item.id}><a href='#'><img src={item.pict} /></a></li>
              ))}   

          </ul>
      </div> 
      </WidgetWrapper> 
  );
};

export default WeatherIcons;
 