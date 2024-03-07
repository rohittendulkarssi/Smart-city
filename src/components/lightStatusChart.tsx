import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 

 

      
        const data1 = [
            { name: 'Jan', value: 18000 },
            { name: 'Feb', value: 50000 },
            { name: 'Mar', value: 12035 },
            { name: 'Apr', value: 30040 },
            { name: 'May', value: 65000 },
            { name: 'Jun', value: 35035 },
            { name: 'Jul', value: 13500 },
            { name: 'Aug', value: 12035 },
            { name: 'Sep', value: 30040 },
            { name: 'Oct', value: 35000 },
            { name: 'Nov', value: 25035 },
            { name: 'Dev', value: 16500 },
        ];

        const data2 = [
            { name: 'Week 1', value: 32000 },
            { name: 'Week 2', value: 12000 },
            { name: 'Week 3', value: 32035 },
            { name: 'Week 4', value: 30040 }, 
        ];

        const data3 = [
            { name: 'Sun', value: 20000 },
            { name: 'Mon', value: 41000 },
            { name: 'Tue', value: 35035 },
            { name: 'Wed', value: 1040 },
            { name: 'Thu', value: 25000 },
            { name: 'Fri', value: 30035 },
            { name: 'Sat', value: 5000 },
        ]; 
 

const CustomBar = ({
    x,
    y,
    width,
    height,
    payload,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    payload: {
      value: number; 
    };
  }) => {
    const max = Math.max(
      ...data1
        .concat(data2)
        .concat(data3)
        .map((item) => item.value)
    );
    const percentage = (payload.value / max) * 100;
  
    return (
      <g>
        <defs>
          <linearGradient id={`gradient-${percentage}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#01af94" />
            <stop offset={`${percentage}%`} stopColor="#005842" />
            <stop offset="100%" stopColor="#005936" />
          </linearGradient>
        </defs>
        <rect x={x} y={y} width={width} height={height} fill={`url(#gradient-${percentage})`} />
      </g>
    );
  };

const StreetLightStatusChart: React.FunctionComponent<{}> = () => {
  const [toggleFilterValue, setToggleFilterValue] = useState<string>('day');

  const handleFilterChange = (value: string) => {
    console.log('Selected Filter Value:', value);
    setToggleFilterValue(value);
  };

  const getDataByFilter = () => {
    switch (toggleFilterValue) {
      case 'week':
        return data2;
      case 'month':
        return data1;
      case 'day':
      default:
        return data3;
    }
  };

  const data = getDataByFilter();  
 const colorArray = ['#056e5e', '#c70627', '#f3b809', '#056e5e', '#056e5e', '#056e5e',];  
//const colorArray = ['#056e5e', '#056e5e', '#056e5e', '#056e5e', '#056e5e', '#056e5e',];  


  return (
    <div className="smart-city-content">
      <div className="technician_chart" style={{ height: 200 }}>
       
        <div className="chart-top" style={{marginTop:"10px"}}>
        <div className="sub_title_bar">Total Revenue (Riyal)</div>
          <ToggleFilter
            options={[
              { label: '7D', value: 'day' },
              { label: '1M', value: 'week' },
              { label: '1Y', value: 'month' },
            ]}
            value={toggleFilterValue}
            onChange={handleFilterChange}
          />
        </div>


        {/* <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={700}
            height={400}
            data={getDataByFilter()}
            margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="0 0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip /> 
            <Bar dataKey="value" barSize={20} shape={<CustomBar x={0} y={0} width={0} height={0} payload={{
                          value: 0
                      }} />} />
          </BarChart>
        </ResponsiveContainer> */}


           <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={700}
              height={400}
              data={data}
              margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="0 0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip /> 
              <Bar dataKey="value" barSize={20}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colorArray[index % colorArray.length]} />
                ))}
              </Bar>
            </BarChart>
 
          </ResponsiveContainer>  

{/* 
<ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={700}
        height={400}
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
      >
        <defs>
          {colorArray.map((color, index) => (
            <linearGradient key={`gradient-${index}`} id={`colorGradient${index}`} x1="3" y1="4" x2="5" y2="1">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={colorArray[(index + 1) % colorArray.length]} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="0 0" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" barSize={20}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#colorGradient${index % colorArray.length})`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer> */}


      </div>
    </div>
  );
};

export default StreetLightStatusChart;
