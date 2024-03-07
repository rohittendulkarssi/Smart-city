import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
import OrderSummary from './order-summary'; 

const Maintenance_WorkOrder_Trend: React.FunctionComponent<{}> = () => {  

 

// const summarydata1 = [
//     {
//         name: 'Room 1', Aug_duration_meeting: 8, Total_hours_booked: 16, Total_hours_accupied: 17, amt: 25,
//     },
//     {
//         name: 'Room 2', Aug_duration_meeting: 19, Total_hours_booked: 20, Total_hours_accupied: 11, amt: 25,
//     },
//     {
//         name: 'Room 3', Aug_duration_meeting: 7, Total_hours_booked: 11, Total_hours_accupied: 19, amt: 25,
//     },
//     {
//         name: 'Room 4', Aug_duration_meeting: 10, Total_hours_booked: 5, Total_hours_accupied: 10, amt: 25,
//     },
//     {
//         name: 'Room 5', Aug_duration_meeting: 18, Total_hours_booked: 22, Total_hours_accupied: 20, amt: 25,
//     },
//     {
//         name: 'Room 6', Aug_duration_meeting: 21, Total_hours_booked: 16, Total_hours_accupied: 11, amt: 25,
//     },
//     {
//         name: 'Room 7', Aug_duration_meeting: 12, Total_hours_booked: 21, Total_hours_accupied: 19, amt: 25,
//     },
//     {
//         name: 'Room 8', Aug_duration_meeting: 7, Total_hours_booked: 15, Total_hours_accupied: 12, amt: 25,
//     } 
// ];


// const summarydata2 = [
//     {
//         name: 'Room 1', Aug_duration_meeting: 18, Total_hours_booked: 10, Total_hours_accupied: 17, amt: 25,
//     },
//     {
//         name: 'Room 2', Aug_duration_meeting: 19, Total_hours_booked: 20, Total_hours_accupied: 11, amt: 25,
//     },
//     {
//         name: 'Room 3', Aug_duration_meeting: 7, Total_hours_booked: 11, Total_hours_accupied: 12, amt: 25,
//     },
//     {
//         name: 'Room 4', Aug_duration_meeting: 20, Total_hours_booked: 15, Total_hours_accupied: 10, amt: 25,
//     },
//     {
//         name: 'Room 5', Aug_duration_meeting: 16, Total_hours_booked: 22, Total_hours_accupied: 20, amt: 25,
//     },
//     {
//         name: 'Room 6', Aug_duration_meeting: 21, Total_hours_booked: 16, Total_hours_accupied: 11, amt: 25,
//     },
//     {
//         name: 'Room 7', Aug_duration_meeting: 12, Total_hours_booked: 21, Total_hours_accupied: 19, amt: 25,
//     },
//     {
//         name: 'Room 8', Aug_duration_meeting: 10, Total_hours_booked: 15, Total_hours_accupied: 12, amt: 25,
//     } 
// ];


// const summarydata3 = [
//     {
//         name: 'Room 1', Aug_duration_meeting: 15, Total_hours_booked: 16, Total_hours_accupied: 17, amt: 25,
//     },
//     {
//         name: 'Room 2', Aug_duration_meeting: 20, Total_hours_booked: 20, Total_hours_accupied: 11, amt: 25,
//     },
//     {
//         name: 'Room 3', Aug_duration_meeting: 8, Total_hours_booked: 11, Total_hours_accupied: 19, amt: 25,
//     },
//     {
//         name: 'Room 4', Aug_duration_meeting: 10, Total_hours_booked: 5, Total_hours_accupied: 10, amt: 25,
//     },
//     {
//         name: 'Room 5', Aug_duration_meeting: 24, Total_hours_booked: 22, Total_hours_accupied: 20, amt: 25,
//     },
//     {
//         name: 'Room 6', Aug_duration_meeting: 18, Total_hours_booked: 16, Total_hours_accupied: 11, amt: 25,
//     },
//     {
//         name: 'Room 7', Aug_duration_meeting: 10, Total_hours_booked: 21, Total_hours_accupied: 19, amt: 25,
//     },
//     {
//         name: 'Room 8', Aug_duration_meeting: 17, Total_hours_booked: 15, Total_hours_accupied: 15, amt: 25,
//     } 
// ];





const summarydata1 = [
    {
        name: 'Jan', Aug_duration_meeting: 502, Total_hours_booked: 658, Total_hours_accupied: 362, amt: 365,
    },
    {
        name: 'Feb', Aug_duration_meeting: 156, Total_hours_booked: 320, Total_hours_accupied: 11, amt: 654,
    },
    {
        name: 'Mar', Aug_duration_meeting: 235, Total_hours_booked: 124, Total_hours_accupied: 19, amt: 365,
    },
    {
        name: 'Apr', Aug_duration_meeting: 163, Total_hours_booked: 215, Total_hours_accupied: 236, amt: 654,
    },
    {
        name: 'May', Aug_duration_meeting: 169, Total_hours_booked: 322, Total_hours_accupied: 125, amt: 221,
    },
    {
        name: 'Jun', Aug_duration_meeting: 321, Total_hours_booked: 516, Total_hours_accupied: 302, amt: 625,
    },
    {
        name: 'Jul', Aug_duration_meeting: 312, Total_hours_booked: 421, Total_hours_accupied: 124, amt: 325,
    },
     {
        name: 'Aug', Aug_duration_meeting: 235, Total_hours_booked: 124, Total_hours_accupied: 19, amt: 365,
    },
    // {
    //     name: 'Sep', Aug_duration_meeting: 163, Total_hours_booked: 215, Total_hours_accupied: 236, amt: 654,
    // },
    // {
    //     name: 'Oct', Aug_duration_meeting: 169, Total_hours_booked: 322, Total_hours_accupied: 125, amt: 221,
    // },
    // {
    //     name: 'Nov', Aug_duration_meeting: 321, Total_hours_booked: 516, Total_hours_accupied: 302, amt: 625,
    // },
    // {
    //     name: 'Dec', Aug_duration_meeting: 163, Total_hours_booked: 215, Total_hours_accupied: 236, amt: 654,
    // }
];


const summarydata2 = [ 

    {
        name: 'Week1', Aug_duration_meeting: 502, Total_hours_booked: 658, Total_hours_accupied: 365, amt: 365,
    },
    {
        name: 'Week2', Aug_duration_meeting: 250, Total_hours_booked: 320, Total_hours_accupied: 256, amt: 654,
    },
    {
        name: 'Week 3', Aug_duration_meeting: 125, Total_hours_booked: 252, Total_hours_accupied: 165, amt: 654,
    },
    {
        name: 'Week 4', Aug_duration_meeting: 152, Total_hours_booked: 653, Total_hours_accupied: 156, amt: 654,
    } 
];


const summarydata3 = [ 

    {
        name: 'Sun', Aug_duration_meeting: 325, Total_hours_booked: 658, Total_hours_accupied: 362, amt: 365,
    },
    {
        name: 'Mon', Aug_duration_meeting: 257, Total_hours_booked: 320, Total_hours_accupied: 136, amt: 152,
    },
    {
        name: 'Tue', Aug_duration_meeting: 124, Total_hours_booked: 580, Total_hours_accupied: 139, amt: 625,
    },
    {
        name: 'Wed', Aug_duration_meeting: 632, Total_hours_booked: 362, Total_hours_accupied: 165, amt: 652,
    },
    {
        name: 'Thu', Aug_duration_meeting: 254, Total_hours_booked: 425, Total_hours_accupied: 125, amt: 165,
    },
    {
        name: 'Fri', Aug_duration_meeting: 125, Total_hours_booked: 516, Total_hours_accupied: 302, amt: 320,
    },
    {
        name: 'Sat', Aug_duration_meeting: 312, Total_hours_booked: 421, Total_hours_accupied: 124, amt: 852,
    } 
];



const [toggleFilterValue, setToggleFilterValue] = React.useState<string>("day");  

const handleFilterChange = (value:any) => {
    console.log("Selected Filter Value:", value);
    setToggleFilterValue(value);
};  


const filterToDataMap: Record<string, Array<{ name: string; Aug_duration_meeting: number; Total_hours_booked: number; Total_hours_accupied: number; }>> = {
    month: summarydata1,
    week: summarydata2,
    day: summarydata3, 
};
 
const selectedData = filterToDataMap[toggleFilterValue] || summarydata1;

const [toggleFilterValueday, setToggleFilterValueday] = React.useState<string>("1");  

const handleFilterChangeday = (value:any) => { 
    setToggleFilterValueday(value);
}; 

return (  
 

<WidgetWrapper className="smart-city_box energy_consumption-box"> 
            
<div className='top_tabs'>
    <ToggleFilter  
          options={[
              { label: "2023", value: "1" },
              { label: "1D", value: "2" } 
          ]}
          value={toggleFilterValueday}
          onChange={handleFilterChangeday}
      /> 
   </div>

   <TitleBar title="Maintenance Work Order Trend" icon='https://static.iviva.com/images/Udhayimages/shopping-list.png'></TitleBar> 

<div className="smart-city-content">  

<div className="technician_chart">   

<div  className='chart-top'>

<div className="sub_title_bar">Workorder Trend (Tons)</div>  

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

     {/* <ResponsiveContainer width="100%" height="100%">   */}
     <ResponsiveContainer>  

        <BarChart
            width={500}
            height={200}
            data={selectedData}
            margin={{
                top: 2, right: 0, left: 0, bottom: 2,
            }}>
            <CartesianGrid strokeDasharray="0 0" />
            <XAxis dataKey="name" />
            <YAxis orientation="left" />
            <Tooltip />
            <Bar barSize={20} dataKey="Aug_duration_meeting" fill="#025639" />
            <Bar barSize={25} dataKey="Total_hours_booked" fill="#0c7652" />
            <Bar barSize={25} dataKey="Total_hours_accupied" fill="#0c2e23" />
        </BarChart> 

</ResponsiveContainer> 

</div>  
</div>

</WidgetWrapper>

    
)
}; 


export default Maintenance_WorkOrder_Trend; 