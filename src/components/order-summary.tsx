import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
 

const OrderSummary: React.FunctionComponent<{}> = () => {   

  const summarydata = [
      {
          name: 'Room 1', Aug_duration_meeting: 8, Total_hours_booked: 16, Total_hours_accupied: 17, amt: 25,
      },
      {
          name: 'Room 2', Aug_duration_meeting: 19, Total_hours_booked: 20, Total_hours_accupied: 11, amt: 25,
      },
      {
          name: 'Room 3', Aug_duration_meeting: 7, Total_hours_booked: 11, Total_hours_accupied: 19, amt: 25,
      },
      {
          name: 'Room 4', Aug_duration_meeting: 10, Total_hours_booked: 5, Total_hours_accupied: 10, amt: 25,
      },
      {
          name: 'Room 5', Aug_duration_meeting: 18, Total_hours_booked: 22, Total_hours_accupied: 20, amt: 25,
      },
      {
          name: 'Room 6', Aug_duration_meeting: 21, Total_hours_booked: 16, Total_hours_accupied: 11, amt: 25,
      },
      {
          name: 'Room 7', Aug_duration_meeting: 12, Total_hours_booked: 21, Total_hours_accupied: 19, amt: 25,
      },
      {
          name: 'Room 8', Aug_duration_meeting: 7, Total_hours_booked: 15, Total_hours_accupied: 12, amt: 25,
      } 
  ];
  return (
            <ResponsiveContainer width="100%">

                <BarChart
                    width={500}
                    height={200}
                    data={summarydata}
                    margin={{
                        top: 2, right: 0, left: 0, bottom: 2,
                    }}>
                     <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis orientation="left" />
                    <Tooltip />
                    <Bar barSize={20} dataKey="Aug_duration_meeting" fill="#025639" />
                    <Bar barSize={25} dataKey="Total_hours_booked" fill="#0c7652" />
                    <Bar barSize={25} dataKey="Total_hours_accupied" fill="#0c2e23" />
                </BarChart>
                
            </ResponsiveContainer>

  );
 
}
  

export default OrderSummary;
