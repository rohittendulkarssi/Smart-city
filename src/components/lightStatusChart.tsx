 

//  import React, { useState, useEffect } from 'react';
//  import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
//  import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//  import { IContextProvider } from '../uxp';
 
//  interface EnergyConsumptionData {
//    "Power Consumption"?: {
//      [key: string]: { [key: string]: number }[]
//    };
//    "Burning Hours"?: {
//      [key: string]: { [key: string]: number }[]
//    };
//  }
 
//  interface IWidgetProps {
//    instanceId?: string;
//    uxpContext?: IContextProvider;
//  } 
   
//  const StreetLightStatusChart: React.FunctionComponent<IWidgetProps> = (props) => {
//      const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({});
//      const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");
//      const [filter, setFilter] = useState<'Day' | 'Week' | 'Month'>('Day');
    
//      const currentDate = new Date();
//      currentDate.setDate(0);  
 
//      const startDate = currentDate.toISOString();  
//      const endDate = new Date().toISOString(); 
//      const hierarchy = 'منطقة المدينة';
//      const start = startDate;
//      const end = endDate;   
   
//      const handleFilterChange = (value: "day" | "week" | "month") => {
//        console.log("Selected Filter Value:", value);
//        setToggleFilterValue(value);
//        if (value === 'day') {
//          setFilter('Day');
//        } else if (value === 'week') {
//          setFilter('Week');
//        } else if (value === 'month') { 
//          setFilter('Month'); 
//        }
//      };    
 
//      // const fetchData = () => { 
//      //     let newStart = start;
//      //     let newEnd = end;   
       
 
//      //     if (filter === 'Month') {
//      //       newStart = new Date('2024-02-03T00:00:00').toISOString(); 
//      //       newEnd = new Date().toISOString(); 
//      //     }
       
//      //     props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start: newStart, end: newEnd, filter }, { json: true })
//      //       .then((res: any) => {
//      //         console.log("Response From API is", res, typeof res);
//      //         setEnergyConsumptionData(res);
//      //       }).catch((e: any) => {
//      //         console.error("Error fetching data:", e);
//      //       });
//      //   }; 
 
//      const fetchData = async () => {
//        let newStart = start;
//        let newEnd = end;
   
//        if (filter === 'Month') {
//            newStart = new Date('2024-02-03T00:00:00').toISOString();
//            newEnd = new Date().toISOString();
//        }
   
//        try {
//            const res = await props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start: newStart, end: newEnd, filter }, { json: true });
//            //console.log("Response From API is", res, typeof res);
//            setEnergyConsumptionData(res);
//        } catch (e) {
//            console.error("Error fetching data:", e);
//        }
//    };
   
//      React.useEffect(() => {
//        fetchData();
//      }, [hierarchy, start, end, filter]); 
       
 
     
//   const transformData = (rawData: EnergyConsumptionData, filterType: "day" | "week" | "month") => {
//      let filteredData: { name: string; powerConsumption: number; burningHours: number }[] = [];
 
//      const powerConsumptionData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Power Consumption"] || [];
//      const burningHoursData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Burning Hours"] || [];
      
       
//    if (filterType === "day") {   
//      const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//      const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
  
 
//      filteredData = daysInWeekAbbr.map((abbr, index) => {
//          const fullDayName = daysInWeekFull[index]; 
 
//          const currentDate = new Date();  
//          currentDate.setDate(currentDate.getDate() + index - 1);    
//          const day = currentDate.getDate();
//          const month = currentDate.toLocaleString('default', { month: 'short' });
//          // const year = currentDate.getFullYear(); 
//          const year = currentDate.toLocaleString('default', { year: '2-digit' });  
//          const dateString = `${day}/${month}/${year}`; 
 
//          const powerEntry = (powerConsumptionData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//          const burningEntry = (burningHoursData as any[]).find((entry: { day: string; }) => entry.day === fullDayName); 
 
//          const fullDateString = currentDate.toLocaleDateString(); // Full date string for tooltip
 
//          return {
//               name: abbr,
//              // name: dateString,
//              fullDate: fullDateString, 
//              powerConsumption: powerEntry ? powerEntry.value : 0,
//              burningHours: burningEntry ? burningEntry.value : 0,
//          };
//      }); 
  
 
       
//      }
 
//      else if (filterType === "week") {   
//          const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];  
               
//          filteredData = WeekNamesFull.map(weekName => {  
//              const powerEntry = (powerConsumptionData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//              const burningEntry = (burningHoursData as any[]).find((entry: { week: string; }) => entry.week === weekName); 
//              const powerValue = powerEntry ? powerEntry.value : 0;
//              const burningValue = burningEntry ? burningEntry.value : 0;
 
//              return {
//                  name: weekName,
//                  powerConsumption: powerValue,
//                  burningHours: burningValue,
//              };
//          }); 
//      } 
 
//      else if (filterType === "month") {   
 
//          const startDate = new Date('2024-02-01T00:00:00').toISOString(); 
//          const monthNamesFull: string[] = [ "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
//          const monthNamesabbr: string[] = [ "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
//              filteredData = monthNamesabbr.map((abbr, index) => {
//              const fullMonthName = monthNamesFull[index];
 
//              const powerEntry = (powerConsumptionData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//              const burningEntry = (burningHoursData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName); 
//              const powerValue = powerEntry ? powerEntry.value : 0;
//              const burningValue = burningEntry ? burningEntry.value : 0;
 
//              return {
//                  name: abbr,
//                  powerConsumption: powerValue,
//                  burningHours: burningValue,
//              };
//          }); 
//      }  
//      return filteredData;
//  }; 
  
//    const transformedData1 = transformData(energyConsumptionData, 'month');
//    const transformedData2 = transformData(energyConsumptionData, 'week'); // Corrected from 'Week' to 'week'
//    const transformedData3 = transformData(energyConsumptionData, 'day');
   
//    const filterToDataMap: { [key: string]: any[] } = {
//      month: transformedData1,
//      week: transformedData2,  
//      day: transformedData3,
//    };
   
//    const selectedData = filterToDataMap[toggleFilterValue] || transformedData1; 
  
//    const transformedChartData = selectedData.map((item) => ({
//      ...item,
//      powerConsumption: item.powerConsumption / 1000,  
//      burningHours: item.burningHours / 1000,  
//    }));
 
  
  
//    return (
//      <WidgetWrapper className="smart-city_box energy_consumption-box">
//        <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//        <div className="smart-city-content">
//          <div className="technician_chart">
//            <div className='chart-top'> 
 
//              <ToggleFilter
//                options={[
//                  { label: "7D", value: "day" },
//                  { label: "1M", value: "week" },
//                  { label: "1Y", value: "month" },
//                ]}
//                value={toggleFilterValue}
//                onChange={handleFilterChange}
//              /> 
//            </div>
 
//            <div className='chart-top' style={{marginTop:"0.5em"}}>
//              <div className="sub_title_bar">Total MWh</div>  
//              <div className="sub_title_bar hrs">Hours</div>
//            </div>
           
//            <ResponsiveContainer> 
 
//                    <AreaChart
//                      data={transformedChartData}  
//                      margin={{
//                          top: 10,
//                          right: 0,
//                          left: 0,
//                          bottom: 30,
//                      }}
//                  > 
//                      <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />
 
//                      <XAxis dataKey="name" />    
 
//                      <YAxis yAxisId="left" />  
//                      <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${(value)}K`}/> 
                    
 
 
 
//            <Tooltip
//      formatter={(value: any, name: any, props: any) => [`${value} kWh`, name]}
//      labelFormatter={(label: string) => { // Corrected parameter type to string
  
 
//          if (toggleFilterValue === 'day') {
  
//              const dayIndexMap: { [key: string]: number } = {
//                  "Sun": 0,
//                  "Mon": 1,
//                  "Tue": 2,
//                  "Wed": 3,
//                  "Thu": 4,
//                  "Fri": 5,
//                  "Sat": 6
//              };
  
//              const dayIndex = dayIndexMap[label];
  
//              const currentDate = new Date();
//              const currentDay = currentDate.getDay();
//              const startDate = new Date(currentDate);
//              startDate.setDate(startDate.getDate() - currentDay); 
  
//              const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + dayIndex);
               
//              const day = targetDate.getDate();
//              const month = targetDate.getMonth() + 1;
//              const year = targetDate.getFullYear();
 
//              // Format the date as "dd/mm/yyyy"
//              const formattedDate = `${day}/${month}/${year}`;
 
//              return `Date: ${formattedDate}`;
 
//          } else {
//              return `Date: ${label}`;  
//          }
//      }}
//  /> 
 
//                      <Legend /> 
//                      <Area
//                          type="monotone"
//                          dataKey="powerConsumption"
//                          name="Power Consumption (MWh)"
//                          stackId="1"
//                          stroke="#001912"
//                          fill="url(#gradient1)"
//                          yAxisId="left"
//                      />
//                      <Area
//                          type="monotone"
//                          dataKey="burningHours"
//                          name="Burning Hours (MWh)"
//                          stackId="1"
//                          stroke="#79dccc"
//                          fill="url(#gradient2)"
//                          yAxisId="left"
//                      />
//                      <Area
//                          type="monotone"
//                          dataKey="hours"
//                          stackId="0"
//                          fill="url(#gradient3)"
//                          yAxisId="right"
//                          style={{ display: "none" }}
//                          legendType="none"
//                      />
//                      <defs> 
//                          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                              <stop offset="10%" stopColor="#01a4ef" stopOpacity={0.8} />
//                              <stop offset="90%" stopColor="#013335" stopOpacity={0.9} />
//                          </linearGradient>
//                          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                              <stop offset="10%" stopColor="#00947b" stopOpacity={0.8} />
//                              <stop offset="90%" stopColor="#053122" stopOpacity={0.9} />
//                          </linearGradient> 
//                      </defs>
//                  </AreaChart>
 
//            </ResponsiveContainer>
//          </div>
//        </div>
//      </WidgetWrapper>
//    );
//  };
 
//  export default StreetLightStatusChart;
 

 








import React, { useState, useEffect } from 'react';
import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { IContextProvider } from '../uxp';

interface EnergyConsumptionData {
  "Expenditure"?: {
    [key: string]: { [key: string]: number }[]
  };
}

interface IWidgetProps {
  instanceId?: string;
  uxpContext?: IContextProvider;
} 
  
const StreetLightStatusChart: React.FunctionComponent<IWidgetProps> = (props) => {

  const { uxpContext } = props;
    const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({});
    const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");
    const [filter, setFilter] = useState<'Day' | 'Week' | 'Month'>('Day');
   
    const currentDate = new Date();
    currentDate.setDate(0);  

    const startDate = currentDate.toISOString();  
    const endDate = new Date().toISOString(); 
    const hierarchy = 'منطقة المدينة';
    const start = startDate;
    const end = endDate;   
  
    const handleFilterChange = (value: "day" | "week" | "month") => {
      console.log("Selected Filter Value:", value);
      setToggleFilterValue(value);
      if (value === 'day') {
        setFilter('Day');
      } else if (value === 'week') {
        setFilter('Week');
      } else if (value === 'month') { 
        setFilter('Month'); 
      }
    };    
 

  console.log("for Check context", props.uxpContext);

  const fetchData = () => {  

    props.uxpContext.executeAction("TataStreetLightAPI", "GetExpenditure", { hierarchy, start: start, end: end, filter }, { json: true })
        
    .then((res: any) => {

      console.log("Response uxpContext",uxpContext);
            console.log("Response From GetExpenditure API is", res, typeof res);
            setEnergyConsumptionData(res);
        })
        .catch((e: any) => {
            console.error("Error fetching data:", e);
        });
};

  
    
 const transformData = (rawData: EnergyConsumptionData, filterType: "day" | "week" | "month") => {
  let filteredData: { name: string; powerConsumption: number }[] = [];


  const expenditureData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Expenditure"] || [];
 
if (filterType === "day") {   
  const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 


  filteredData = daysInWeekAbbr.map((abbr, index) => {
      const fullDayName = daysInWeekFull[index]; 

      const currentDate = new Date();  
      currentDate.setDate(currentDate.getDate() + index - 1);    
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString('default', { month: 'short' });
      // const year = currentDate.getFullYear(); 
      const year = currentDate.toLocaleString('default', { year: '2-digit' });  
      const dateString = `${day}/${month}/${year}`; 

      const powerEntry = (expenditureData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);  
      const fullDateString = currentDate.toLocaleDateString();  

      return {
           name: abbr, 
          fullDate: fullDateString, 
          powerConsumption: powerEntry ? powerEntry.value : 0, 
      };
  });  
    
  }

  else if (filterType === "week") {   
      const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];  
            
      filteredData = WeekNamesFull.map(weekName => {  
          const powerEntry = (expenditureData as any[]).find((entry: { week: string; }) => entry.week === weekName); 
          const powerValue = powerEntry ? powerEntry.value : 0; 

          return {
              name: weekName,
              powerConsumption: powerValue, 
          };
      }); 
  } 

  else if (filterType === "month") {   

      const startDate = new Date('2024-02-01T00:00:00').toISOString(); 
      const monthNamesFull: string[] = [ "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
      const monthNamesabbr: string[] = [ "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

          filteredData = monthNamesabbr.map((abbr, index) => {
          const fullMonthName = monthNamesFull[index];

          const powerEntry = (expenditureData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
           
          const powerValue = powerEntry ? powerEntry.value : 0; 

          return {
              name: abbr,
              powerConsumption: powerValue 
          };
      }); 
  }  
  return filteredData;
}; 

   
  const transformedData1 = transformData(energyConsumptionData, 'month');
  const transformedData2 = transformData(energyConsumptionData, 'week'); 
  const transformedData3 = transformData(energyConsumptionData, 'day');
  
  const filterToDataMap: { [key: string]: any[] } = {
    month: transformedData1,
    week: transformedData2,  
    day: transformedData3,
  };
  
  const selectedData = filterToDataMap[toggleFilterValue] || transformedData1; 
 
  const transformedChartData = selectedData.map((item) => ({
    ...item,
    powerConsumption: item.powerConsumption / 1000,  
  }));

  return (
    <WidgetWrapper className="smart-city_box energy_consumption-box">
      <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
      <div className="smart-city-content">
        <div className="technician_chart">
          <div className='chart-top'> 
            <ToggleFilter
              options={[
                { label: "7D", value: "day" },
                { label: "1M", value: "week" },
                { label: "1Y", value: "month" },
              ]}
              value={toggleFilterValue}
              onChange={handleFilterChange}
            /> 
          </div>

          <div className='chart-top' style={{marginTop:"0.5em"}}>
            <div className="sub_title_bar">Total MWh</div>  
          </div>
          
          <ResponsiveContainer> 

              <BarChart
                data={transformedChartData}  
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 30,
                }}
            > 
                 <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />
                <XAxis dataKey="name" />    
                <YAxis />
                <Tooltip formatter={(value: any) => `${value} MWh`} />
                <Legend /> 
                <Bar
                    dataKey="powerConsumption"
                    name="Expenditure (MWh)"
                    fill="#01a4ef"
                />
            </BarChart>

          </ResponsiveContainer>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default StreetLightStatusChart;

 





// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { ToggleFilter,  WidgetWrapper, TitleBar, } from "uxp/components";
 
// import { IContextProvider } from '../uxp';

 

// interface IWidgetProps { 
//   instanceId?: string,
//   uxpContext?: IContextProvider
// }

// const data1 = [
//   { name: 'Jan', value: 18000 },
//   { name: 'Feb', value: 50000 },
//   { name: 'Mar', value: 12035 },
//   { name: 'Apr', value: 30040 },
//   { name: 'May', value: 65000 },
//   { name: 'Jun', value: 35035 },
//   { name: 'Jul', value: 13500 },
//   { name: 'Aug', value: 12035 },
//   { name: 'Sep', value: 30040 },
//   { name: 'Oct', value: 35000 },
//   { name: 'Nov', value: 25035 },
//   { name: 'Dec', value: 16500 },
// ];

// const data2 = [
//   { name: 'Week 1', value: 32000 },
//   { name: 'Week 2', value: 12000 },
//   { name: 'Week 3', value: 32035 },
//   { name: 'Week 4', value: 30040 }, 
// ];

// const data3 = [
//   { name: 'Sun', value: 20000 },
//   { name: 'Mon', value: 41000 },
//   { name: 'Tue', value: 35035 },
//   { name: 'Wed', value: 1040 },
//   { name: 'Thu', value: 25000 },
//   { name: 'Fri', value: 30035 },
//   { name: 'Sat', value: 5000 },
// ]; 

// interface DataItem {
//   name: string;
//   value: number;
// }

// // const StreetLightStatusChart: React.FunctionComponent<{}> = () => {

// const StreetLightStatusChart: React.FunctionComponent<IWidgetProps> = (props) => {  

//   // const [toggleFilterValue, setToggleFilterValue] = useState<string>('day'); 

//   const [loading, setLoading] = useState(true);
//   const [health, setHealth] = useState(); 

  
//   const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");
//   const [filter, setFilter] = useState<'Day' | 'Week' | 'Month'>('Day');
 
//   const currentDate = new Date();
//   currentDate.setDate(0);  

//   const startDate = currentDate.toISOString();  
//   const endDate = new Date().toISOString(); 
//   const hierarchy = 'منطقة المدينة';
//   const start = startDate;
//   const end = endDate;    

   

//   function getHealthData() { 
//     props.uxpContext
//       .executeAction("TataStreetLightAPI", "GetExpenditure", { hierarchy, start, end, filter }, { json: true })
//       .then((res: any) => {
//         console.log("Response From API is", res, typeof res);
//         setHealth(res);
//         setLoading(false);  
//       })
//       .catch((e: any) => {
//         console.error("Error fetching health data:", e);
//         setLoading(false);  
//       });
//   } 
  
//   useEffect(() => {
//     getHealthData();
//   }, [hierarchy, start, end, filter]); 

 

//   const getDataByFilter = () => {
//     switch (toggleFilterValue) {
//       case 'week':
//         return data2;
//       case 'month':
//         return data1;
//       case 'day':
//       default:
//         return data3;
//     }
//   };

//   const data = getDataByFilter();
 
//   const colorArray = ['#005745'];

//   return (
//     <WidgetWrapper className="smart-city_box waste-bin-box">  
//             {/* <TitleBar title="Street Light Alerts" icon='https://static.iviva.com/images/Udhayimages/traffic-light.png'></TitleBar>  */}
//             <TitleBar title="The Expenditure Graph" icon='https://static.iviva.com/images/Udhayimages/streetlight-alert.png'></TitleBar>
           
//             <div className="smart-city-content">  
//       <div className="technician_chart" style={{ height: 200 }}>
//         <div className="chart-top" style={{marginTop:"10px"}}>
//           <div className="sub_title_bar">Total Revenue (Riyal)</div>
//            <ToggleFilter
//             options={[
//               { label: '7D', value: 'day' },
//               { label: '1M', value: 'week' },
//               { label: '1Y', value: 'month' },
//             ]}
//             value={toggleFilterValue}
//             onChange={handleFilterChange}
//           />  
//         </div>  

//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={700}
//             height={400}
//             data={data}
//             margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
//           >
//             <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />

//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip /> 
//             {colorArray.map((color, index) => (
//               <Bar  barSize={20}
//                 key={`bar-${index}`}
//                 dataKey="value"
//                 fill={`url(#color${index})`}
//               />
//             ))}
//             <defs>
//               {colorArray.map((color, index) => (
//                 <linearGradient key={`gradient-${index}`} id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="15%" stopColor={'#009b79'} />
//                   <stop offset="85%" stopColor={'#005745'} stopOpacity={0.9} />
//                 </linearGradient>
//               ))}
//             </defs>
//           </BarChart>
//         </ResponsiveContainer>   


       
//       </div>
//       </div>

// </WidgetWrapper> 
// )
// }; 

// export default StreetLightStatusChart;












// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { ToggleFilter,  WidgetWrapper, TitleBar, } from "uxp/components";

// // import EnergyConsumption from './energy_consumption';

// const data1 = [
//   { name: 'Jan', value: 18000 },
//   { name: 'Feb', value: 50000 },
//   { name: 'Mar', value: 12035 },
//   { name: 'Apr', value: 30040 },
//   { name: 'May', value: 65000 },
//   { name: 'Jun', value: 35035 },
//   { name: 'Jul', value: 13500 },
//   { name: 'Aug', value: 12035 },
//   { name: 'Sep', value: 30040 },
//   { name: 'Oct', value: 35000 },
//   { name: 'Nov', value: 25035 },
//   { name: 'Dec', value: 16500 },
// ];

// const data2 = [
//   { name: 'Week 1', value: 32000 },
//   { name: 'Week 2', value: 12000 },
//   { name: 'Week 3', value: 32035 },
//   { name: 'Week 4', value: 30040 }, 
// ];

// const data3 = [
//   { name: 'Sun', value: 20000 },
//   { name: 'Mon', value: 41000 },
//   { name: 'Tue', value: 35035 },
//   { name: 'Wed', value: 1040 },
//   { name: 'Thu', value: 25000 },
//   { name: 'Fri', value: 30035 },
//   { name: 'Sat', value: 5000 },
// ]; 

// interface DataItem {
//   name: string;
//   value: number;
// }

// const StreetLightStatusChart: React.FunctionComponent<{}> = () => {
//   const [toggleFilterValue, setToggleFilterValue] = useState<string>('day');


  

//   const handleFilterChange = (value: string) => {
//     console.log('Selected Filter Value:', value);
//     setToggleFilterValue(value);
//   };

//   const getDataByFilter = () => {
//     switch (toggleFilterValue) {
//       case 'week':
//         return data2;
//       case 'month':
//         return data1;
//       case 'day':
//       default:
//         return data3;
//     }
//   };

//   const data = getDataByFilter();
 
//   const colorArray = ['#005745'];

//   return (
//     <WidgetWrapper className="smart-city_box waste-bin-box">  
//             {/* <TitleBar title="Street Light Alerts" icon='https://static.iviva.com/images/Udhayimages/traffic-light.png'></TitleBar>  */}
//             <TitleBar title="Street Light Graph" icon='https://static.iviva.com/images/Udhayimages/streetlight-alert.png'></TitleBar>
           
//             <div className="smart-city-content">  
//       <div className="technician_chart" style={{ height: 200 }}>
//         <div className="chart-top" style={{marginTop:"10px"}}>
//           <div className="sub_title_bar">Total Revenue (Riyal)</div>
//           <ToggleFilter
//             options={[
//               { label: '7D', value: 'day' },
//               { label: '1M', value: 'week' },
//               { label: '1Y', value: 'month' },
//             ]}
//             value={toggleFilterValue}
//             onChange={handleFilterChange}
//           />
//         </div>  

//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={700}
//             height={400}
//             data={data}
//             margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
//           >
//             <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />

//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip /> 
//             {colorArray.map((color, index) => (
//               <Bar  barSize={20}
//                 key={`bar-${index}`}
//                 dataKey="value"
//                 fill={`url(#color${index})`}
//               />
//             ))}
//             <defs>
//               {colorArray.map((color, index) => (
//                 <linearGradient key={`gradient-${index}`} id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="15%" stopColor={'#009b79'} />
//                   <stop offset="85%" stopColor={'#005745'} stopOpacity={0.9} />
//                 </linearGradient>
//               ))}
//             </defs>
//           </BarChart>
//         </ResponsiveContainer>   


       
//       </div>
//       </div>

// </WidgetWrapper> 
// )
// }; 

// export default StreetLightStatusChart;








// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { ToggleFilter } from "uxp/components";

// const data1 = [
//     { name: 'Jan', value: 18000 },
//     { name: 'Feb', value: 50000 },
//     { name: 'Mar', value: 12035 },
//     { name: 'Apr', value: 30040 },
//     { name: 'May', value: 65000 },
//     { name: 'Jun', value: 35035 },
//     { name: 'Jul', value: 13500 },
//     { name: 'Aug', value: 12035 },
//     { name: 'Sep', value: 30040 },
//     { name: 'Oct', value: 35000 },
//     { name: 'Nov', value: 25035 },
//     { name: 'Dec', value: 16500 },
// ];

// const data2 = [
//     { name: 'Week 1', value: 32000 },
//     { name: 'Week 2', value: 12000 },
//     { name: 'Week 3', value: 32035 },
//     { name: 'Week 4', value: 30040 }, 
// ];

// const data3 = [
//     { name: 'Sun', value: 20000 },
//     { name: 'Mon', value: 41000 },
//     { name: 'Tue', value: 35035 },
//     { name: 'Wed', value: 1040 },
//     { name: 'Thu', value: 25000 },
//     { name: 'Fri', value: 30035 },
//     { name: 'Sat', value: 5000 },
// ]; 

// interface DataItem {
//   name: string;
//   value: number;
// }

// const gradientOffset = (data: DataItem[]) => {
//   const dataMax = Math.max(...data.map((entry) => entry.value));
//   const dataMin = Math.min(...data.map((entry) => entry.value));
//   const offsetMax = 90;
//   const offsetMin = 10;

//   return data.map((entry) => {
//       const offset = dataMax === dataMin ? 0.5 : (entry.value - dataMin) / (dataMax - dataMin);
//       return {
//           ...entry,
//           offset: offsetMax - (offset * (offsetMax - offsetMin)),
//       };
//   });
// };


// const StreetLightStatusChart: React.FunctionComponent<{}> = () => {
//     const [toggleFilterValue, setToggleFilterValue] = useState<string>('day');

//     const handleFilterChange = (value: string) => {
//         console.log('Selected Filter Value:', value);
//         setToggleFilterValue(value);
//     };

//     const getDataByFilter = () => {
//         switch (toggleFilterValue) {
//             case 'week':
//                 return data2;
//             case 'month':
//                 return data1;
//             case 'day':
//             default:
//                 return data3;
//         }
//     };

//     const data = getDataByFilter();

//     const colorArray = ['#056e5e', '#c70627', '#f3b809'];  

//     return (
//         <div className="smart-city-content">
//             <div className="technician_chart" style={{ height: 200 }}>
//                 <div className="chart-top" style={{marginTop:"10px"}}>
//                     <div className="sub_title_bar">Total Revenue (Riyal)</div>
//                     <ToggleFilter
//                         options={[
//                             { label: '7D', value: 'day' },
//                             { label: '1M', value: 'week' },
//                             { label: '1Y', value: 'month' },
//                         ]}
//                         value={toggleFilterValue}
//                         onChange={handleFilterChange}
//                     />
//                 </div>  

//                 <ResponsiveContainer width="100%" height="100%">

//                   <BarChart
//                       width={700}
//                       height={400}
//                       data={data}
//                       margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
//                     >
//                       <CartesianGrid strokeDasharray="0 0" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip /> 
//                       <Bar dataKey="value" barSize={20}>

//                         {data.map((entry, index) => (
//                           <defs key={`defs-${index}`}>
//                             <linearGradient id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
//                               <stop offset="5%" stopColor={colorArray[index]} />
//                               <stop offset="95%" stopColor={colorArray[index]} stopOpacity={0.9} />
//                             </linearGradient>
//                           </defs>
//                         ))}
//                         {data.map((entry, index) => (
//                           <Bar
//                             key={`bar-${index}`}
//                             dataKey="value"
//                             fill={`url(#color${index})`} // Use unique ID for each bar
//                           />
//                         ))}
//                       </Bar> 

//                     </BarChart>

//                                   </ResponsiveContainer>     
//                               </div>
//                           </div>
//                       );
//                   };

// export default StreetLightStatusChart;






// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LabelList } from 'recharts';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
      
//         const data1 = [
//             { name: 'Jan', value: 18000 },
//             { name: 'Feb', value: 50000 },
//             { name: 'Mar', value: 12035 },
//             { name: 'Apr', value: 30040 },
//             { name: 'May', value: 65000 },
//             { name: 'Jun', value: 35035 },
//             { name: 'Jul', value: 13500 },
//             { name: 'Aug', value: 12035 },
//             { name: 'Sep', value: 30040 },
//             { name: 'Oct', value: 35000 },
//             { name: 'Nov', value: 25035 },
//             { name: 'Dec', value: 16500 },
//         ];

//         const data2 = [
//             { name: 'Week 1', value: 32000 },
//             { name: 'Week 2', value: 12000 },
//             { name: 'Week 3', value: 32035 },
//             { name: 'Week 4', value: 30040 }, 
//         ];

//         const data3 = [
//             { name: 'Sun', value: 20000 },
//             { name: 'Mon', value: 41000 },
//             { name: 'Tue', value: 35035 },
//             { name: 'Wed', value: 1040 },
//             { name: 'Thu', value: 25000 },
//             { name: 'Fri', value: 30035 },
//             { name: 'Sat', value: 5000 },
//         ]; 
 

// const CustomBar = ({
//     x,
//     y,
//     width,
//     height,
//     payload,
//   }: {
//     x: number;
//     y: number;
//     width: number;
//     height: number;
//     payload: {
//       value: number; 
//     };
//   }) => {
//     const max = Math.max(
//       ...data1
//         .concat(data2)
//         .concat(data3)
//         .map((item) => item.value)
//     );
//     const percentage = (payload.value / max) * 100;
  
//     return (
//       <g>
//         <defs>
//           <linearGradient id={`gradient-${percentage}`} x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#01af94" />
//             <stop offset={`${percentage}%`} stopColor="#005842" />
//             <stop offset="100%" stopColor="#005936" />
//           </linearGradient>
//         </defs>
//         <rect x={x} y={y} width={width} height={height} fill={`url(#gradient-${percentage})`} />
//       </g>
//     );
//   };

// const StreetLightStatusChart: React.FunctionComponent<{}> = () => {
//   const [toggleFilterValue, setToggleFilterValue] = useState<string>('day');

//   const handleFilterChange = (value: string) => {
//     console.log('Selected Filter Value:', value);
//     setToggleFilterValue(value);
//   };

//   const getDataByFilter = () => {
//     switch (toggleFilterValue) {
//       case 'week':
//         return data2;
//       case 'month':
//         return data1;
//       case 'day':
//       default:
//         return data3;
//     }
//   };

//  const data = getDataByFilter();  
//  const colorArray = ['#056e5e', '#c70627', '#f3b809', '#056e5e', '#056e5e', '#056e5e',];   

//   return (
//     <div className="smart-city-content">
//       <div className="technician_chart" style={{ height: 200 }}>
       
//         <div className="chart-top" style={{marginTop:"10px"}}>
//         <div className="sub_title_bar">Total Revenue (Riyal)</div>
//           <ToggleFilter
//             options={[
//               { label: '7D', value: 'day' },
//               { label: '1M', value: 'week' },
//               { label: '1Y', value: 'month' },
//             ]}
//             value={toggleFilterValue}
//             onChange={handleFilterChange}
//           />
//         </div>  

//        <ResponsiveContainer width="100%" height="100%">
//              <BarChart
//               width={700}
//               height={400}
//               data={data}
//               margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="0 0" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip /> 
//               <Bar dataKey="value" barSize={20}>
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={colorArray[index % colorArray.length]} />
//                 ))}
//               </Bar>   
              
//             </BarChart>    
//           </ResponsiveContainer>     

//       </div>
//     </div>
//   );
// };

// export default StreetLightStatusChart;






// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { ToggleFilter } from "uxp/components";
  
// const data1 = [
//     { name: 'Jan', value: 18000 },
//     { name: 'Feb', value: 50000 },
//     { name: 'Mar', value: 12035 },
//     { name: 'Apr', value: 30040 },
//     { name: 'May', value: 65000 },
//     { name: 'Jun', value: 35035 },
//     { name: 'Jul', value: 13500 },
//     { name: 'Aug', value: 12035 },
//     { name: 'Sep', value: 30040 },
//     { name: 'Oct', value: 35000 },
//     { name: 'Nov', value: 25035 },
//     { name: 'Dev', value: 16500 },
// ];

// const data2 = [
//     { name: 'Week 1', value: 32000 },
//     { name: 'Week 2', value: 12000 },
//     { name: 'Week 3', value: 32035 },
//     { name: 'Week 4', value: 30040 }, 
// ];

// const data3 = [
//     { name: 'Sun', value: 20000 },
//     { name: 'Mon', value: 41000 },
//     { name: 'Tue', value: 35035 },
//     { name: 'Wed', value: 1040 },
//     { name: 'Thu', value: 25000 },
//     { name: 'Fri', value: 30035 },
//     { name: 'Sat', value: 5000 },
// ]; 

// const StreetLightStatusChart: React.FunctionComponent<{}> = () => {
//     const [toggleFilterValue, setToggleFilterValue] = useState<string>('day');

//     const handleFilterChange = (value: string) => {
//         console.log('Selected Filter Value:', value);
//         setToggleFilterValue(value);
//     };

//     const getDataByFilter = () => {
//         switch (toggleFilterValue) {
//             case 'week':
//                 return data2;
//             case 'month':
//                 return data1;
//             case 'day':
//             default:
//                 return data3;
//         }
//     };

//     const data = getDataByFilter();

//     const colorArray = ['#056e5e', '#c70627', '#f3b809', '#056e5e', '#056e5e', '#056e5e'];

//     // Calculate gradient offset for each data point
//     const gradientOffset = () => {
//         const dataMax = Math.max(...data.map((entry) => entry.value));
//         const dataMin = Math.min(...data.map((entry) => entry.value));
//         const offsetMax = 90;
//         const offsetMin = 10;

//         return data.map((entry) => {
//             const offset = dataMax === dataMin ? 0.5 : (entry.value - dataMin) / (dataMax - dataMin);
//             return {
//                 ...entry,
//                 offset: offsetMax - (offset * (offsetMax - offsetMin)),
//             };
//         });
//     };

//     return (
//         <div className="smart-city-content">
//             <div className="technician_chart" style={{ height: 200 }}>
//                 <div className="chart-top" style={{marginTop:"10px"}}>
//                     <div className="sub_title_bar">Total Revenue (Riyal)</div>
//                     <ToggleFilter
//                         options={[
//                             { label: '7D', value: 'day' },
//                             { label: '1M', value: 'week' },
//                             { label: '1Y', value: 'month' },
//                         ]}
//                         value={toggleFilterValue}
//                         onChange={handleFilterChange}
//                     />
//                 </div>  

//                 <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                         width={700}
//                         height={400}
//                         data={gradientOffset()} // Apply gradient offset to the data
//                         margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
//                     >
//                         <CartesianGrid strokeDasharray="0 0" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip /> 
//                         <Bar dataKey="value" barSize={20}>
//                             {data.map((_entry, index) => (
//                                 <defs key={`defs-${index}`}>
//                                     <linearGradient key={`gradient-${index}`} id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
//                                         <stop offset="5%" stopColor={colorArray[index]} />
//                                         <stop offset="95%" stopColor={colorArray[index]} stopOpacity={0.9} />
//                                     </linearGradient>
//                                 </defs>
//                             ))}
//                         </Bar>
//                     </BarChart> 
//                 </ResponsiveContainer>     
//             </div>
//         </div>
//     );
// };

// export default StreetLightStatusChart;

















// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
      
//         const data1 = [
//             { name: 'Jan', value: 18000 },
//             { name: 'Feb', value: 50000 },
//             { name: 'Mar', value: 12035 },
//             { name: 'Apr', value: 30040 },
//             { name: 'May', value: 65000 },
//             { name: 'Jun', value: 35035 },
//             { name: 'Jul', value: 13500 },
//             { name: 'Aug', value: 12035 },
//             { name: 'Sep', value: 30040 },
//             { name: 'Oct', value: 35000 },
//             { name: 'Nov', value: 25035 },
//             { name: 'Dev', value: 16500 },
//         ];

//         const data2 = [
//             { name: 'Week 1', value: 32000 },
//             { name: 'Week 2', value: 12000 },
//             { name: 'Week 3', value: 32035 },
//             { name: 'Week 4', value: 30040 }, 
//         ];

//         const data3 = [
//             { name: 'Sun', value: 20000 },
//             { name: 'Mon', value: 41000 },
//             { name: 'Tue', value: 35035 },
//             { name: 'Wed', value: 1040 },
//             { name: 'Thu', value: 25000 },
//             { name: 'Fri', value: 30035 },
//             { name: 'Sat', value: 5000 },
//         ]; 
 

// const CustomBar = ({
//     x,
//     y,
//     width,
//     height,
//     payload,
//   }: {
//     x: number;
//     y: number;
//     width: number;
//     height: number;
//     payload: {
//       value: number; 
//     };
//   }) => {
//     const max = Math.max(
//       ...data1
//         .concat(data2)
//         .concat(data3)
//         .map((item) => item.value)
//     );
//     const percentage = (payload.value / max) * 100;
  
//     return (
//       <g>
//         <defs>
//           <linearGradient id={`gradient-${percentage}`} x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#01af94" />
//             <stop offset={`${percentage}%`} stopColor="#005842" />
//             <stop offset="100%" stopColor="#005936" />
//           </linearGradient>
//         </defs>
//         <rect x={x} y={y} width={width} height={height} fill={`url(#gradient-${percentage})`} />
//       </g>
//     );
//   };

// const StreetLightStatusChart: React.FunctionComponent<{}> = () => {
//   const [toggleFilterValue, setToggleFilterValue] = useState<string>('day');

//   const handleFilterChange = (value: string) => {
//     console.log('Selected Filter Value:', value);
//     setToggleFilterValue(value);
//   };

//   const getDataByFilter = () => {
//     switch (toggleFilterValue) {
//       case 'week':
//         return data2;
//       case 'month':
//         return data1;
//       case 'day':
//       default:
//         return data3;
//     }
//   };

//   const data = getDataByFilter();  
//  const colorArray = ['#056e5e', '#c70627', '#f3b809', '#056e5e', '#056e5e', '#056e5e',];   

//   return (
//     <div className="smart-city-content">
//       <div className="technician_chart" style={{ height: 200 }}>
       
//         <div className="chart-top" style={{marginTop:"10px"}}>
//         <div className="sub_title_bar">Total Revenue (Riyal)</div>
//           <ToggleFilter
//             options={[
//               { label: '7D', value: 'day' },
//               { label: '1M', value: 'week' },
//               { label: '1Y', value: 'month' },
//             ]}
//             value={toggleFilterValue}
//             onChange={handleFilterChange}
//           />
//         </div>  

//        <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               width={700}
//               height={400}
//               data={data}
//               margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="0 0" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip /> 
//               <Bar dataKey="value" barSize={20}>
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={colorArray[index % colorArray.length]} />
//                 ))}
//               </Bar>
//             </BarChart> 
//           </ResponsiveContainer>     

//       </div>
//     </div>
//   );
// };

// export default StreetLightStatusChart;



















// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
      
//         const data1 = [
//             { name: 'Jan', value: 18000 },
//             { name: 'Feb', value: 50000 },
//             { name: 'Mar', value: 12035 },
//             { name: 'Apr', value: 30040 },
//             { name: 'May', value: 65000 },
//             { name: 'Jun', value: 35035 },
//             { name: 'Jul', value: 13500 },
//             { name: 'Aug', value: 12035 },
//             { name: 'Sep', value: 30040 },
//             { name: 'Oct', value: 35000 },
//             { name: 'Nov', value: 25035 },
//             { name: 'Dev', value: 16500 },
//         ];

//         const data2 = [
//             { name: 'Week 1', value: 32000 },
//             { name: 'Week 2', value: 12000 },
//             { name: 'Week 3', value: 32035 },
//             { name: 'Week 4', value: 30040 }, 
//         ];

//         const data3 = [
//             { name: 'Sun', value: 20000 },
//             { name: 'Mon', value: 41000 },
//             { name: 'Tue', value: 35035 },
//             { name: 'Wed', value: 1040 },
//             { name: 'Thu', value: 25000 },
//             { name: 'Fri', value: 30035 },
//             { name: 'Sat', value: 5000 },
//         ]; 
 

// const CustomBar = ({
//     x,
//     y,
//     width,
//     height,
//     payload,
//   }: {
//     x: number;
//     y: number;
//     width: number;
//     height: number;
//     payload: {
//       value: number; 
//     };
//   }) => {
//     const max = Math.max(
//       ...data1
//         .concat(data2)
//         .concat(data3)
//         .map((item) => item.value)
//     );
//     const percentage = (payload.value / max) * 100;
  
//     return (
//       <g>
//         <defs>
//           <linearGradient id={`gradient-${percentage}`} x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#01af94" />
//             <stop offset={`${percentage}%`} stopColor="#005842" />
//             <stop offset="100%" stopColor="#005936" />
//           </linearGradient>
//         </defs>
//         <rect x={x} y={y} width={width} height={height} fill={`url(#gradient-${percentage})`} />
//       </g>
//     );
//   };

// const StreetLightStatusChart: React.FunctionComponent<{}> = () => {
//   const [toggleFilterValue, setToggleFilterValue] = useState<string>('day');

//   const handleFilterChange = (value: string) => {
//     console.log('Selected Filter Value:', value);
//     setToggleFilterValue(value);
//   };

//   const getDataByFilter = () => {
//     switch (toggleFilterValue) {
//       case 'week':
//         return data2;
//       case 'month':
//         return data1;
//       case 'day':
//       default:
//         return data3;
//     }
//   };

//   const data = getDataByFilter();  
//  const colorArray = ['#056e5e', '#c70627', '#f3b809', '#056e5e', '#056e5e', '#056e5e',];  
// //const colorArray = ['#056e5e', '#056e5e', '#056e5e', '#056e5e', '#056e5e', '#056e5e',];  


//   return (
//     <div className="smart-city-content">
//       <div className="technician_chart" style={{ height: 200 }}>
       
//         <div className="chart-top" style={{marginTop:"10px"}}>
//         <div className="sub_title_bar">Total Revenue (Riyal)</div>
//           <ToggleFilter
//             options={[
//               { label: '7D', value: 'day' },
//               { label: '1M', value: 'week' },
//               { label: '1Y', value: 'month' },
//             ]}
//             value={toggleFilterValue}
//             onChange={handleFilterChange}
//           />
//         </div>  

//        <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               width={700}
//               height={400}
//               data={data}
//               margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="0 0" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip /> 
//               <Bar dataKey="value" barSize={20}>
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={colorArray[index % colorArray.length]} />
//                 ))}
//               </Bar>
//             </BarChart>
 
//           </ResponsiveContainer>   

// {/*  
// <ResponsiveContainer width="100%" height="100%">
//       <BarChart
//         width={700}
//         height={400}
//         data={data}
//         margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
//       >
//         <defs>
//           {colorArray.map((color, index) => (
//             <linearGradient key={`gradient-${index}`} id={`colorGradient${index}`} x1="3" y1="4" x2="5" y2="1">
//               <stop offset="0%" stopColor={color} />
//               <stop offset="100%" stopColor={colorArray[(index + 1) % colorArray.length]} />
//             </linearGradient>
//           ))}
//         </defs>
//         <CartesianGrid strokeDasharray="0 0" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Bar dataKey="value" barSize={20}>
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={`url(#colorGradient${index % colorArray.length})`} />
//           ))}
//         </Bar>
//       </BarChart>
//     </ResponsiveContainer>   */}


//       </div>
//     </div>
//   );
// };

// export default StreetLightStatusChart;
