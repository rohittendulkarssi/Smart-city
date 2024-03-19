// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
// import { IContextProvider } from '../uxp';
// import StreetLightStatusChart from './lightStatusChart'; 

// import axios from 'axios'; 

// interface IWidgetProps { 
//     instanceId?: string,
//     uxpContext?: IContextProvider,

//     ilmAlerts?: {
//         "AC Voltage"?: string;
//         "Load Fail"?: string;
//         "Lux Sensor Blocked"?: string;
//         "Main Fail"?: string;
//         "Partial Failure"?: string;
//         "Power Factor"?: string; 
//       };
// } 

// const Street_Light__Status_Widget: React.FunctionComponent<IWidgetProps> = (props) => {    
  
//   const [health, setHealth] = useState<IWidgetProps>({});
//   const [lastUpdatedHealth, setLastUpdatedHealth] = useState<IWidgetProps | null>(null);

//   function getHealthData () {
//     const hierarchy = 'منطقة المدينة,المدينة,الطرق الرئيسية,السيح';

//     props.uxpContext.executeAction("TataStreetLightAPI","Alert Summary",{hierarchy:hierarchy},{json:true})
//       .then((res: any[]) => {  
//         setHealth(res[0]);
//         setLastUpdatedHealth(res[0]); // Update last updated health data
//       })
//       .catch((e: any) => {
//         console.error("Failed to fetch health data:", e);
//       }); 
//   }
  
//   React.useEffect(() => {
//     getHealthData();
//   }, []) 

//   let [lampdata, setLampData] = React.useState<any>([]) 

//   function getsetLampData() { 
//     props.uxpContext.executeAction("TataStreetLightAPI","Installed vs Working Lamps (ILM)/Devices (GLM)",{},{json:true})
//       .then((res: any[]) => {  
//         setLampData(res[0]);
//       })
//       .catch((e: any) => {
//         console.error("Failed to fetch lamp data:", e);
//       }); 
//   }
  
//   React.useEffect(() => {
//     getsetLampData();
//   }, []) 

//   const calculatePercentage = (value: number, total: number) => {
//     return ((value / total) * 100).toFixed(2);
//   };     

//   return ( 
//     <WidgetWrapper className="smart-city_box waste-bin-box">  
//       <TitleBar title="Street Light Alerts" icon='https://static.iviva.com/images/Udhayimages/traffic-light.png'></TitleBar> 
//       <div className="smart-city-content">  
//         <div className='status-content'>
//           <>  
//             <div className='status Attention'>
//               <h3>{health?.ilmAlerts?.["Load Fail"] + health?.ilmAlerts?.["Lux Sensor Blocked"] + health?.ilmAlerts?.["Partial Failure"]} <span></span></h3>
//               <p>Open</p>
//             </div>

//             <div className='status Pending'>
//               <h3>{health?.ilmAlerts?.["Main Fail"]}  
//               </h3>
//               <p>TAT</p>
//             </div>

//             <div className='status Resloved'>
//               <h3>{health?.ilmAlerts?.["Power Factor"] + health?.ilmAlerts?.["AC Voltage"]} <span></span></h3>  
//               <p>Closed</p>
//             </div>  
//           </>
//         </div>

//         <div className="technician_chart">  
//           <div className='sub_title_bar'>Installed vs Working lamps</div>  

//           <div className="progress-bar-container"> 
//             <> 
//               <div className="progress-bar installedLamps" style={{ width: `${Number(calculatePercentage(Number(lampdata?.ilm?.installedLamps ?? 85), Number(lampdata?.ilm?.installedLamps ?? 85) + Number(lampdata?.ilm?.workingLamps ?? 15)))}%` }}>
//               </div>   

//               <div className='progress-bar working-lamps' style={{ width: `${Number(calculatePercentage(Number(lampdata?.ilm?.workingLamps ?? 15), Number(lampdata?.ilm?.installedLamps ?? 85) + Number(lampdata?.ilm?.workingLamps ?? 15))) < 10 ? 10 : Number(calculatePercentage(Number(lampdata?.ilm?.workingLamps ?? 15), Number(lampdata?.ilm?.installedLamps ?? 85) + Number(lampdata?.ilm?.workingLamps ?? 15)))}%` }}>
//               </div>
//             </>
//           </div>       

//           <div className='chart-sec'>  
//             <div className='chart-issue'>       
//               <h3>{lampdata?.ilm?.installedLamps ?? "N/A"}</h3>
//               <p>Installed lamps</p>
//             </div> 

//             <div className='chart-pending'>       
//               <h3>{lampdata?.ilm?.workingLamps ?? "N/A"}</h3>
//               <p>Working lamps</p>
//             </div>                          
//           </div> 
//         </div>   

//         <div className="smart-city-content">  
//           <StreetLightStatusChart />  
//         </div>
//       </div>

//       {/* Last updated timestamp */}
//       {lastUpdatedHealth && (
//         <div>Last Updated: {new Date().toLocaleString()}</div>
//       )}

//     </WidgetWrapper> 
//   )
// }; 

// export default Street_Light__Status_Widget;




import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import { IContextProvider } from '../uxp';
import StreetLightStatusChart from './lightStatusChart'; 

import axios from 'axios'; 

interface IWidgetProps { 
    instanceId?: string,
    uxpContext?: IContextProvider,

    ilmAlerts?: {
        "AC Voltage"?: string;
        "Load Fail"?: string;
        "Lux Sensor Blocked"?: string;
        "Main Fail"?: string;
        "Partial Failure"?: string;
        "Power Factor"?: string; 
      };
} 
 
 
const Street_Light__Status_Widget: React.FunctionComponent<IWidgetProps> = (props) => {    
    
  const [health, setHealth] = useState<IWidgetProps>({});

  function getHealthData () {

    const hierarchy = 'منطقة المدينة,المدينة,الطرق الرئيسية,السيح';

      props.uxpContext.executeAction("TataStreetLightAPI","Alert Summary",{hierarchy:hierarchy},{json:true})
      .then((res: any[])=>{   
       // console.log("Response From API for Alert Summary is", res, typeof res);
        setHealth(res[0]);
        // setBuilding_Summary(res["Building Details"]);

      }).catch((e: any)=>{
          // console.log("hi", e);
      }); 
  }
  
  React.useEffect(() =>{
    getHealthData();
  }, []) 

  

    let [lampdata,setLampData] = React.useState<any>([]) 
    function getsetLampData () { 
       
        props.uxpContext.executeAction("TataStreetLightAPI","Installed vs Working Lamps (ILM)/Devices (GLM)",{},{json:true}).then((res: any[])=>{  
         
           console.log("Response From Installed vs Working Lamps", res, typeof res);
           setLampData(res[0]);
        //   setBuilding_Summary(res["Building Details"]);
        }).catch((e: any)=>{
            // console.log("hi", e);
        }); 
    }
    
    React.useEffect(() =>{
      getsetLampData();
    }, []) 
 
  
    const calculatePercentage = (value: number, total: number) => {
      return ((value / total) * 100).toFixed(2);
    };     

    const streetLightData  = [ 
        {
            id: '1',
            name: 'Open', 
            clname: 'Attention', 
            unit : '',
            value: 135 
        },
        {
            id: '2',
            name: 'TAT', 
            clname: 'Pending', 
            unit : 'mints',
            value: 56 
        },
        {
            id: '3',
            name: 'Closed', 
            clname: 'Resloved', 
            unit : '',
            value: 245 
        }
    ];  
 
    const maintenance_Permits_Data  = [ 
      {
          id: '1',
          name: 'Installed lamps', 
          clname: 'chart-issue', 
          value: 234 
      },
      {
          id: '2',
          name: 'Working lamps', 
          clname: 'chart-pending', 
          value: 13 
      } 
  ];  

  // const installedLamps = 75;  

  // const workingLamps = 25;  

    return ( 

         <WidgetWrapper className="smart-city_box waste-bin-box">  

            <TitleBar title="Street Light Alerts" icon='https://static.iviva.com/images/Udhayimages/traffic-light.png'></TitleBar> 

            <div className="smart-city-content">  

                <div className='status-content'>
 

                          <>  
                            <div className='status Attention'>
                                <h3>{health?.ilmAlerts?.["Load Fail"] + health?.ilmAlerts?.["Lux Sensor Blocked"] + health?.ilmAlerts?.["Partial Failure"]} <span></span></h3>
                                <p>Open</p>
                            </div>

                            <div className='status Pending'>
                                <h3>{health?.ilmAlerts?.["Main Fail"]}  
                                </h3>
                                <p>TAT</p>
                            </div>

                            <div className='status Resloved'>
                            <h3>{health?.ilmAlerts?.["Power Factor"] + health?.ilmAlerts?.["AC Voltage"]} <span></span></h3>  
                                <p>Closed</p>
                            </div>  
                        </>



                </div>

                <div className="technician_chart">  
                
                <div className='sub_title_bar'>Installed vs Working lamps</div>  

                    <div className="progress-bar-container"> 
           
 
                      <> 
                          <div className="progress-bar installedLamps" style={{ width: `${Number(calculatePercentage(Number(lampdata?.ilm?.installedLamps ?? 75), Number(lampdata?.ilm?.installedLamps ?? 75) + Number(lampdata?.ilm?.workingLamps ?? 25)))}%` }}>
                          </div>   

                          <div className='progress-bar working-lamps' style={{ width: `${Number(calculatePercentage(Number(lampdata?.ilm?.workingLamps ?? 25), Number(lampdata?.ilm?.installedLamps ?? 75) + Number(lampdata?.ilm?.workingLamps ?? 25))) < 10 ? 10 : Number(calculatePercentage(Number(lampdata?.ilm?.workingLamps ?? 25), Number(lampdata?.ilm?.installedLamps ?? 75) + Number(lampdata?.ilm?.workingLamps ?? 25)))}%` }}>
                          </div>

                      </>

                </div>       
 
   
                    <div className='chart-sec'>  


                        <div className='chart-issue'>       
                            <h3>{lampdata?.ilm?.installedLamps ?? "N/A"}</h3>
                            <p>Installed lamps</p>
                        </div> 

                        <div className='chart-pending'>       
                            <h3>{lampdata?.ilm?.workingLamps ?? "N/A"}</h3>
                            <p>Working lamps</p>
                        </div>   
                             
                        
                    </div> 
                </div>   

                <div className="smart-city-content">  
                    <StreetLightStatusChart />  
                </div>
            </div>

        </WidgetWrapper> 
    )
}; 

  

export default Street_Light__Status_Widget;
