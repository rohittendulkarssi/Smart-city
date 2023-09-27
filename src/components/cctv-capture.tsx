import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
 
interface IWidgetProps { 
    instanceId?: string,
} 
 
const CCTVWidget: React.FunctionComponent<IWidgetProps> = () => {  

    return (  
       
         <WidgetWrapper className="smart-city_box cctv-box">  

            <TitleBar title="CCTV"></TitleBar> 

            <div className="smart-city-content">  
                <div className="body"></div>
            </div>

        </WidgetWrapper> 

    )
}; 
  

export default CCTVWidget;
