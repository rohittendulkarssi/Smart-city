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

const SmartTestTable: React.FunctionComponent<{}> = () => {
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

  // Create an array of health data points
  const healthDataArray = [
    { vehicle: 'AC Voltage', value: parseFloat(health?.ilmAlerts?.["AC Voltage"] || '0') },
    { vehicle: 'Load Fail', value: parseFloat(health?.ilmAlerts?.["Load Fail"] || '0') },
    { vehicle: 'Lux Sensor Blocked', value: parseFloat(health?.ilmAlerts?.["Lux Sensor Blocked"] || '0') },
    { vehicle: 'Main Fail', value: parseFloat(health?.ilmAlerts?.["Main Fail"] || '0') },
    { vehicle: 'Partial Failure', value: parseFloat(health?.ilmAlerts?.["Partial Failure"] || '0') },
    { vehicle: 'Power Factor', value: parseFloat(health?.ilmAlerts?.["Power Factor"] || '0') },
  ];


  const radarChartData = [
    { vehicle: 'AC Voltage', value: Number(health?.ilmAlerts?.["AC Voltage"]) || 0 },
    { vehicle: 'Load Fail', value: Number(health?.ilmAlerts?.["Load Fail"]) || 0 },
    { vehicle: 'Lux Sensor Blocked', value: Number(health?.ilmAlerts?.["Lux Sensor Blocked"]) || 0 },
    { vehicle: 'Main Fail', value: Number(health?.ilmAlerts?.["Main Fail"]) || 0 },
    { vehicle: 'Partial Failure', value: Number(health?.ilmAlerts?.["Partial Failure"]) || 0 },
    { vehicle: 'Power Factor', value: Number(health?.ilmAlerts?.["Power Factor"]) || 0 },
  ];


  const MyResponsiveRadar = () => (
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
  );

  
  return (
    <WidgetWrapper className="smart-city_box vehicle_summary-box">
      <TitleBar title="Streetlight health summary" icon="https://static.iviva.com/images/Car_widget/Car.svg" />

      <div className="smart-city-content">
        <div className="technician_chart" style={{ height: 300 }}>
          {MyResponsiveRadar}  

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

export default SmartTestTable;





  

//StreetLight Health Summary

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   WidgetWrapper,
//   TitleBar,
// } from "uxp/components";
// import {
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Radar,
//   ResponsiveContainer,
//   Tooltip,
//   LabelList,
// } from 'recharts';

// const SmartTestTable: React.FunctionComponent<{}> = () => {
//   const [healthdata, setHealthData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const hierarchy = 'منطقة المدينة'; 

//         const headers = {
//           Authorization: 'APIKEY SC:mda:307d91db4fe4f10b',
         
//         };

//         const response = await axios.get(
//           `https://mda.lucyday.io/Lucy/TataStreetLightAPI/getAlertSummary?hierarchy=${hierarchy}`,
//           { headers }
//         );

//        console.log("Health Data", response.data);

//         if (response.status === 200) {
//           const apiData = response.data;
//           setHealthData(apiData);
//         } else {
//           console.error(`Failed to retrieve data from API. Status code: ${response.status}`);
//         }
//       } catch (error) {
//         console.error('Error fetching data from API:', error.message);
//       }
//     };

//     fetchData(); 
//   }, []);

//   const vehicledata = [
//     { vehicle: 'Load Fail', value: healthdata?.ilmAlerts.loadFail },
//     { vehicle: 'Lux Sensor Blocked', value: healthdata?.ilmAlerts.luxSensorBlocked },
//     { vehicle: 'Partial Failure', value: healthdata?.ilmAlerts.partialFailure },
//     { vehicle: 'Main Fail', value: healthdata?.ilmAlerts.mainFail  },
//     { vehicle: 'Power Factor', value: healthdata?.ilmAlerts.powerFactor },
//     { vehicle: 'AC Voltage', value: healthdata?.ilmAlerts.acVoltage },
//   ];

//   return (
//     <div>
//       {healthdata ? (
//         <div>
//           <h2>Health Summary</h2>
//           <ResponsiveContainer width="100%" height="100%">
//             <RadarChart cx="50%" cy="50%" outerRadius="80%" data={vehicledata}>
//               <PolarGrid />
//               <PolarAngleAxis dataKey="vehicle" />
//               <PolarRadiusAxis />
//               <Radar name="Value" dataKey="value" stroke="#005936" fill="#00a68a" fillOpacity={0.6}>
//                 <LabelList dataKey="value" position="top" />
//               </Radar>
//               <Tooltip />
//             </RadarChart>
//           </ResponsiveContainer>
//         </div>
//       ) : (
//         <p>Loading Health Data...</p>
//       )}
//     </div>
//   );
// };

//  export default SmartTestTable;













//StreetLightStatusChart

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   WidgetWrapper,
//   TitleBar,
// } from "uxp/components";

// const SmartTestTable: React.FunctionComponent<{}> = () => {
//   const [lampdata, setLampData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const headers = {
//           headers: {
//             Authorization: 'APIKEY SC:mda:307d91db4fe4f10b',
//             Cookie: '.AspNetCore.Session=NjRkNjU3ZWEtYmM4Yi1lYzNkLWNiY2MtZGM3OWQxYmQ5ODQx',
//           },
//         };

//         const response = await axios.get('https://mda.lucyday.io/Lucy/TataStreetLightAPI/getInstalledVsWorkingLamps', headers);

//         if (response.status === 200) {
//           const apiData = response.data;
//           setLampData(apiData);
//         } else {
//           console.error(`Failed to retrieve data from API. Status code: ${response.status}`);
//         }
//       } catch (error) {
//         console.error('Error fetching data from API:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const calculatePercentage = (value: number, total: number) => {
//     return ((value / total) * 100).toFixed(2);
//   }; 
 
//   return (
//     <div>
//       {lampdata ? (
//         <div>
//           <h2>Installed vs Working Lamps</h2>
//           <p>Installed Lamps: {lampdata.ilm.installedLamps}</p>
//           <p>Working Lamps: {lampdata.ilm.workingLamps}</p>   

//           <p style={{ width: `${calculatePercentage(lampdata.ilm.installedLamps, lampdata.ilm.installedLamps + lampdata.ilm.workingLamps)}%` }}>
//   Installed Lamps Percentage: {calculatePercentage(lampdata.ilm.installedLamps, lampdata.ilm.installedLamps + lampdata.ilm.workingLamps)}%
// </p>


// <p style={{ width: `${calculatePercentage(lampdata.ilm.workingLamps, lampdata.ilm.installedLamps + lampdata.ilm.workingLamps)}%` }}>
//   Working Lamps: {calculatePercentage(lampdata.ilm.workingLamps, lampdata.ilm.installedLamps + lampdata.ilm.workingLamps)}%</p>


           
//           <p>Working Lamps: {lampdata.ilm.workingLamps} ({((lampdata.ilm.workingLamps / lampdata.ilm.installedLamps) * 100).toFixed(2)}%)</p> 

//             <p>Installed Lamps Percentage: {calculatePercentage(lampdata.ilm.installedLamps, lampdata.ilm.installedLamps + lampdata.ilm.workingLamps)}%</p>
//           <h2>Installed vs Working Feeders</h2>
//           <p>Installed Feeders: {lampdata.glm.installedFeeders}</p>
//           <p>Working Feeders: {lampdata.glm.workingFeeders}</p>
//         </div>
//       ) : (
//         <p>Loading lamp Data...</p>
//       )}
//     </div>
//   );
// };

// export default SmartTestTable;
