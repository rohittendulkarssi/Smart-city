import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 


      
        const data1 = [
            { name: '1 Jan', value: 18000 },
            { name: '2 Jan', value: 50000 },
            { name: '3 Jan', value: 12035 },
            { name: '4 Jan', value: 30040 },
            { name: '5 Jan', value: 65000 },
            { name: '6 Jan', value: 35035 },
            { name: '7 Jan', value: 13500 },
        ];

        const data2 = [
            { name: '1 Jan', value: 32000 },
            { name: '2 Jan', value: 12000 },
            { name: '3 Jan', value: 32035 },
            { name: '4 Jan', value: 30040 },
            { name: '5 Jan', value: 32000 },
            { name: '6 Jan', value: 10035 },
            { name: '7 Jan', value: 37500 },
        ];

        const data3 = [
            { name: '1 Jan', value: 20000 },
            { name: '2 Jan', value: 41000 },
            { name: '3 Jan', value: 35035 },
            { name: '4 Jan', value: 1040 },
            { name: '5 Jan', value: 25000 },
            { name: '6 Jan', value: 30035 },
            { name: '7 Jan', value: 500 },
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

  return (
    <div className="smart-city-content">
      <div className="technician_chart" style={{ height: 250 }}>
       
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
        <ResponsiveContainer width="100%" height="100%">
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
            {/* <Legend /> */}
            <Bar dataKey="value" barSize={20} shape={<CustomBar x={0} y={0} width={0} height={0} payload={{
                          value: 0
                      }} />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StreetLightStatusChart;
