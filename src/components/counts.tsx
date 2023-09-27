import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 



const CountsWidget: React.FunctionComponent<{}> = () => {  

  
  let [inputValue, setInputValue] = React.useState<string | null>("Location");
  let [selected, setSelected] = React.useState<string | null>("Vehicle"); 
  let [date, setDate] = React.useState<Date>(new Date());
  let [date1, setDate1] = React.useState<Date>(new Date());

    var countsData = [  
        {
            vehicle: 'Car',
            value: 120, 
            fullValue: 150,
          },
          {
            vehicle: 'Taxi',
            value: 98, 
            fullValue: 150,
          },
          {
            vehicle: 'Bus',
            value: 86, 
            fullValue: 150,
          },
          {
            vehicle: 'Truck',
            value: 99, 
            fullValue: 150,
          },
          {
            vehicle: 'Motorcycle',
            value: 85, 
            fullValue: 150,
          },
          {
            vehicle: 'Van',
            value: 65, 
            fullValue: 150,
          },
    ] 
    
      const MyResponsiveRadar = ({}) => (
        
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={countsData}>
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
                <TitleBar title="Counts" icon='https://static.iviva.com/images/Car_widget/count.svg'></TitleBar>  
    
                <div className="smart-city-content">  

                    <div className="chart-top">
                    
                          <FormField inline className="showcase-input" > 


                                <SearchBox
                                    value={inputValue}
                                    onChange={(newValue) => { setInputValue(newValue) }}
                                    position="left"
                                    placeholder=''
                                /> 
                                            
                              <Select
                                  selected={selected}
                                  options={[
                                      { label: "Vehicle", value: "op-1" },
                                      { label: "Vehicle 1", value: "op-2" },
                                      { label: "Vehicle 2", value: "op-3" },
                                  ]}
                                  onChange={(value) => { setSelected(value) }}
                                  placeholder=" Vehicle"
                              />

                              <DatePicker
                                title="Date"
                                date={date}
                                onChange={(date) => setDate(date)}
                            />


                            <DatePicker
                                title="Date"
                                date={date1}
                                onChange={(date1) => setDate1(date1)}
                            />

                              {/* <Select
                                  selected={selected}
                                  options={[
                                      { label: "Alert Type", value: "op-1" },
                                      { label: "Alert Type 1", value: "op-2" },
                                      { label: "Alert Type 2", value: "op-3" },
                                  ]}
                                  onChange={(value) => { setSelected(value) }}
                                  placeholder=" -- select --"
                              />   */}
                                
                          </FormField>
                    </div>

              
                    <div className="technician_chart" style={{ height: 300 }}>  
                        <MyResponsiveRadar/>
                    </div>  
                </div>
    
            </WidgetWrapper>
    
        )
    };
    
 
  

export default CountsWidget;
