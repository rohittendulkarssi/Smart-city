import React, { useState } from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';
import { WidgetWrapper, SearchBox,  TitleBar, FormField, Label, Select, DatePicker,  } from "uxp/components";
  
 
 const AlertTrends: React.FunctionComponent<{}> = () => {   
  
  let [inputValue, setInputValue] = React.useState<string | null>("Location");
  let [selected, setSelected] = React.useState<string | null>("All Alert"); 
  let [date, setDate] = React.useState<Date>(new Date());
  let [date1, setDate1] = React.useState<Date>(new Date()); 
         
const data = [ 

  {
    name: 'Traffic',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: 'Crowed',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: 'ANPR',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: 'Object Detetcted',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  } 
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};
 
const totalValue = data.reduce((total, entry) => total + entry.uv, 0);
const minAngle = 5;  

data.forEach(entry => {
  entry.uv = Math.max(entry.uv, (minAngle / 360) * totalValue);  
}); 
    
        return ( 
           
            <WidgetWrapper className="smart-city_box vehicle_summary-box">  
                <TitleBar title="Alert Trends" icon='https://static.iviva.com/images/Udhayimages/alert-trends.png'></TitleBar>  
    
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
                                      { label: "All Alert", value: "op-1" },
                                      { label: "All Alert 1", value: "op-2" },
                                      { label: "All Alert 2", value: "op-3" },
                                  ]}
                                  onChange={(value) => { setSelected(value) }}
                                  placeholder=" All Alert"
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
                                
                          </FormField>
                    </div>

              
                    <div className="technician_chart" style={{ height: 300 }}>   

                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={10} data={data}>
                          <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background 
                            dataKey="uv"
                          />
                          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                        </RadialBarChart>
                      </ResponsiveContainer> 

                    </div>  
                </div>
    
            </WidgetWrapper>
    
        )
    };
    
 
  

export default AlertTrends;
