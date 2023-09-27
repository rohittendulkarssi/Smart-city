import React, { Component } from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';
import { WidgetWrapper, SearchBox,  TitleBar, FormField, Label, Select, DatePicker,  } from "uxp/components";
  
  
 
// import SemiCircleProgressBar from "react-progressbar-semicircle";

 
 const SemiCircle: React.FunctionComponent<{}> = () => {   
  
//   let [inputValue, setInputValue] = React.useState<string | null>("Location");
//   let [selected, setSelected] = React.useState<string | null>("All Alert"); 
//   let [date, setDate] = React.useState<Date>(new Date());
//   let [date1, setDate1] = React.useState<Date>(new Date()); 
         
// const data = [ 

//   {
//     name: 'Traffic',
//     uv: 31.47,
//     pv: 2400,
//     fill: '#8884d8',
//   },
//   {
//     name: 'Crowed',
//     uv: 26.69,
//     pv: 4567,
//     fill: '#83a6ed',
//   },
//   {
//     name: 'ANPR',
//     uv: 15.69,
//     pv: 1398,
//     fill: '#8dd1e1',
//   },
//   {
//     name: 'Object Detetcted',
//     uv: 8.22,
//     pv: 9800,
//     fill: '#82ca9d',
//   } 
// ];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };
 
// const totalValue = data.reduce((total, entry) => total + entry.uv, 0);
// const minAngle = 5;  

// data.forEach(entry => {
//   entry.uv = Math.max(entry.uv, (minAngle / 360) * totalValue);  
// }); 
    
        return ( 
           
            <WidgetWrapper className="smart-city_box vehicle_summary-box">  
               
                <TitleBar title="Alert Trends" icon='https://static.iviva.com/images/Udhayimages/alert-trends.png'></TitleBar>  
    
                <div className="smart-city-content">  

                    <div className="chart-top"></div> 
              
                    <div className="technician_chart" style={{ height: 300 }}>  

                         {/* <SemiCircleProgressBar percentage={33} showPercentValue /> */}

                    </div>  

                </div>
    
            </WidgetWrapper>
    
        )
    };
    
 
  

export default SemiCircle;
