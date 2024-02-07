import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
import StreetLightStatusChart from './lightStatusChart'; 

import axios from 'axios'; 

interface IWidgetProps { 
    instanceId?: string,

    ilmAlerts?: {
        "AC Voltage"?: string;
        "Load Fail"?: string;
        "Lux Sensor Blocked"?: string;
        "Main Fail"?: string;
        "Partial Failure"?: string;
        "Power Factor"?: string; 
      };
} 
 
 
const Street_Light__Status_Widget: React.FunctionComponent<IWidgetProps> = () => {   

    const [lampdata, setLampData] = useState(null);
 
    const [health, setHealth] = useState<IWidgetProps>({});
    const [isLoading, setIsLoading] = useState(true);

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
        `https://mda.lucyday.io/Lucy/TataStreetLightAPI/getAlertSummary?hierarchy=${hierarchy}`,
        { headers }
      );
      console.log("Hello", data )
      setHealth(data);
    } catch (error) {
      console.error('Error fetching data from API:', error.message);
    } finally {
      setIsLoading(false);
    }
  }

 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const headers = {
            headers: {
              Authorization: 'APIKEY SC:mda:307d91db4fe4f10b',
              Cookie: '.AspNetCore.Session=NjRkNjU3ZWEtYmM4Yi1lYzNkLWNiY2MtZGM3OWQxYmQ5ODQx',
            },
          };
  
          const response = await axios.get('https://mda.lucyday.io/Lucy/TataStreetLightAPI/getInstalledVsWorkingLamps', headers);
  
          if (response.status === 200) {
            const apiData = response.data;
            setLampData(apiData);
          } else {
            console.error(`Failed to retrieve data from API. Status code: ${response.status}`);
          }
        } catch (error) {
          console.error('Error fetching data from API:', error.message);
        }
      };
  
      fetchData();
    }, []);
  
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

  const installedLamps = 75;  

  const workingLamps = 25;  

    return ( 

         <WidgetWrapper className="smart-city_box waste-bin-box">  

            <TitleBar title="Street Light Alerts" icon='https://static.iviva.com/images/Udhayimages/traffic-light.png'></TitleBar> 

            <div className="smart-city-content">  

                <div className='status-content'>

                 
                        {isLoading ? (
                           streetLightData.map((item) => ( 
                            <div  key={item.id} className={`status ${item.clname}`}>
                                {/* <h3>{item.value} <span>{item.unit}</span></h3> */}
                                <h3> -- </h3>
                                <p>{item.name}</p>
                            </div> 
                        ))
                        ) : (
                        <>  
                            <div className='status Attention'>
                                <h3>{health?.ilmAlerts?.["Load Fail"] + health?.ilmAlerts?.["Lux Sensor Blocked"] + health?.ilmAlerts?.["Partial Failure"]} <span></span></h3>
                                <p>Open</p>
                            </div>

                            <div className='status Pending'>
                                <h3>{health?.ilmAlerts?.["Main Fail"]} <span>mints</span></h3>
                                <p>TAT</p>
                            </div>

                            <div className='status Resloved'>
                            <h3>{health?.ilmAlerts?.["Power Factor"] + health?.ilmAlerts?.["AC Voltage"]} <span></span></h3>  
                                <p>Closed</p>
                            </div>  
                        </>
                    )}
                 

                    {/* {streetLightData.map((item) => ( 
                        <div  key={item.id} className={`status ${item.clname}`}>
                            <h3>{item.value} <span>{item.unit}</span></h3>
                            <p>{item.name}</p>
                        </div> 
                    ))} */}

                </div>

                <div className="technician_chart">  
                
                <div className='sub_title_bar'>Installed vs Working lamps</div>  

                    <div className="progress-bar-container">
                      
                            
                    {lampdata ? (
                      <> 
                          <div className="progress-bar installedLamps" style={{ width: `${Number(calculatePercentage(Number(lampdata.ilm.installedLamps), Number(lampdata.ilm.installedLamps) + Number(lampdata.ilm.workingLamps)))}%` }}>
                          </div>   

                          <div className='progress-bar working-lamps' style={{ width: `${Number(calculatePercentage(Number(lampdata.ilm.workingLamps), Number(lampdata.ilm.installedLamps) + Number(lampdata.ilm.workingLamps))) < 10 ? 10 : Number(calculatePercentage(Number(lampdata.ilm.workingLamps), Number(lampdata.ilm.installedLamps) + Number(lampdata.ilm.workingLamps)))}%` }}>
                          </div>

                      </>
                    ) : (
                      <>
                        <p>Loading data</p> 
                      </>
                    )}




                </div>       
 
   
                    <div className='chart-sec'> 

                    {lampdata ? (
                        <>

                        <div className='chart-issue'>       
                            <h3>{lampdata.ilm.installedLamps}</h3>
                            <p>Installed lamps</p>
                        </div> 

                        <div className='chart-pending'>       
                            <h3>{lampdata.ilm.workingLamps}</h3>
                            <p>Working lamps</p>
                        </div>  
        
                    </>
                        ) : (
                          <> 
                         <p>Loading lamp Data...</p>   
                          {/* <div style={{width:'100%', display: 'inline-block'}}> 
                              {maintenance_Permits_Data.map((item) => ( 
                                <div  key={item.id} className={item.clname}>
                                    <h3>{item.value}</h3>
                                    <p>{item.name}</p>
                                </div> 
                              ))}
                          </div>     */}
                         
                      </>
                        )}
                        
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
