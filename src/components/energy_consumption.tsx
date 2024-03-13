    
// import React, { useState, useEffect } from 'react';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
// import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
 
   
// import { IContextProvider } from '../uxp';

// interface EnergyConsumptionData {
//   "Power Consumption": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
//   "Burning Hours": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
// }

// interface FilterToDataMap {
//   [key: string]: { name: any; powerConsumption: number; burningHours: number }[];
// }

// interface PowerConsumptionEntry {
//   month?: string;
//   Week?: string;
//   Day?: string;
//   value: number;
// }

// interface IWidgetProps {
//   instanceId?: string;
//   uxpContext?: IContextProvider;
// }

// const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => {
 
//     //Month Data// 
//   const energyConsumptionData1 = {
//     "Power Consumption": [
//       { "month": "Jan", "value": 250.62 },
//       { "month": "Feb", "value": 374.86 },
//       { "month": "Mar", "value": 254 },
//       { "month": "Apr", "value": 365.74 },
//       { "month": "May", "value": 347.08 },
//       { "month": "June", "value": 356.14 },
//       { "month": "July", "value": 256.25 },
//       { "month": "Aug", "value": 346.980000000000004 },
//       { "month": "Sep", "value": 454.74 },
//       { "month": "Oct", "value": 547.08 },
//       { "month": "Nov", "value": 356.14 },
//       { "month": "Dec", "value": 456.25 }
//     ],
//     "Burning Hours": [
//       { "month": "Jan", "value": 118.62 },
//       { "month": "Feb", "value": 146.86 },
//       { "month": "Mar", "value": 154 },
//       { "month": "Apr", "value": 154.74 },
//       { "month": "May", "value": 147.08 },
//       { "month": "June", "value": 156.14 },
//       { "month": "July", "value": 156.25 },
//       { "month": "Aug", "value": 132 },
//       { "month": "Sep", "value": 154.74 },
//       { "month": "Oct", "value": 147.08 },
//       { "month": "Nov", "value": 126.14 },
//       { "month": "Dec", "value": 156.25 }
//     ]
//   };

//   // Week Data
//   const energyConsumptionData2 = {
//     "Power Consumption": [
//       { "Week": "Week 1", "value": 98.62 },
//       { "Week": "Week 2", "value": 46.86 },
//       { "Week": "Week 3", "value": 76.984 },
//       { "Week": "Week 4", "value": 85.74 }
//     ],
//     "Burning Hours": [
//       { "Week": "Week 1", "value": 132.64 },
//       { "Week": "Week 2", "value": 187.36 },
//       { "Week": "Week 3", "value": 271.57 },
//       { "Week": "Week 4", "value": 325.84000000000003 }
//     ]
//   };
 
    
//   // Day Data 

//   const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({
//     "Power Consumption": [],
//     "Burning Hours": [],
//   });
 
// // Use state for dynamic hierarchy, startDate, and endDate
// const [hierarchy, setHierarchy] = useState<string>('');
// const [startDate, setStartDate] = useState<string>('');
// const [endDate, setEndDate] = useState<string>('');

// function getEnergyConsumptionData() {
//   console.log("Fetching data with:", hierarchy, startDate, endDate);
//   props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncData", { hierarchy, startDate, endDate }, { json: true }).then((res: any[]) => {
//     console.log("Response From API is", res, typeof res);
//     setEnergyConsumptionData(res[0]);
//   }).catch((e: any) => {
//     console.error("Error fetching data:", e);
//   });
// }

// React.useEffect(() => {
//   getEnergyConsumptionData();
// }, [hierarchy, startDate, endDate]);   
  
  
      
//    const [toggleFilterValue, setToggleFilterValue] = useState("day");

//    const handleFilterChange = (value: React.SetStateAction<string>) => {
//     console.log("Selected Filter Value:", value);
//     setToggleFilterValue(value);
//   };

//   const transformData = (rawData: EnergyConsumptionData, filterType: string) => {
//     const powerConsumptionData = rawData["Power Consumption"] as PowerConsumptionEntry[];
//     const burningHoursData = rawData["Burning Hours"] as PowerConsumptionEntry[];
  
 
//     if (!powerConsumptionData || !burningHoursData || powerConsumptionData.length !== burningHoursData.length) {
//       return [];
//     }
  
//     const transformedData = powerConsumptionData.map((entry, index) => {
//       const { month, Week, Day, value } = entry;
//       const burningHoursValue = burningHoursData[index].value;
  
//       return {
//         name: filterType === 'day' ? Day : month || Week,
//         powerConsumption: value || 0,  
//         burningHours: burningHoursValue || 0,  
//       };
//     });
  
//     return transformedData;
//   };
  
  
//   const transformedData1 = transformData(energyConsumptionData1, 'month');
//   const transformedData2 = transformData(energyConsumptionData2, 'week');
//   const transformedData3 = transformData(energyConsumptionData, 'day');
  
//   const filterToDataMap: FilterToDataMap = {
//     month: transformedData1,
//     week: transformedData2,
//     day: transformedData3,
//   };
  
//   const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;
  
//     return (
//       <WidgetWrapper className="smart-city_box energy_consumption-box">
//         <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//         <div className="smart-city-content">
//           <div className="technician_chart">
//             <div className='chart-top'>
//               <div className="sub_title_bar">Total kWh</div>
//               <ToggleFilter
//                 options={[
//                   { label: "7D", value: "day" },
//                   { label: "1M", value: "week" },
//                   { label: "1Y", value: "month" },
//                 ]}
//                 value={toggleFilterValue}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <ResponsiveContainer>
             
//             <AreaChart
//               data={selectedData}
//               margin={{
//                 top: 10,
//                 right: 0,
//                 left: 0,
//                 bottom: 30,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis yAxisId="left" />
//               <YAxis yAxisId="right" orientation="right" />
//               <Tooltip />
//               <Legend />

//                   <Area
//                     type="monotone"
//                     dataKey="powerConsumption" 
//                     name="Power Consumption"
//                     stackId="1"
//                     stroke="#001912"
//                     fill="url(#gradient1)"
//                     yAxisId="left"
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="burningHours" 
//                     name="Burning Hours"
//                     stackId="1"
//                     stroke="#79dccc"
//                     fill="url(#gradient2)"
//                     yAxisId="left"
//                   />
//               <Area
//                 type="monotone"
//                 dataKey="hours"
//                 stackId="0"
//                 fill="url(#gradient3)"
//                 yAxisId="right"
//                 style={{ display: "none" }}
//                 legendType="none"
//               />
//               <defs>
//                 <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#065168" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#065168" stopOpacity={0.7} />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#79dccc" stopOpacity={0.7} />
//                 </linearGradient>
//               </defs>
//             </AreaChart>



//             </ResponsiveContainer>
//           </div>
//         </div>
//       </WidgetWrapper>
//     );
//   };
  
//   export default EnergyConsumption;














// import React, { useState, useEffect } from 'react';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
// import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
 
   
// import { IContextProvider } from '../uxp';

// interface EnergyConsumptionData {
//   "Power Consumption": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
//   "Burning Hours": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
// }
// interface FilterToDataMap {
//   [key: string]: { name: any; powerConsumption: number; burningHours: number }[];
// }
// interface PowerConsumptionEntry {
//   month?: string;
//   Week?: string;
//   Day?: string;   
//   value: number;
// }

// interface IWidgetProps { 
//   instanceId?: string,
//   uxpContext?: IContextProvider, 
// }
 
//   const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => { 
 
//     //Month Data// 
//   const energyConsumptionData1 = {
//     "Power Consumption": [
//       { "month": "Jan", "value": 250.62 },
//       { "month": "Feb", "value": 374.86 },
//       { "month": "Mar", "value": 254 },
//       { "month": "Apr", "value": 365.74 },
//       { "month": "May", "value": 347.08 },
//       { "month": "June", "value": 356.14 },
//       { "month": "July", "value": 256.25 },
//       { "month": "Aug", "value": 346.980000000000004 },
//       { "month": "Sep", "value": 454.74 },
//       { "month": "Oct", "value": 547.08 },
//       { "month": "Nov", "value": 356.14 },
//       { "month": "Dec", "value": 456.25 }
//     ],
//     "Burning Hours": [
//       { "month": "Jan", "value": 118.62 },
//       { "month": "Feb", "value": 146.86 },
//       { "month": "Mar", "value": 154 },
//       { "month": "Apr", "value": 154.74 },
//       { "month": "May", "value": 147.08 },
//       { "month": "June", "value": 156.14 },
//       { "month": "July", "value": 156.25 },
//       { "month": "Aug", "value": 132 },
//       { "month": "Sep", "value": 154.74 },
//       { "month": "Oct", "value": 147.08 },
//       { "month": "Nov", "value": 126.14 },
//       { "month": "Dec", "value": 156.25 }
//     ]
//   };

//   // Week Data
//   const energyConsumptionData2 = {
//     "Power Consumption": [
//       { "Week": "Week 1", "value": 98.62 },
//       { "Week": "Week 2", "value": 46.86 },
//       { "Week": "Week 3", "value": 76.984 },
//       { "Week": "Week 4", "value": 85.74 }
//     ],
//     "Burning Hours": [
//       { "Week": "Week 1", "value": 132.64 },
//       { "Week": "Week 2", "value": 187.36 },
//       { "Week": "Week 3", "value": 271.57 },
//       { "Week": "Week 4", "value": 325.84000000000003 }
//     ]
//   };
 
    
//   // Day Data 

//   const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({
//     "Power Consumption": [],
//     "Burning Hours": [],
//   });
 
 

//   const hierarchy =  '' ;
//   const startDate = '';
//   const endDate = '';

//   function getEnergyConsumptionData() {
//     console.log("Fetching data with:", hierarchy, startDate, endDate);
//     props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncData", { hierarchy, startDate, endDate }, { json: true }).then((res: any[]) => {
//       console.log("Response From API is", res, typeof res);
//       setEnergyConsumptionData(res[0]);
//     }).catch((e: any) => {
//       console.error("Error fetching data:", e);
//     });
//   }
  

//   React.useEffect(() => {
//     getEnergyConsumptionData();
//   }, []);
  
  
      
//    const [toggleFilterValue, setToggleFilterValue] = useState("day");

//    const handleFilterChange = (value: React.SetStateAction<string>) => {
//     console.log("Selected Filter Value:", value);
//     setToggleFilterValue(value);
//   };

//   const transformData = (rawData: EnergyConsumptionData, filterType: string) => {
//     const powerConsumptionData = rawData["Power Consumption"] as PowerConsumptionEntry[];
//     const burningHoursData = rawData["Burning Hours"] as PowerConsumptionEntry[];
  
 
//     if (!powerConsumptionData || !burningHoursData || powerConsumptionData.length !== burningHoursData.length) {
//       return [];
//     }
  
//     const transformedData = powerConsumptionData.map((entry, index) => {
//       const { month, Week, Day, value } = entry;
//       const burningHoursValue = burningHoursData[index].value;
  
//       return {
//         name: filterType === 'day' ? Day : month || Week,
//         powerConsumption: value || 0,  
//         burningHours: burningHoursValue || 0,  
//       };
//     });
  
//     return transformedData;
//   };
  
  
//   const transformedData1 = transformData(energyConsumptionData1, 'month');
//   const transformedData2 = transformData(energyConsumptionData2, 'week');
//   const transformedData3 = transformData(energyConsumptionData, 'day');
  
//   const filterToDataMap: FilterToDataMap = {
//     month: transformedData1,
//     week: transformedData2,
//     day: transformedData3,
//   };
  
//   const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;
  
//     return (
//       <WidgetWrapper className="smart-city_box energy_consumption-box">
//         <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//         <div className="smart-city-content">
//           <div className="technician_chart">
//             <div className='chart-top'>
//               <div className="sub_title_bar">Total kWh</div>
//               <ToggleFilter
//                 options={[
//                   { label: "7D", value: "day" },
//                   { label: "1M", value: "week" },
//                   { label: "1Y", value: "month" },
//                 ]}
//                 value={toggleFilterValue}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <ResponsiveContainer>
             
//             <AreaChart
//               data={selectedData}
//               margin={{
//                 top: 10,
//                 right: 0,
//                 left: 0,
//                 bottom: 30,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis yAxisId="left" />
//               <YAxis yAxisId="right" orientation="right" />
//               <Tooltip />
//               <Legend />

//                   <Area
//                     type="monotone"
//                     dataKey="powerConsumption" 
//                     name="Power Consumption"
//                     stackId="1"
//                     stroke="#001912"
//                     fill="url(#gradient1)"
//                     yAxisId="left"
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="burningHours" 
//                     name="Burning Hours"
//                     stackId="1"
//                     stroke="#79dccc"
//                     fill="url(#gradient2)"
//                     yAxisId="left"
//                   />
//               <Area
//                 type="monotone"
//                 dataKey="hours"
//                 stackId="0"
//                 fill="url(#gradient3)"
//                 yAxisId="right"
//                 style={{ display: "none" }}
//                 legendType="none"
//               />
//               <defs>
//                 <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#065168" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#065168" stopOpacity={0.7} />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#79dccc" stopOpacity={0.7} />
//                 </linearGradient>
//               </defs>
//             </AreaChart>



//             </ResponsiveContainer>
//           </div>
//         </div>
//       </WidgetWrapper>
//     );
//   };
  
//   export default EnergyConsumption;





  







import React, { useState, useEffect } from 'react';
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
 
   
import { IContextProvider } from '../uxp';

interface EnergyConsumptionData {
  "Power Consumption": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
  "Burning Hours": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
}
interface FilterToDataMap {
  [key: string]: { name: any; powerConsumption: number; burningHours: number }[];
}
interface PowerConsumptionEntry {
  month?: string;
  Week?: string;
  Day?: string;   
  value: number;
}

interface IWidgetProps { 
  instanceId?: string,
  uxpContext?: IContextProvider, 
}
 
  const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => {
// const EnergyConsumption : React.FunctionComponent<{}> = (props) => {
 
    //Month Data// 
  const energyConsumptionData1 = {
    "Power Consumption": [
      { "month": "Jan", "value": 250.62 },
      { "month": "Feb", "value": 374.86 },
      { "month": "Mar", "value": 254 },
      { "month": "Apr", "value": 365.74 },
      { "month": "May", "value": 347.08 },
      { "month": "June", "value": 356.14 },
      { "month": "July", "value": 256.25 },
      { "month": "Aug", "value": 346.980000000000004 },
      { "month": "Sep", "value": 454.74 },
      { "month": "Oct", "value": 547.08 },
      { "month": "Nov", "value": 356.14 },
      { "month": "Dec", "value": 456.25 }
    ],
    "Burning Hours": [
      { "month": "Jan", "value": 118.62 },
      { "month": "Feb", "value": 146.86 },
      { "month": "Mar", "value": 154 },
      { "month": "Apr", "value": 154.74 },
      { "month": "May", "value": 147.08 },
      { "month": "June", "value": 156.14 },
      { "month": "July", "value": 156.25 },
      { "month": "Aug", "value": 132 },
      { "month": "Sep", "value": 154.74 },
      { "month": "Oct", "value": 147.08 },
      { "month": "Nov", "value": 126.14 },
      { "month": "Dec", "value": 156.25 }
    ]
  };

  // Week Data
  const energyConsumptionData2 = {
    "Power Consumption": [
      { "Week": "Week 1", "value": 98.62 },
      { "Week": "Week 2", "value": 46.86 },
      { "Week": "Week 3", "value": 76.984 },
      { "Week": "Week 4", "value": 85.74 }
    ],
    "Burning Hours": [
      { "Week": "Week 1", "value": 132.64 },
      { "Week": "Week 2", "value": 187.36 },
      { "Week": "Week 3", "value": 271.57 },
      { "Week": "Week 4", "value": 325.84000000000003 }
    ]
  };

  // Day Data 

  const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({
    "Power Consumption": [],
    "Burning Hours": [],
  });

    const fetchEnergyConsumptionData = async () => {
        try {
            const response = await fetch('https://mda.lucyday.io/Lucy/TataStreetLightAPI/getPowerAndBurningConsumption?hierarchy=%D9%85%D9%86%D8%B7%D9%82%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%2C%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%2C%D8%A7%D9%84%D8%B7%D8%B1%D9%82%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9%2C%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D9%85%20%D9%85%D8%B3%D9%84%D9%85&start=2024-02-01T08%3A07%3A38.057Z&end=2024-02-24T08%3A07%3A38.057Z', {
                headers: {
                    'Authorization': 'APIKEY SC:mda:307d91db4fe4f10b',
                    'Cookie': '.AspNetCore.Session=NGY2MGJkZDktMGJkYS0wZWFhLTQwNjgtY2FiYzRiMTJkNThl',
                },
            });
            

            if (response.ok) {
              const data = await response.json();
             
              setEnergyConsumptionData({
                "Power Consumption": data["Power Consumption"],
                "Burning Hours": data["Burning Hours"],
              });
            } else {
              console.error('Failed to fetch data');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        useEffect(() => {
          fetchEnergyConsumptionData();
        }, []);


 
 

      
    const [toggleFilterValue, setToggleFilterValue] = useState("day");

  const handleFilterChange = (value: React.SetStateAction<string>) => {
    console.log("Selected Filter Value:", value);
    setToggleFilterValue(value);
  };

  const transformData = (rawData: EnergyConsumptionData, filterType: string) => {
    const powerConsumptionData = rawData["Power Consumption"] as PowerConsumptionEntry[];
    const burningHoursData = rawData["Burning Hours"] as PowerConsumptionEntry[];
  
 
    if (!powerConsumptionData || !burningHoursData || powerConsumptionData.length !== burningHoursData.length) {
      return [];
    }
  
    const transformedData = powerConsumptionData.map((entry, index) => {
      const { month, Week, Day, value } = entry;
      const burningHoursValue = burningHoursData[index].value;
  
      return {
        name: filterType === 'day' ? Day : month || Week,
        powerConsumption: value || 0,  
        burningHours: burningHoursValue || 0,  
      };
    });
  
    return transformedData;
  };
  
  
  const transformedData1 = transformData(energyConsumptionData1, 'month');
  const transformedData2 = transformData(energyConsumptionData2, 'week');
  const transformedData3 = transformData(energyConsumptionData, 'day');
  
  const filterToDataMap: FilterToDataMap = {
    month: transformedData1,
    week: transformedData2,
    day: transformedData3,
  };
  
  const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;
  
    return (
      <WidgetWrapper className="smart-city_box energy_consumption-box">
        <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
        <div className="smart-city-content">
          <div className="technician_chart">
            <div className='chart-top'>
              <div className="sub_title_bar">Total kWh</div>
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
            <ResponsiveContainer>
             
            <AreaChart
              data={selectedData}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />

                  <Area
                    type="monotone"
                    dataKey="powerConsumption" 
                    name="Power Consumption"
                    stackId="1"
                    stroke="#001912"
                    fill="url(#gradient1)"
                    yAxisId="left"
                  />
                  <Area
                    type="monotone"
                    dataKey="burningHours" 
                    name="Burning Hours"
                    stackId="1"
                    stroke="#79dccc"
                    fill="url(#gradient2)"
                    yAxisId="left"
                  />
              <Area
                type="monotone"
                dataKey="hours"
                stackId="0"
                fill="url(#gradient3)"
                yAxisId="right"
                style={{ display: "none" }}
                legendType="none"
              />
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#065168" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#065168" stopOpacity={0.7} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#79dccc" stopOpacity={0.7} />
                </linearGradient>
              </defs>
            </AreaChart>



            </ResponsiveContainer>
          </div>
        </div>
      </WidgetWrapper>
    );
  };
  
  export default EnergyConsumption;









 


  
// import React, { useState, useEffect } from 'react';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
// import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
// import { IContextProvider } from '../uxp';

// interface EnergyConsumptionData {
//   "Power Consumption": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
//   "Burning Hours": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
// }
// interface FilterToDataMap {
//   [key: string]: { name: any; powerConsumption: number; burningHours: number }[];
// }
// interface PowerConsumptionEntry {
//   month?: string;
//   Week?: string;
//   Day?: string;   
//   value: number;
// }

// interface IWidgetProps { 
//   instanceId?: string,
//   uxpContext?: IContextProvider,

// }
// const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => {
 
 
//     //Month Data// 
//   const energyConsumptionData1 = {
//     "Power Consumption": [
//       { "month": "Jan", "value": 250.62 },
//       { "month": "Feb", "value": 374.86 },
//       { "month": "Mar", "value": 254 },
//       { "month": "Apr", "value": 365.74 },
//       { "month": "May", "value": 347.08 },
//       { "month": "June", "value": 356.14 },
//       { "month": "July", "value": 256.25 },
//       { "month": "Aug", "value": 346.980000000000004 },
//       { "month": "Sep", "value": 454.74 },
//       { "month": "Oct", "value": 547.08 },
//       { "month": "Nov", "value": 356.14 },
//       { "month": "Dec", "value": 456.25 }
//     ],
//     "Burning Hours": [
//       { "month": "Jan", "value": 118.62 },
//       { "month": "Feb", "value": 146.86 },
//       { "month": "Mar", "value": 154 },
//       { "month": "Apr", "value": 154.74 },
//       { "month": "May", "value": 147.08 },
//       { "month": "June", "value": 156.14 },
//       { "month": "July", "value": 156.25 },
//       { "month": "Aug", "value": 132 },
//       { "month": "Sep", "value": 154.74 },
//       { "month": "Oct", "value": 147.08 },
//       { "month": "Nov", "value": 126.14 },
//       { "month": "Dec", "value": 156.25 }
//     ]
//   };

//   // Week Data
//   const energyConsumptionData2 = {
//     "Power Consumption": [
//       { "Week": "Week 1", "value": 98.62 },
//       { "Week": "Week 2", "value": 46.86 },
//       { "Week": "Week 3", "value": 76.984 },
//       { "Week": "Week 4", "value": 85.74 }
//     ],
//     "Burning Hours": [
//       { "Week": "Week 1", "value": 132.64 },
//       { "Week": "Week 2", "value": 187.36 },
//       { "Week": "Week 3", "value": 271.57 },
//       { "Week": "Week 4", "value": 325.84000000000003 }
//     ]
//   };

//   // Day Data 

//   const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({
//     "Power Consumption": [],
//     "Burning Hours": [],
//   });
 

//   function getEnergyConsumptionData () {

//     const hierarchy = 'منطقة المدينة,المدينة,الطرق الرئيسية,السيح';
//     const startDate = '2024-02-01T08%3A07%3A38.057Z';
//     const endDate = '2024-02-24T08%3A07%3A38.057Z';

//       props.uxpContext.executeAction("TataStreetLightAPI","Power Consumption and Burning Hours",{hierarchy:hierarchy,start:start, end:end},{json:true}).then((res: any[])=>{  
//         setEnergyConsumptionData(res[0]);
//       }).catch((e: any)=>{
//           // console.log("hi", e);
//       }); 
//   }

  
  
//   React.useEffect(() =>{
//     getEnergyConsumptionData();
//   }, []) 

      
//         const [toggleFilterValue, setToggleFilterValue] = useState("day");

//   const handleFilterChange = (value: React.SetStateAction<string>) => {
//     console.log("Selected Filter Value:", value);
//     setToggleFilterValue(value);
//   };

//   const transformData = (rawData: EnergyConsumptionData, filterType: string) => {
//     const powerConsumptionData = rawData["Power Consumption"] as PowerConsumptionEntry[];
//     const burningHoursData = rawData["Burning Hours"] as PowerConsumptionEntry[];
  
 
//     if (!powerConsumptionData || !burningHoursData || powerConsumptionData.length !== burningHoursData.length) {
//       return [];
//     }
  
//     const transformedData = powerConsumptionData.map((entry, index) => {
//       const { month, Week, Day, value } = entry;
//       const burningHoursValue = burningHoursData[index].value;
  
//       return {
//         name: filterType === 'day' ? Day : month || Week,
//         powerConsumption: value || 0,  
//         burningHours: burningHoursValue || 0,  
//       };
//     });
  
//     return transformedData;
//   };
  
  
//   const transformedData1 = transformData(energyConsumptionData1, 'month');
//   const transformedData2 = transformData(energyConsumptionData2, 'week');
//   const transformedData3 = transformData(energyConsumptionData, 'day');
  
//   const filterToDataMap: FilterToDataMap = {
//     month: transformedData1,
//     week: transformedData2,
//     day: transformedData3,
//   };
  
//   const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;
  
//     return (
//       <WidgetWrapper className="smart-city_box energy_consumption-box">
//         <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//         <div className="smart-city-content">
//           <div className="technician_chart">
//             <div className='chart-top'>
//               <div className="sub_title_bar">Total kWh</div>
//               <ToggleFilter
//                 options={[
//                   { label: "7D", value: "day" },
//                   { label: "1M", value: "week" },
//                   { label: "1Y", value: "month" },
//                 ]}
//                 value={toggleFilterValue}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <ResponsiveContainer>
             
//             <AreaChart
//               data={selectedData}
//               margin={{
//                 top: 10,
//                 right: 0,
//                 left: 0,
//                 bottom: 30,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis yAxisId="left" />
//               <YAxis yAxisId="right" orientation="right" />
//               <Tooltip />
//               <Legend />

//                   <Area
//                     type="monotone"
//                     dataKey="powerConsumption" // Use the correct key for "Power Consumption"
//                     name="Power Consumption"
//                     stackId="1"
//                     stroke="#001912"
//                     fill="url(#gradient1)"
//                     yAxisId="left"
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="burningHours" // Use the correct key for "Burning Hours"
//                     name="Burning Hours"
//                     stackId="1"
//                     stroke="#79dccc"
//                     fill="url(#gradient2)"
//                     yAxisId="left"
//                   />
//               <Area
//                 type="monotone"
//                 dataKey="hours"
//                 stackId="0"
//                 fill="url(#gradient3)"
//                 yAxisId="right"
//                 style={{ display: "none" }}
//                 legendType="none"
//               />
//               <defs>
//                 <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#065168" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#065168" stopOpacity={0.7} />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#79dccc" stopOpacity={0.7} />
//                 </linearGradient>
//               </defs>
//             </AreaChart>



//             </ResponsiveContainer>
//           </div>
//         </div>
//       </WidgetWrapper>
//     );
//   };
  
//   export default EnergyConsumption;










// import React, { useState, useEffect } from 'react';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
// import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
 
// interface EnergyConsumptionData {
//   "Power Consumption": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
//   "Burning Hours": { month: string; value: number }[] | { Week: string; value: number }[] | { day: string; value: number }[];
// }
// interface FilterToDataMap {
//   [key: string]: { name: any; powerConsumption: number; burningHours: number }[];
// }
// interface PowerConsumptionEntry {
//   month?: string;
//   Week?: string;
//   Day?: string;   
//   value: number;
// }
 
// const EnergyConsumption : React.FunctionComponent<{}> = (props) => {
 
//     //Month Data// 
//   const energyConsumptionData1 = {
//     "Power Consumption": [
//       { "month": "Jan", "value": 250.62 },
//       { "month": "Feb", "value": 374.86 },
//       { "month": "Mar", "value": 254 },
//       { "month": "Apr", "value": 365.74 },
//       { "month": "May", "value": 347.08 },
//       { "month": "June", "value": 356.14 },
//       { "month": "July", "value": 256.25 },
//       { "month": "Aug", "value": 346.980000000000004 },
//       { "month": "Sep", "value": 454.74 },
//       { "month": "Oct", "value": 547.08 },
//       { "month": "Nov", "value": 356.14 },
//       { "month": "Dec", "value": 456.25 }
//     ],
//     "Burning Hours": [
//       { "month": "Jan", "value": 118.62 },
//       { "month": "Feb", "value": 146.86 },
//       { "month": "Mar", "value": 154 },
//       { "month": "Apr", "value": 154.74 },
//       { "month": "May", "value": 147.08 },
//       { "month": "June", "value": 156.14 },
//       { "month": "July", "value": 156.25 },
//       { "month": "Aug", "value": 132 },
//       { "month": "Sep", "value": 154.74 },
//       { "month": "Oct", "value": 147.08 },
//       { "month": "Nov", "value": 126.14 },
//       { "month": "Dec", "value": 156.25 }
//     ]
//   };

//   // Week Data
//   const energyConsumptionData2 = {
//     "Power Consumption": [
//       { "Week": "Week 1", "value": 98.62 },
//       { "Week": "Week 2", "value": 46.86 },
//       { "Week": "Week 3", "value": 76.984 },
//       { "Week": "Week 4", "value": 85.74 }
//     ],
//     "Burning Hours": [
//       { "Week": "Week 1", "value": 132.64 },
//       { "Week": "Week 2", "value": 187.36 },
//       { "Week": "Week 3", "value": 271.57 },
//       { "Week": "Week 4", "value": 325.84000000000003 }
//     ]
//   };

//   // Day Data 

//   const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({
//     "Power Consumption": [],
//     "Burning Hours": [],
//   });

//     const fetchEnergyConsumptionData = async () => {
//         try {
//             const response = await fetch('https://mda.lucyday.io/Lucy/TataStreetLightAPI/getPowerAndBurningConsumption?hierarchy=%D9%85%D9%86%D8%B7%D9%82%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%2C%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%2C%D8%A7%D9%84%D8%B7%D8%B1%D9%82%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9%2C%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D9%85%20%D9%85%D8%B3%D9%84%D9%85&start=2024-02-01T08%3A07%3A38.057Z&end=2024-02-24T08%3A07%3A38.057Z', {
//                 headers: {
//                     'Authorization': 'APIKEY SC:mda:307d91db4fe4f10b',
//                     'Cookie': '.AspNetCore.Session=NGY2MGJkZDktMGJkYS0wZWFhLTQwNjgtY2FiYzRiMTJkNThl',
//                 },
//             });
            

//             if (response.ok) {
//               const data = await response.json();
//               // Assuming the API returns an array directly, adjust accordingly
//               setEnergyConsumptionData({
//                 "Power Consumption": data["Power Consumption"],
//                 "Burning Hours": data["Burning Hours"],
//               });
//             } else {
//               console.error('Failed to fetch data');
//             }
//           } catch (error) {
//             console.error('Error fetching data:', error);
//           }
//         };
      
//         useEffect(() => {
//           fetchEnergyConsumptionData();
//         }, []);
      
//         const [toggleFilterValue, setToggleFilterValue] = useState("day");

//   const handleFilterChange = (value: React.SetStateAction<string>) => {
//     console.log("Selected Filter Value:", value);
//     setToggleFilterValue(value);
//   };

//   const transformData = (rawData: EnergyConsumptionData, filterType: string) => {
//     const powerConsumptionData = rawData["Power Consumption"] as PowerConsumptionEntry[];
//     const burningHoursData = rawData["Burning Hours"] as PowerConsumptionEntry[];
  
//     if (!powerConsumptionData || !burningHoursData) {
//       return [];
//     }
  
//     const transformedData = powerConsumptionData.map((entry, index) => {
//       const { month, Week, Day, value } = entry;
//       const burningHoursValue = burningHoursData[index].value;  
  
//       return {
//         name: filterType === 'day' ? Day : month || Week,
//         powerConsumption: value,
//         burningHours: burningHoursValue,  
//       };
//     });
  
//     return transformedData;
//   };
  
    
//   const transformedData1 = transformData(energyConsumptionData1, 'month');
//   const transformedData2 = transformData(energyConsumptionData2, 'week');
//   const transformedData3 = transformData(energyConsumptionData, 'day');

//   const filterToDataMap: FilterToDataMap = {
//     month: transformedData1,
//     week: transformedData2,
//     day: transformedData3,
//   };

//   const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;

  
//     return (
//       <WidgetWrapper className="smart-city_box energy_consumption-box">
//         <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//         <div className="smart-city-content">
//           <div className="technician_chart" style={{ height: 270 }}>
//             <div className='chart-top'>
//               <div className="sub_title_bar">Total kWh</div>
//               <ToggleFilter
//                 options={[
//                   { label: "7D", value: "day" },
//                   { label: "1M", value: "week" },
//                   { label: "1Y", value: "month" },
//                 ]}
//                 value={toggleFilterValue}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <ResponsiveContainer>
             
//             <AreaChart
//               data={selectedData}
//               margin={{
//                 top: 10,
//                 right: 0,
//                 left: 0,
//                 bottom: 30,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis yAxisId="left" />
//               <YAxis yAxisId="right" orientation="right" />
//               <Tooltip />
//               <Legend />
//               <Area
//               type="monotone"
//               dataKey="powerConsumption"
//               name="Power Consumption"
//               stackId="1"
//               stroke="#001912"
//               fill="url(#gradient1)"
//               yAxisId="left"
//             />
//             <Area
//               type="monotone"
//               dataKey="burningHours"
//               name="Burning Hours"
//               stackId="1"
//               stroke="#79dccc"
//               fill="url(#gradient2)"
//               yAxisId="left"
//             />
//               <Area
//                 type="monotone"
//                 dataKey="hours"
//                 stackId="0"
//                 fill="url(#gradient3)"
//                 yAxisId="right"
//                 style={{ display: "none" }}
//                 legendType="none"
//               />
//               <defs>
//                 <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#065168" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#065168" stopOpacity={0.7} />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#79dccc" stopOpacity={0.7} />
//                 </linearGradient>
//               </defs>
//             </AreaChart>



//             </ResponsiveContainer>
//           </div>
//         </div>
//       </WidgetWrapper>
//     );
//   };
  
//   export default EnergyConsumption;












// import React, { useState, useEffect } from 'react';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
// import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
 
  
// const EnergyConsumption : React.FunctionComponent<{}> = (props) => {

  
   
//     //Month Data//
//     const energyConsumptionData1  =  {
//             "Burning Hours": [
//               {
//                 "time": "2024-02-01T11:21:44.435Z",
//                 "value": 32.08
//               },
//               {
//                 "time": "2024-02-03T13:04:14.000Z",
//                 "value": 54.23
//               },
//               {
//                 "time": "2024-02-01T11:16:20.000Z",
//                 "value": 167.21
//               },
//               {
//                 "time": "2024-02-01T03:56:06.000Z",
//                 "value": 76.43
//               },
//               {
//                 "time": "2024-02-01T14:07:09.000Z",
//                 "value": 54.23
//               },
//               {
//                 "time": "2024-02-05T08:50:40.069Z",
//                 "value": 162.5
//               },
//               {
//                 "time": "2024-03-05T09:58:37.596Z",
//                 "value": 162.5
//               },
//               {
//                 "time": "2024-02-05T10:02:07.100Z",
//                 "value": 124.5
//               },
//               {
//                 "time": "2024-02-06T00:05:39.124Z",
//                 "value": 121.67
//               },
//               {
//                 "time": "2024-05-06T04:06:50.971Z",
//                 "value": 161.22
//               },
//               {
//                 "time": "2024-02-07T00:05:37.879Z",
//                 "value": 98.46
//               },
//               {
//                 "time": "2024-02-09T00:05:38.679Z",
//                 "value": 108.98
//               },
//               {
//                 "time": "2024-02-10T00:05:39.091Z",
//                 "value": 122.07
//               },
//               {
//                 "time": "2024-04-11T00:05:38.685Z",
//                 "value": 107.64
//               },
//               {
//                 "time": "2024-02-13T00:05:39.759Z",
//                 "value": 110.35
//               },
//               {
//                 "time": "2024-02-14T00:05:45.514Z",
//                 "value": 153.29
//               },
//               {
//                 "time": "2024-02-16T00:05:45.875Z",
//                 "value": 132.14
//               },
//               {
//                 "time": "2024-02-17T00:05:40.984Z",
//                 "value": 154.51
//               },
//               {
//                 "time": "2024-04-19T00:05:43.915Z",
//                 "value": 54.86
//               },
//               {
//                 "time": "2024-02-21T00:05:44.223Z",
//                 "value": 110.09
//               },
//               {
//                 "time": "2024-02-22T00:05:44.169Z",
//                 "value": 115.2
//               }
//             ],
//             "Power Consumption": [
//               {
//                 "time": "2024-03-01T11:21:44.435Z",
//                 "value": 154.44
//               },
//               {
//                 "time": "2024-04-01T13:04:14.000Z",
//                 "value": 123.18
//               },
//               {
//                 "time": "2024-02-01T13:16:20.000Z",
//                 "value": 54.18
//               },
//               {
//                 "time": "2024-02-01T13:56:06.000Z",
//                 "value": 142.18
//               },
//               {
//                 "time": "2024-05-01T14:07:09.000Z",
//                 "value": 112.18
//               },
//               {
//                 "time": "2024-02-05T08:50:40.069Z",
//                 "value": 12.87
//               },
//               {
//                 "time": "2024-4-05T09:58:37.596Z",
//                 "value": 24.12
//               },
//               {
//                 "time": "2024-02-05T10:02:07.100Z",
//                 "value": 114.12
//               },
//               {
//                 "time": "2024-02-06T00:05:39.124Z",
//                 "value": 78.78
//               },
//               {
//                 "time": "2024-04-06T04:06:50.971Z",
//                 "value": 114.96
//               },
//               {
//                 "time": "2024-02-07T00:05:37.879Z",
//                 "value": 17.62
//               },
//               {
//                 "time": "2024-02-09T00:05:38.679Z",
//                 "value": 88.71
//               },
//               {
//                 "time": "2024-02-10T00:05:39.091Z",
//                 "value": 18.78
//               },
//               {
//                 "time": "2024-05-11T00:05:38.685Z",
//                 "value": 118.62
//               },
//               {
//                 "time": "2024-04-13T00:05:39.759Z",
//                 "value": 96.02
//               },
//               {
//                 "time": "2024-02-14T00:05:45.514Z",
//                 "value": 54.2
//               },
//               {
//                 "time": "2024-02-16T00:05:45.875Z",
//                 "value": 32.81
//               },
//               {
//                 "time": "2024-02-17T00:05:40.984Z",
//                 "value": 87.77
//               },
//               {
//                 "time": "2024-02-19T00:05:43.915Z",
//                 "value": 76.74
//               },
//               {
//                 "time": "2024-02-21T00:05:44.223Z",
//                 "value": 32.92
//               },
//               {
//                 "time": "2024-02-22T00:05:44.169Z",
//                 "value": 56.9
//               }
//             ]
//           } 
//     //Week Data//
//     const energyConsumptionData2  =  {
//             "Burning Hours": [
//               {
//                 "time": "2024-02-01T11:21:44.435Z",
//                 "value": 87.08
//               },
//               {
//                 "time": "2024-02-01T13:04:14.000Z",
//                 "value": 95.23
//               },
//               {
//                 "time": "2024-02-01T13:16:20.000Z",
//                 "value": 38.23
//               },
//               {
//                 "time": "2024-02-01T13:56:06.000Z",
//                 "value": 146.23
//               },
//               {
//                 "time": "2024-02-01T14:07:09.000Z",
//                 "value": 161.25
//               },
//               {
//                 "time": "2024-02-05T08:50:40.069Z",
//                 "value": 162.17
//               },
//               {
//                 "time": "2024-02-05T09:58:37.596Z",
//                 "value": 105.5
//               },
//               {
//                 "time": "2024-02-05T10:02:07.100Z",
//                 "value": 162.5
//               },
//               {
//                 "time": "2024-02-06T00:05:39.124Z",
//                 "value": 108.67
//               },
//               {
//                 "time": "2024-02-06T04:06:50.971Z",
//                 "value": 161.22
//               },
//               {
//                 "time": "2024-02-07T00:05:37.879Z",
//                 "value": 157.46
//               },
//               {
//                 "time": "2024-02-09T00:05:38.679Z",
//                 "value": 108.98
//               },
//               {
//                 "time": "2024-02-10T00:05:39.091Z",
//                 "value": 100.14
//               },
//               {
//                 "time": "2024-02-11T00:05:38.685Z",
//                 "value": 107.64
//               },
//               {
//                 "time": "2024-02-13T00:05:39.759Z",
//                 "value": 110.35
//               },
//               {
//                 "time": "2024-02-14T00:05:45.514Z",
//                 "value": 106.29
//               },
//               {
//                 "time": "2024-02-16T00:05:45.875Z",
//                 "value": 137.14
//               },
//               {
//                 "time": "2024-02-17T00:05:40.984Z",
//                 "value": 112.51
//               },
//               {
//                 "time": "2024-02-19T00:05:43.915Z",
//                 "value": 87.35
//               },
//               {
//                 "time": "2024-02-21T00:05:44.223Z",
//                 "value": 142.02
//               },
//               {
//                 "time": "2024-02-22T00:05:44.169Z",
//                 "value": 109.2
//               }
//             ],
//             "Power Consumption": [
//               {
//                 "time": "2024-02-01T11:21:44.435Z",
//                 "value": 128.44
//               },
//               {
//                 "time": "2024-02-01T13:04:14.000Z",
//                 "value": 152.18
//               },
//               {
//                 "time": "2024-02-01T13:16:20.000Z",
//                 "value": 118.54
//               },
//               {
//                 "time": "2024-02-01T13:56:06.000Z",
//                 "value": 132.18
//               },
//               {
//                 "time": "2024-02-01T14:07:09.000Z",
//                 "value": 153.18
//               },
//               {
//                 "time": "2024-02-05T08:50:40.069Z",
//                 "value": 134.12
//               },
//               {
//                 "time": "2024-02-05T09:58:37.596Z",
//                 "value": 124.3
//               },
//               {
//                 "time": "2024-02-05T10:02:07.100Z",
//                 "value": 94.54
//               },
//               {
//                 "time": "2024-02-06T00:05:39.124Z",
//                 "value": 98.78
//               },
//               {
//                 "time": "2024-02-06T04:06:50.971Z",
//                 "value": 68.96
//               },
//               {
//                 "time": "2024-02-07T00:05:37.879Z",
//                 "value": 87.62
//               },
//               {
//                 "time": "2024-02-09T00:05:38.679Z",
//                 "value": 12.71
//               },
//               {
//                 "time": "2024-02-10T00:05:39.091Z",
//                 "value": 67.78
//               },
//               {
//                 "time": "2024-02-11T00:05:38.685Z",
//                 "value": 85.62
//               },
//               {
//                 "time": "2024-02-13T00:05:39.759Z",
//                 "value": 65.02
//               },
//               {
//                 "time": "2024-02-14T00:05:45.514Z",
//                 "value": 98.2
//               },
//               {
//                 "time": "2024-02-16T00:05:45.875Z",
//                 "value": 68.81
//               },
//               {
//                 "time": "2024-02-17T00:05:40.984Z",
//                 "value": 58.77
//               },
//               {
//                 "time": "2024-02-19T00:05:43.915Z",
//                 "value": 176.74
//               },
//               {
//                 "time": "2024-02-21T00:05:44.223Z",
//                 "value": 134.92
//               },
//               {
//                 "time": "2024-02-22T00:05:44.169Z",
//                 "value": 87.9
//               }
//             ]
//           }  
  
 
//  //Day Data//
//     const [energyConsumptionData, setEnergyConsumptionData] = React.useState<any[]>([]); 

//     const fetchEnergyConsumptionData = async () => {
//         try {
//             const response = await fetch('https://mda.lucyday.io/Lucy/TataStreetLightAPI/getPowerAndBurningConsumption?hierarchy=%D9%85%D9%86%D8%B7%D9%82%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%2C%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%2C%D8%A7%D9%84%D8%B7%D8%B1%D9%82%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9%2C%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D9%85%20%D9%85%D8%B3%D9%84%D9%85&start=2024-02-01T08%3A07%3A38.057Z&end=2024-02-24T08%3A07%3A38.057Z', {
//                 headers: {
//                     'Authorization': 'APIKEY SC:mda:307d91db4fe4f10b',
//                     'Cookie': '.AspNetCore.Session=NGY2MGJkZDktMGJkYS0wZWFhLTQwNjgtY2FiYzRiMTJkNThl',
//                 },
//             });
            

//             if (response.ok) {
//             const data = await response.json();
//             setEnergyConsumptionData(data);
//             } else {
//             console.error('Failed to fetch data');
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchEnergyConsumptionData();
//     }, []); 

  
//     const energyConsumptionData3 = energyConsumptionData;  


//     const getWeekNumberInMonth = (date: Date): number => {
//       const d = new Date(date);
//       d.setHours(0, 0, 0, 0);
//       d.setDate(d.getDate() + 4 - (d.getDay() || 7));
//       const monthStart = new Date(d.getFullYear(), d.getMonth(), 1);
//       const weekNumber = Math.ceil(((d.getTime() - monthStart.getTime()) / 86400000 + 1) / 7);
//       return weekNumber;
//     };

//     const transformData = (data: any, filterType: string) => {
//       if (data && data["Burning Hours"] && data["Power Consumption"]) {
        
//         const sortedData = data["Burning Hours"].sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime());
    
//         const uniqueKeyMap: Record<string, { burning_hours: number; power_consumption: number; time: Date }> = {};
    
//         sortedData.forEach((entry: any, index: number) => {
//           const time = new Date(entry.time);
//           let key = '';
    
//           if (filterType === 'day') {
//             key = time.toISOString().split('T')[0];
//           } else if (filterType === 'week') {
//             const weekNumber = getWeekNumberInMonth(time);
//             key = `Week ${weekNumber}`;
//           } else if (filterType === 'month') {
//             key = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(time);
//           }
    
//           if (!uniqueKeyMap[key] || uniqueKeyMap[key].time < time) {
//             uniqueKeyMap[key] = {
//               burning_hours: entry.value,
//               power_consumption: data["Power Consumption"][index]?.value || 0,
//               time: time,
//             };
//           }
//         });
    
//         return Object.values(uniqueKeyMap).map(({ time, burning_hours, power_consumption }) => {
//           let axisLabel = '';
    
//           if (filterType === 'day') {
//             axisLabel = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(time);
//           } else if (filterType === 'week') {
//             const weekNumber = getWeekNumberInMonth(time);
//             axisLabel = `Week ${weekNumber}`;
//           } else if (filterType === 'month') {
//             axisLabel = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(time);
//           }
    
//           const hours =
//             time.getHours().toString().padStart(2, '0') +
//             ':' +
//             time.getMinutes().toString().padStart(2, '0');
    
//           return {
//             name: axisLabel,
//             burning_hours,
//             power_consumption,
//             hours,
//           };
//         });
//       } else {
//         return [];
//       }
//     };
    
     
     
//    // Function to get the week number
//     const getWeekNumber = (date: Date): number => {
//       const d = new Date(date);
//       d.setHours(0, 0, 0, 0);
//       d.setDate(d.getDate() + 4 - (d.getDay() || 7));
//       const yearStart = new Date(d.getFullYear(), 0, 1);
//       const weekNumber = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
//       return weekNumber;
//     };
 
    
     
//     const transformedData1 = transformData(energyConsumptionData1, 'month');
//     const transformedData2 = transformData(energyConsumptionData2, 'week');
//     const transformedData3 = transformData(energyConsumptionData, 'day');

  
    
//       const [toggleFilterValue, setToggleFilterValue] = React.useState<string>("day");  

//       const handleFilterChange = (value: any) => {
//         console.log("Selected Filter Value:", value);
//         setToggleFilterValue(value);
//       };
    
//       const filterToDataMap: Record<string, Array<{ name: string; power_consumption: number; burning_hours: number; hours: string; }>> = {
//         month: transformedData1,
//         week: transformedData2,
//         day: transformedData3,
//       };
    
//       const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;
 
                   
//                     return (
//                         <WidgetWrapper className="smart-city_box energy_consumption-box">
//                             <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>  
                          
//                                 <div className="smart-city-content">
//                                     <div className="technician_chart" style={{ height: 270 }}>
//                                     <div className='chart-top'>
//                                         <div className="sub_title_bar">Total kWh</div>
//                                         <ToggleFilter
//                                         options={[
//                                             { label: "7D", value: "day" },
//                                             { label: "1M", value: "week" },
//                                             { label: "1Y", value: "month" },
//                                         ]}
//                                         value={toggleFilterValue}
//                                         onChange={handleFilterChange}
//                                         />
//                                     </div>
                            
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <AreaChart
//                                         width={400}
//                                         height={300}
//                                         data={selectedData}
//                                         margin={{
//                                             top: 10,
//                                             right: 0,
//                                             left: 0,
//                                             bottom: 30,
//                                         }}
//                                         >
//                                         <CartesianGrid strokeDasharray="3 3" />
//                                         <XAxis dataKey="name" />
//                                         <YAxis yAxisId="left" />
//                                         <YAxis yAxisId="right" orientation="right" />
//                                         <Tooltip />
//                                         <Legend />
                            
//                                         <Area
//                                             type="monotone"
//                                             dataKey="power_consumption"
//                                             stackId="1"
//                                             stroke="#001912"
//                                             fill="url(#gradient1)"
//                                             yAxisId="left"
//                                         /> 

//                                             <Area
//                                                 type="monotone"
//                                                 dataKey="burning_hours"
//                                                 stackId="1"
//                                                 stroke="#79dccc"
//                                                 fill="url(#gradient2)"
//                                                 yAxisId="left"
//                                             />

//                                             <Area
//                                                 type="monotone"
//                                                 dataKey="hours"
//                                                 stackId="0" 
//                                                 fill="url(#gradient3)"
//                                                 yAxisId="right"
//                                                 style={{display: "none"}}
//                                                 legendType="none" 
//                                             />
                            
//                                                 <defs>
//                                                 <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                                                     <stop offset="5%" stopColor="#065168" stopOpacity={0.8} />
//                                                     <stop offset="95%" stopColor="#065168" stopOpacity={0.7} />
//                                                 </linearGradient>

//                                                 <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                                                     <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
//                                                     <stop offset="95%" stopColor="#79dccc" stopOpacity={0.7} />
//                                                 </linearGradient> 
                                                    
//                                             </defs>
//                                         </AreaChart>
//                                     </ResponsiveContainer>
//                                     </div>
//                                 </div>
//                         </WidgetWrapper>
//                       );
//                     };

// export default EnergyConsumption;
















// import React, { useState, useEffect } from 'react';
// import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
// import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
 
  
// const EnergyConsumption : React.FunctionComponent<{}> = (props) => {

  
   
//     //Month Data//
//     const energyConsumptionData1  = [  
//         {
//             "Burning Hours": [
//               {
//                 "time": "2024-02-01T11:21:44.435Z",
//                 "value": 32.08
//               },
//               {
//                 "time": "2024-02-03T13:04:14.000Z",
//                 "value": 54.23
//               },
//               {
//                 "time": "2024-02-01T11:16:20.000Z",
//                 "value": 167.21
//               },
//               {
//                 "time": "2024-02-01T03:56:06.000Z",
//                 "value": 76.43
//               },
//               {
//                 "time": "2024-02-01T14:07:09.000Z",
//                 "value": 54.23
//               },
//               {
//                 "time": "2024-02-05T08:50:40.069Z",
//                 "value": 162.5
//               },
//               {
//                 "time": "2024-02-05T09:58:37.596Z",
//                 "value": 162.5
//               },
//               {
//                 "time": "2024-02-05T10:02:07.100Z",
//                 "value": 124.5
//               },
//               {
//                 "time": "2024-02-06T00:05:39.124Z",
//                 "value": 121.67
//               },
//               {
//                 "time": "2024-02-06T04:06:50.971Z",
//                 "value": 161.22
//               },
//               {
//                 "time": "2024-02-07T00:05:37.879Z",
//                 "value": 98.46
//               },
//               {
//                 "time": "2024-02-09T00:05:38.679Z",
//                 "value": 108.98
//               },
//               {
//                 "time": "2024-02-10T00:05:39.091Z",
//                 "value": 122.07
//               },
//               {
//                 "time": "2024-02-11T00:05:38.685Z",
//                 "value": 107.64
//               },
//               {
//                 "time": "2024-02-13T00:05:39.759Z",
//                 "value": 110.35
//               },
//               {
//                 "time": "2024-02-14T00:05:45.514Z",
//                 "value": 153.29
//               },
//               {
//                 "time": "2024-02-16T00:05:45.875Z",
//                 "value": 132.14
//               },
//               {
//                 "time": "2024-02-17T00:05:40.984Z",
//                 "value": 154.51
//               },
//               {
//                 "time": "2024-02-19T00:05:43.915Z",
//                 "value": 54.86
//               },
//               {
//                 "time": "2024-02-21T00:05:44.223Z",
//                 "value": 110.09
//               },
//               {
//                 "time": "2024-02-22T00:05:44.169Z",
//                 "value": 115.2
//               }
//             ],
//             "Power Consumption": [
//               {
//                 "time": "2024-02-01T11:21:44.435Z",
//                 "value": 154.44
//               },
//               {
//                 "time": "2024-02-01T13:04:14.000Z",
//                 "value": 123.18
//               },
//               {
//                 "time": "2024-02-01T13:16:20.000Z",
//                 "value": 54.18
//               },
//               {
//                 "time": "2024-02-01T13:56:06.000Z",
//                 "value": 142.18
//               },
//               {
//                 "time": "2024-02-01T14:07:09.000Z",
//                 "value": 112.18
//               },
//               {
//                 "time": "2024-02-05T08:50:40.069Z",
//                 "value": 12.87
//               },
//               {
//                 "time": "2024-02-05T09:58:37.596Z",
//                 "value": 24.12
//               },
//               {
//                 "time": "2024-02-05T10:02:07.100Z",
//                 "value": 114.12
//               },
//               {
//                 "time": "2024-02-06T00:05:39.124Z",
//                 "value": 78.78
//               },
//               {
//                 "time": "2024-02-06T04:06:50.971Z",
//                 "value": 114.96
//               },
//               {
//                 "time": "2024-02-07T00:05:37.879Z",
//                 "value": 17.62
//               },
//               {
//                 "time": "2024-02-09T00:05:38.679Z",
//                 "value": 88.71
//               },
//               {
//                 "time": "2024-02-10T00:05:39.091Z",
//                 "value": 18.78
//               },
//               {
//                 "time": "2024-02-11T00:05:38.685Z",
//                 "value": 118.62
//               },
//               {
//                 "time": "2024-02-13T00:05:39.759Z",
//                 "value": 96.02
//               },
//               {
//                 "time": "2024-02-14T00:05:45.514Z",
//                 "value": 54.2
//               },
//               {
//                 "time": "2024-02-16T00:05:45.875Z",
//                 "value": 32.81
//               },
//               {
//                 "time": "2024-02-17T00:05:40.984Z",
//                 "value": 87.77
//               },
//               {
//                 "time": "2024-02-19T00:05:43.915Z",
//                 "value": 76.74
//               },
//               {
//                 "time": "2024-02-21T00:05:44.223Z",
//                 "value": 32.92
//               },
//               {
//                 "time": "2024-02-22T00:05:44.169Z",
//                 "value": 56.9
//               }
//             ]
//           }

//     ]; 
//     //Week Data//
//     const energyConsumptionData2  = [  
//         {
//             "Burning Hours": [
//               {
//                 "time": "2024-02-01T11:21:44.435Z",
//                 "value": 87.08
//               },
//               {
//                 "time": "2024-02-01T13:04:14.000Z",
//                 "value": 95.23
//               },
//               {
//                 "time": "2024-02-01T13:16:20.000Z",
//                 "value": 38.23
//               },
//               {
//                 "time": "2024-02-01T13:56:06.000Z",
//                 "value": 146.23
//               },
//               {
//                 "time": "2024-02-01T14:07:09.000Z",
//                 "value": 161.25
//               },
//               {
//                 "time": "2024-02-05T08:50:40.069Z",
//                 "value": 162.17
//               },
//               {
//                 "time": "2024-02-05T09:58:37.596Z",
//                 "value": 105.5
//               },
//               {
//                 "time": "2024-02-05T10:02:07.100Z",
//                 "value": 162.5
//               },
//               {
//                 "time": "2024-02-06T00:05:39.124Z",
//                 "value": 108.67
//               },
//               {
//                 "time": "2024-02-06T04:06:50.971Z",
//                 "value": 161.22
//               },
//               {
//                 "time": "2024-02-07T00:05:37.879Z",
//                 "value": 157.46
//               },
//               {
//                 "time": "2024-02-09T00:05:38.679Z",
//                 "value": 108.98
//               },
//               {
//                 "time": "2024-02-10T00:05:39.091Z",
//                 "value": 100.14
//               },
//               {
//                 "time": "2024-02-11T00:05:38.685Z",
//                 "value": 107.64
//               },
//               {
//                 "time": "2024-02-13T00:05:39.759Z",
//                 "value": 110.35
//               },
//               {
//                 "time": "2024-02-14T00:05:45.514Z",
//                 "value": 106.29
//               },
//               {
//                 "time": "2024-02-16T00:05:45.875Z",
//                 "value": 137.14
//               },
//               {
//                 "time": "2024-02-17T00:05:40.984Z",
//                 "value": 112.51
//               },
//               {
//                 "time": "2024-02-19T00:05:43.915Z",
//                 "value": 87.35
//               },
//               {
//                 "time": "2024-02-21T00:05:44.223Z",
//                 "value": 142.02
//               },
//               {
//                 "time": "2024-02-22T00:05:44.169Z",
//                 "value": 109.2
//               }
//             ],
//             "Power Consumption": [
//               {
//                 "time": "2024-02-01T11:21:44.435Z",
//                 "value": 128.44
//               },
//               {
//                 "time": "2024-02-01T13:04:14.000Z",
//                 "value": 152.18
//               },
//               {
//                 "time": "2024-02-01T13:16:20.000Z",
//                 "value": 118.54
//               },
//               {
//                 "time": "2024-02-01T13:56:06.000Z",
//                 "value": 132.18
//               },
//               {
//                 "time": "2024-02-01T14:07:09.000Z",
//                 "value": 153.18
//               },
//               {
//                 "time": "2024-02-05T08:50:40.069Z",
//                 "value": 134.12
//               },
//               {
//                 "time": "2024-02-05T09:58:37.596Z",
//                 "value": 124.3
//               },
//               {
//                 "time": "2024-02-05T10:02:07.100Z",
//                 "value": 94.54
//               },
//               {
//                 "time": "2024-02-06T00:05:39.124Z",
//                 "value": 98.78
//               },
//               {
//                 "time": "2024-02-06T04:06:50.971Z",
//                 "value": 68.96
//               },
//               {
//                 "time": "2024-02-07T00:05:37.879Z",
//                 "value": 87.62
//               },
//               {
//                 "time": "2024-02-09T00:05:38.679Z",
//                 "value": 12.71
//               },
//               {
//                 "time": "2024-02-10T00:05:39.091Z",
//                 "value": 67.78
//               },
//               {
//                 "time": "2024-02-11T00:05:38.685Z",
//                 "value": 85.62
//               },
//               {
//                 "time": "2024-02-13T00:05:39.759Z",
//                 "value": 65.02
//               },
//               {
//                 "time": "2024-02-14T00:05:45.514Z",
//                 "value": 98.2
//               },
//               {
//                 "time": "2024-02-16T00:05:45.875Z",
//                 "value": 68.81
//               },
//               {
//                 "time": "2024-02-17T00:05:40.984Z",
//                 "value": 58.77
//               },
//               {
//                 "time": "2024-02-19T00:05:43.915Z",
//                 "value": 176.74
//               },
//               {
//                 "time": "2024-02-21T00:05:44.223Z",
//                 "value": 134.92
//               },
//               {
//                 "time": "2024-02-22T00:05:44.169Z",
//                 "value": 87.9
//               }
//             ]
//           }

//     ];  
   
//    // Day Data//
//     // const energyConsumptionData3  = [  
//     //     {
//     //         "Burning Hours": [
//     //           {
//     //             "time": "2024-02-01T11:21:44.435Z",
//     //             "value": 162.08
//     //           },
//     //           {
//     //             "time": "2024-02-01T13:04:14.000Z",
//     //             "value": 161.23
//     //           },
//     //           {
//     //             "time": "2024-02-01T13:16:20.000Z",
//     //             "value": 161.23
//     //           },
//     //           {
//     //             "time": "2024-02-01T13:56:06.000Z",
//     //             "value": 161.23
//     //           },
//     //           {
//     //             "time": "2024-02-01T14:07:09.000Z",
//     //             "value": 161.23
//     //           },
//     //           {
//     //             "time": "2024-02-05T08:50:40.069Z",
//     //             "value": 162.5
//     //           },
//     //           {
//     //             "time": "2024-02-05T09:58:37.596Z",
//     //             "value": 162.5
//     //           },
//     //           {
//     //             "time": "2024-02-05T10:02:07.100Z",
//     //             "value": 162.5
//     //           },
//     //           {
//     //             "time": "2024-02-06T00:05:39.124Z",
//     //             "value": 108.67
//     //           },
//     //           {
//     //             "time": "2024-02-06T04:06:50.971Z",
//     //             "value": 161.22
//     //           },
//     //           {
//     //             "time": "2024-02-07T00:05:37.879Z",
//     //             "value": 109.46
//     //           },
//     //           {
//     //             "time": "2024-02-09T00:05:38.679Z",
//     //             "value": 108.98
//     //           },
//     //           {
//     //             "time": "2024-02-10T00:05:39.091Z",
//     //             "value": 109.07
//     //           },
//     //           {
//     //             "time": "2024-02-11T00:05:38.685Z",
//     //             "value": 107.64
//     //           },
//     //           {
//     //             "time": "2024-02-13T00:05:39.759Z",
//     //             "value": 110.35
//     //           },
//     //           {
//     //             "time": "2024-02-14T00:05:45.514Z",
//     //             "value": 106.29
//     //           },
//     //           {
//     //             "time": "2024-02-16T00:05:45.875Z",
//     //             "value": 109.14
//     //           },
//     //           {
//     //             "time": "2024-02-17T00:05:40.984Z",
//     //             "value": 108.51
//     //           },
//     //           {
//     //             "time": "2024-02-19T00:05:43.915Z",
//     //             "value": 107.86
//     //           },
//     //           {
//     //             "time": "2024-02-21T00:05:44.223Z",
//     //             "value": 110.09
//     //           },
//     //           {
//     //             "time": "2024-02-22T00:05:44.169Z",
//     //             "value": 109.2
//     //           }
//     //         ],
//     //         "Power Consumption": [
//     //           {
//     //             "time": "2024-02-01T11:21:44.435Z",
//     //             "value": 28.44
//     //           },
//     //           {
//     //             "time": "2024-02-01T13:04:14.000Z",
//     //             "value": 28.18
//     //           },
//     //           {
//     //             "time": "2024-02-01T13:16:20.000Z",
//     //             "value": 28.18
//     //           },
//     //           {
//     //             "time": "2024-02-01T13:56:06.000Z",
//     //             "value": 28.18
//     //           },
//     //           {
//     //             "time": "2024-02-01T14:07:09.000Z",
//     //             "value": 28.18
//     //           },
//     //           {
//     //             "time": "2024-02-05T08:50:40.069Z",
//     //             "value": 28.12
//     //           },
//     //           {
//     //             "time": "2024-02-05T09:58:37.596Z",
//     //             "value": 28.12
//     //           },
//     //           {
//     //             "time": "2024-02-05T10:02:07.100Z",
//     //             "value": 28.12
//     //           },
//     //           {
//     //             "time": "2024-02-06T00:05:39.124Z",
//     //             "value": 18.78
//     //           },
//     //           {
//     //             "time": "2024-02-06T04:06:50.971Z",
//     //             "value": 27.96
//     //           },
//     //           {
//     //             "time": "2024-02-07T00:05:37.879Z",
//     //             "value": 17.62
//     //           },
//     //           {
//     //             "time": "2024-02-09T00:05:38.679Z",
//     //             "value": 18.71
//     //           },
//     //           {
//     //             "time": "2024-02-10T00:05:39.091Z",
//     //             "value": 18.78
//     //           },
//     //           {
//     //             "time": "2024-02-11T00:05:38.685Z",
//     //             "value": 18.62
//     //           },
//     //           {
//     //             "time": "2024-02-13T00:05:39.759Z",
//     //             "value": 19.02
//     //           },
//     //           {
//     //             "time": "2024-02-14T00:05:45.514Z",
//     //             "value": 18.2
//     //           },
//     //           {
//     //             "time": "2024-02-16T00:05:45.875Z",
//     //             "value": 18.81
//     //           },
//     //           {
//     //             "time": "2024-02-17T00:05:40.984Z",
//     //             "value": 18.77
//     //           },
//     //           {
//     //             "time": "2024-02-19T00:05:43.915Z",
//     //             "value": 18.74
//     //           },
//     //           {
//     //             "time": "2024-02-21T00:05:44.223Z",
//     //             "value": 18.92
//     //           },
//     //           {
//     //             "time": "2024-02-22T00:05:44.169Z",
//     //             "value": 18.9
//     //           }
//     //         ]
//     //       }

//     // ];  
 

//     const [energyConsumptionData, setEnergyConsumptionData] = React.useState<any[]>([]);

//     const fetchEnergyConsumptionData = async () => {
//         try {
//             const response = await fetch('https://mda.lucyday.io/Lucy/TataStreetLightAPI/getPowerAndBurningConsumption?hierarchy=%D9%85%D9%86%D8%B7%D9%82%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%2C%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%2C%D8%A7%D9%84%D8%B7%D8%B1%D9%82%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9%2C%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D9%85%20%D9%85%D8%B3%D9%84%D9%85&start=2024-02-01T08%3A07%3A38.057Z&end=2024-02-24T08%3A07%3A38.057Z', {
//                 headers: {
//                     'Authorization': 'APIKEY SC:mda:307d91db4fe4f10b',
//                     'Cookie': '.AspNetCore.Session=NGY2MGJkZDktMGJkYS0wZWFhLTQwNjgtY2FiYzRiMTJkNThl',
//                 },
//             });
            

//             if (response.ok) {
//             const data = await response.json();
//             setEnergyConsumptionData(data);
//             } else {
//             console.error('Failed to fetch data');
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//     fetchEnergyConsumptionData();
//     }, []); 

//     const energyConsumptionData3 = energyConsumptionData;  

//     const getEnergyConsumptionData3 = async () => {
//     await fetchEnergyConsumptionData();
//     return energyConsumptionData;
//     };
  



//     const transformData = (data: any) => {
//         return data[0]["Burning Hours"].map((entry: any, index: number) => {
//           const time = new Date(entry.time);
//           const hours = time.getHours().toString().padStart(2, '0') + ":" + time.getMinutes().toString().padStart(2, '0');
    
//           return {
//             name: entry.time,
//             burning_hours: entry.value,
//             power_consumption: data[0]["Power Consumption"][index].value,
//             hours: hours,
//           };
//         });
//       };
    
//       const transformedData1 = transformData(energyConsumptionData1);
//       const transformedData2 = transformData(energyConsumptionData2);
//       const transformedData3 = transformData(energyConsumptionData3);
    
//       const [toggleFilterValue, setToggleFilterValue] = React.useState<string>("day");  

//       const handleFilterChange = (value: any) => {
//         console.log("Selected Filter Value:", value);
//         setToggleFilterValue(value);
//       };
    
//       const filterToDataMap: Record<string, Array<{ name: string; power_consumption: number; burning_hours: number; hours: string; }>> = {
//         month: transformedData1,
//         week: transformedData2,
//         day: transformedData3,
//       };
    
//       const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;
 
                   
//                     return (
//                         <WidgetWrapper className="smart-city_box energy_consumption-box">
//                             <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>  
                          
//                                 <div className="smart-city-content">
//                                     <div className="technician_chart" style={{ height: 270 }}>
//                                     <div className='chart-top'>
//                                         <div className="sub_title_bar">Total kWh</div>
//                                         <ToggleFilter
//                                         options={[
//                                             { label: "7D", value: "day" },
//                                             { label: "1M", value: "week" },
//                                             { label: "1Y", value: "month" },
//                                         ]}
//                                         value={toggleFilterValue}
//                                         onChange={handleFilterChange}
//                                         />
//                                     </div>
                            
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <AreaChart
//                                         width={400}
//                                         height={300}
//                                         data={selectedData}
//                                         margin={{
//                                             top: 10,
//                                             right: 0,
//                                             left: 0,
//                                             bottom: 30,
//                                         }}
//                                         >
//                                         <CartesianGrid strokeDasharray="3 3" />
//                                         <XAxis dataKey="hours" />
//                                         <YAxis yAxisId="left" />
//                                         <YAxis yAxisId="right" orientation="right" />
//                                         <Tooltip />
//                                         <Legend />
                            
//                                         <Area
//                                             type="monotone"
//                                             dataKey="power_consumption"
//                                             stackId="1"
//                                             stroke="#001912"
//                                             fill="url(#gradient1)"
//                                             yAxisId="left"
//                                         /> 

//                                             <Area
//                                                 type="monotone"
//                                                 dataKey="burning_hours"
//                                                 stackId="1"
//                                                 stroke="#79dccc"
//                                                 fill="url(#gradient2)"
//                                                 yAxisId="left"
//                                             />

//                                             <Area
//                                                 type="monotone"
//                                                 dataKey="hours"
//                                                 stackId="0" 
//                                                 fill="url(#gradient3)"
//                                                 yAxisId="right"
//                                                 style={{display: "none"}}
//                                                 legendType="none" 
//                                             />
                            
//                                                 <defs>
//                                                 <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                                                     <stop offset="5%" stopColor="#00516a" stopOpacity={0.8} />
//                                                     <stop offset="95%" stopColor="#001912" stopOpacity={0.3} />
//                                                 </linearGradient>

//                                                 <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                                                     <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
//                                                     <stop offset="95%" stopColor="#79dccc" stopOpacity={0.3} />
//                                                 </linearGradient> 
                                                    
//                                             </defs>
//                                         </AreaChart>
//                                     </ResponsiveContainer>
//                                     </div>
//                                 </div>
//                         </WidgetWrapper>
//                       );
//                     };

// export default EnergyConsumption;













 