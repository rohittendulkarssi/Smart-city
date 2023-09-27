import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
 

const Water_ConsumptionWidget: React.FunctionComponent<{}> = () => {  

    
    const water_consumption_data1 = [
        {
          name: '1 Jan', 
          consumption: 1950,
          amt: 2400,
        },
        {
          name: '2 Jan', 
          consumption: 6500,
          amt: 2210,
        },
        {
          name: '3 Jan', 
          consumption: 5800,
          amt: 2290,
        },
        {
          name: '4 Jan', 
          consumption: 3908,
          amt: 2000,
        },
        {
          name: '5 Jan', 
          consumption: 1680,
          amt: 2181,
        },
        {
          name: '6 Jan', 
          consumption: 3800,
          amt: 2500,
        },
        {
          name: '7 Jan', 
          consumption: 2350,
          amt: 2100,
        },
      ];

      const water_consumption_data2 = [
        {
          name: '1 Jan', 
          consumption: 8000,
          amt: 2400,
        },
        {
          name: '2 Jan', 
          consumption: 1398,
          amt: 2210,
        },
        {
          name: '3 Jan', 
          consumption: 1680,
          amt: 2290,
        },
        {
          name: '4 Jan', 
          consumption: 3908,
          amt: 2000,
        },
        {
          name: '5 Jan', 
          consumption: 4800,
          amt: 2181,
        },
        {
          name: '6 Jan', 
          consumption: 1680,
          amt: 2500,
        },
        {
          name: '7 Jan', 
          consumption: 4900,
          amt: 2100,
        },
      ];
    
      const water_consumption_data3 = [
        {
          name: '1 Jan', 
          consumption: 7540,
          amt: 2400,
        },
        {
          name: '2 Jan', 
          consumption: 6300,
          amt: 2210,
        },
        {
          name: '3 Jan', 
          consumption: 4596,
          amt: 2290,
        },
        {
          name: '4 Jan', 
          consumption: 3580,
          amt: 2000,
        },
        {
          name: '5 Jan', 
          consumption: 4800,
          amt: 2181,
        },
        {
          name: '6 Jan', 
          consumption: 5020,
          amt: 2500,
        },
        {
          name: '7 Jan', 
          consumption: 6500,
          amt: 2100,
        },
      ];


      const [toggleFilterValue, setToggleFilterValue] = React.useState<string>("day");  

      const handleFilterChange = (value:any) => {
          console.log("Selected Filter Value:", value);
          setToggleFilterValue(value);
      };  
   
  
      const filterToDataMap: Record<string, Array<{ name: string;  consumption: number; amt: number; }>> = {
          month: water_consumption_data1,
          week: water_consumption_data2,
          day: water_consumption_data3, 
      };
       
      const water_consumption_data = filterToDataMap[toggleFilterValue] || water_consumption_data1;

      
        return ( 
    
             <WidgetWrapper className="smart-city_box water_consumption-box">  
    
                <TitleBar title="Water Consumption" icon='https://static.iviva.com/images/Udhayimages/waterdrop.png'></TitleBar> 
    
                <div className="smart-city-content">  

                  <div  className='chart-top'>

                    <div className="sub_title_bar">Total kW</div>  

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
    
                    <div className='status-content'>
    
                     <ResponsiveContainer width="100%" height={350}>
                        <LineChart
                        width={500}
                        height={350}
                        data={water_consumption_data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name"  tick={{ fill: '#ffffff' }} />
                        <YAxis  tick={{ fill: '#ffffff' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="consumption" stroke="#ffffff" activeDot={{ r: 8 }} />
                        
                        </LineChart>
                    </ResponsiveContainer>   
     
                             
                    </div>
      
                </div>
    
            </WidgetWrapper> 
        )
    }; 
     

export default Water_ConsumptionWidget;
