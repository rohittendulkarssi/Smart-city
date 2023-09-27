import React, { PureComponent } from 'react';
import {useState} from 'react';
import { registerWidget, IContextProvider  } from './uxp';  
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

import './styles.scss';  

import { ResponsiveContainer, LineChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart, Line } from 'recharts';
 
 
interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}
    

const Water_SummaryWidget: React.FunctionComponent<IWidgetProps> = () => {  

    return ( 

         <WidgetWrapper className="smart-city_box water_summary-box">  

            <TitleBar title="Water Summary"></TitleBar> 

            <div className="smart-city-content">  

                <div className='status-content'>
                        <div className='status consumption-status'>
                            <div className='vahicle-icon co2-icon'></div>
                            <p>Water Consumption</p>
                            <h2>29</h2>
                            <span className='red'>+40%</span>
                        </div>
                        <div className='status population-status'>
                            <div className='vahicle-icon fuel-consumption-icon'></div>
                            <p>Population</p>
                            <h2>9,492</h2>
                            <span className='red'>+25% </span>
                        </div>
                        <div className='status water-troubles-status'>
                            <div className='vahicle-icon s-consumption-icon'></div>
                            <p>Water Troubles Monthly</p>
                            <h2>38</h2>
                            <span className='green'>-15%</span>
                        </div>
                </div>
  
            </div>

        </WidgetWrapper> 
    )
}; 

 




const Water_ConsumptionWidget: React.FunctionComponent<IWidgetProps> = () => {  

    
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

    
    return ( 

         <WidgetWrapper className="smart-city_box water_summary-box">  

            <TitleBar title="Water Consumption"></TitleBar> 

            <div className="smart-city-content">  

                <div className='status-content'>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer> 
                         
                </div>
  
            </div>

        </WidgetWrapper> 
    )
}; 

  
        




 
/**
 * Register as a Widget
 */  
 
registerWidget({
    id: "waterSummary", 
    widget: Water_SummaryWidget,
    configs: {
        layout: {
            // w: 14,
            // h: 13,
            // minH: 13,
            // minW: 14
        }
    }
}); 




registerWidget({
    id: "water_consumption", 
    widget: Water_ConsumptionWidget,
    configs: {
        layout: {
            // w: 14,
            // h: 13,
            // minH: 13,
            // minW: 14
        }
    }
});




/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "smart_city",
    label: "Smart_city",
    // click: () => alert("Hello"),
    component: Smart_cityWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"smart_city",
    component: Smart_cityWidget
});
*/