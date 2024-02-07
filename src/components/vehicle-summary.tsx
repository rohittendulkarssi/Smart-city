 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  LabelList,
} from 'recharts';

import { WidgetWrapper, TitleBar } from 'uxp/components';

interface HealthData {
  ilmAlerts?: {
    "AC Voltage"?: string;
    "Load Fail"?: string;
    "Lux Sensor Blocked"?: string;
    "Main Fail"?: string;
    "Partial Failure"?: string;
    "Power Factor"?: string;
  };
}

const VehicleSummaryWidget: React.FunctionComponent<{}> = () => {
  const [health, setHealth] = useState<HealthData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const hierarchy = 'منطقة المدينة,المدينة,الطرق الرئيسية,السيح';
      const headers = {
        Authorization: 'APIKEY SC:mda:307d91db4fe4f10b',
      };

      const { data } = await axios.get(
        `https://mda.lucyday.io/Lucy/TataStreetLightAPI/getAlertSummary?hierarchy=${encodeURIComponent(
          hierarchy
        )}`,
        { headers }
      );

      setHealth(data);
    } catch (error) {
      console.error('Error fetching data from API:', error.message);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }
 
  
  const radarChartData = [
    { vehicle: 'AC Voltage', value: Number(health?.ilmAlerts?.["AC Voltage"]) || 0 },
    { vehicle: 'Load Fail', value: Number(health?.ilmAlerts?.["Load Fail"]) || 0 },
    { vehicle: 'Lux Sensor Blocked', value: Number(health?.ilmAlerts?.["Lux Sensor Blocked"]) || 0 },
    { vehicle: 'Main Fail', value: Number(health?.ilmAlerts?.["Main Fail"]) || 0 },
    { vehicle: 'Partial Failure', value: Number(health?.ilmAlerts?.["Partial Failure"]) || 0 },
    { vehicle: 'Power Factor', value: Number(health?.ilmAlerts?.["Power Factor"]) || 0 },
  ];

  return (
    <WidgetWrapper className="smart-city_box vehicle_summary-box">
      <TitleBar title="Streetlight health summary" icon="https://static.iviva.com/images/Car_widget/Car.svg" />

      <div className="smart-city-content">
        <div className="technician_chart" style={{ height: 300 }}>
          
          {/* {MyResponsiveRadar} */}


          <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="vehicle" />
                <PolarRadiusAxis />
                <Radar name="Value" dataKey="value" stroke="#005936" fill="#00a68a" fillOpacity={0.6}>
                  <LabelList dataKey="value" position="top" />
                </Radar>
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>  

        </div>
       
      </div>
    </WidgetWrapper>
  );
};

export default VehicleSummaryWidget;


 






// import React, { useState, useEffect } from 'react';
// import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
// import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
// import axios from 'axios';

 
// interface HealthData {
//   ilmAlerts?: {
//     "AC Voltage"?: string;
//     "Load Fail"?: string;
//     "Lux Sensor Blocked"?: string;
//     "Main Fail"?: string;
//     "Partial Failure"?: string;
//     "Power Factor"?: string; 
//   };
// } 

// const VehicleSummaryWidget: React.FunctionComponent<{}> = () => {  


//   const [health, setHealth] = useState<HealthData>({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []); 

  
//   async function fetchData() {
//     try {
//       const hierarchy = 'منطقة المدينة,المدينة,الطرق الرئيسية,السيح';
//       const headers = {
//         Authorization: 'APIKEY SC:mda:307d91db4fe4f10b',
//       };
//       const { data } = await axios.get(
//         `https://mda.lucyday.io/Lucy/TataStreetLightAPI/getAlertSummary?hierarchy=${hierarchy}`,
//         { headers }
//       );
//       setHealth(data);
//     } catch (error) {
//       console.error('Error fetching data from API:', error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }
 

//     var vehicledata = [   

//         {
//           vehicle: 'Load fail',
//           value: 120, 
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Main Fail',
//           value: 98, 
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Voltage trip alert',
//           value: 86, 
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Lux Sensor Blocked',
//           value: 99, 
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Excessive power drawn alert',
//           value: 85, 
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Overload Alert',
//           value: 65, 
//           fullValue: 150,
//         },
//     ] 

 
//   const vehicleData =  isLoading ? (
//       <p>Loading, please wait...</p>
//     ) : (
//       <div>
//         <p>{`AC Voltage: ${health?.ilmAlerts?.["AC Voltage"]}`}</p>
//         <p>{`Load Fail: ${health?.ilmAlerts?.["Load Fail"]}`}</p>
//         <p>{`Lux Sensor Blocked: ${health?.ilmAlerts?.["Lux Sensor Blocked"]}`}</p>
//         <p>{`Main Fail: ${health?.ilmAlerts?.["Main Fail"]}`}</p>
//         <p>{`Partial Failure: ${health?.ilmAlerts?.["Partial Failure"]}`}</p>
//         <p>{`Power Factor: ${health?.ilmAlerts?.["Power Factor"]}`}</p>
//       </div>
//     ); [];
    
//       const MyResponsiveRadar = ({}) => (
        
//             <ResponsiveContainer width="100%" height="100%">
//                 <RadarChart cx="50%" cy="50%" outerRadius="80%" data={vehicledata}>
//                 <PolarGrid />
//                 <PolarAngleAxis dataKey="vehicle" />
//                  <PolarRadiusAxis />   
//                 <Radar name="Value" dataKey="value" stroke="#005936" fill="#00a68a" fillOpacity={0.6}>
//                     <LabelList dataKey="value" position="top" />
//                 </Radar> 
//                 <Tooltip /> 
//                 {/* <Legend   /> */}
//                 </RadarChart>
//             </ResponsiveContainer>
//         )
    
//         return ( 
           
//             <WidgetWrapper className="smart-city_box vehicle_summary-box">  
//                 <TitleBar title="Streetlight health summary" icon='https://static.iviva.com/images/Car_widget/Car.svg'></TitleBar>  
    
//                 <div className="smart-city-content">  
//                     <div className="technician_chart" style={{ height: 300 }}>  
//                         <MyResponsiveRadar/>
//                     </div>  
                                
//                   <div>
//                     <p>{`AC Voltage: ${health?.ilmAlerts?.["AC Voltage"]}`}</p>
//                     <p>{`Load Fail: ${health?.ilmAlerts?.["Load Fail"]}`}</p>
//                     <p>{`Lux Sensor Blocked: ${health?.ilmAlerts?.["Lux Sensor Blocked"]}`}</p>
//                     <p>{`Main Fail: ${health?.ilmAlerts?.["Main Fail"]}`}</p>
//                     <p>{`Partial Failure: ${health?.ilmAlerts?.["Partial Failure"]}`}</p>
//                     <p>{`Power Factor: ${health?.ilmAlerts?.["Power Factor"]}`}</p>
//                   </div>  

//                 </div>
    
//             </WidgetWrapper>
    
//         )
//     }; 

// export default VehicleSummaryWidget;










