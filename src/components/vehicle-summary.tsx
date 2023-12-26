import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 



const VehicleSummaryWidget: React.FunctionComponent<{}> = () => {  
 

    var vehicledata = [  
        // {
        //     vehicle: 'Car',
        //     value: 120, 
        //     fullValue: 150,
        //   },
        //   {
        //     vehicle: 'Taxi',
        //     value: 98, 
        //     fullValue: 150,
        //   },
        //   {
        //     vehicle: 'Bus',
        //     value: 86, 
        //     fullValue: 150,
        //   },
        //   {
        //     vehicle: 'Truck',
        //     value: 99, 
        //     fullValue: 150,
        //   },
        //   {
        //     vehicle: 'Motorcycle',
        //     value: 85, 
        //     fullValue: 150,
        //   },
        //   {
        //     vehicle: 'Van',
        //     value: 65, 
        //     fullValue: 150,
        //   }

        {
          vehicle: 'Load fail',
          value: 120, 
          fullValue: 150,
        },
        {
          vehicle: 'Main Fail',
          value: 98, 
          fullValue: 150,
        },
        {
          vehicle: 'Voltage trip alert',
          value: 86, 
          fullValue: 150,
        },
        {
          vehicle: 'Lux Sensor Blocked',
          value: 99, 
          fullValue: 150,
        },
        {
          vehicle: 'Excessive power drawn alert',
          value: 85, 
          fullValue: 150,
        },
        {
          vehicle: 'Overload Alert',
          value: 65, 
          fullValue: 150,
        },
    ] 
    
      const MyResponsiveRadar = ({}) => (
        
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={vehicledata}>
                <PolarGrid />
                <PolarAngleAxis dataKey="vehicle" />
                 <PolarRadiusAxis />   
                <Radar name="Value" dataKey="value" stroke="#005936" fill="#00a68a" fillOpacity={0.6}>
                    <LabelList dataKey="value" position="top" />
                </Radar> 
                <Tooltip /> 
                {/* <Legend   /> */}
                </RadarChart>
        </ResponsiveContainer>
        )
    
        return ( 
           
            <WidgetWrapper className="smart-city_box vehicle_summary-box">  
                <TitleBar title="Streetlight health summary" icon='https://static.iviva.com/images/Car_widget/Car.svg'></TitleBar>  
    
                <div className="smart-city-content">  
                    <div className="technician_chart" style={{ height: 300 }}>  
                        <MyResponsiveRadar/>
                    </div>  
                </div>
    
            </WidgetWrapper>
    
        )
    };
    
 
  

export default VehicleSummaryWidget;
