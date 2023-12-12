import React, { useState } from 'react';
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

// import './styles.scss';  
 
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
 



const EnergyConsumption : React.FunctionComponent<{}> = (props) => {

  
    const energyConsumptionData1 = [
        {
        name: '1 Jan',
        power: 180000,
        solar: 250000,
        amt: 2400,
        },
        {
        name: '2 Jan',
        power: 300000,
        solar: 150000,
        amt: 2210,
        },
        {
        name: '3 Jan',
        power: 180000,
        solar: 420000,
        amt: 2290,
        },
        {
        name: '4 Jan',
        power: 320000,
        solar: 340000,
        amt: 2000,
        },
        {
        name: '5 Jan',
        power: 190000,
        solar: 670000,
        amt: 2181,
        },
        {
        name: '6 Jan',
        power: 350000,
        solar: 270000,
        amt: 2500,
        },
        {
        name: '7 Jan',
        power: 100000,
        solar: 100000,
        amt: 2100,
        },
    ];    
    
    const energyConsumptionData2  = [
        {
        name: '1 Jan',
        power: 180000,
        solar: 250000,
        amt: 25000,
        },
        {
        name: '2 Jan',
        power: 250000,
        solar: 310000,
        amt: 13610,
        },
        {
        name: '3 Jan',
        power: 140000,
        solar: 220000,
        amt: 2290,
        },
        {
        name: '4 Jan',
        power: 320000,
        solar: 340000,
        amt: 2000,
        },
        {
        name: '5 Jan',
        power: 360000,
        solar: 780000,
        amt: 2181,
        },
        {
        name: '6 Jan',
        power: 520000,
        solar: 270000,
        amt: 2500,
        },
        {
        name: '7 Jan',
        power: 100000,
        solar: 200000,
        amt: 2100,
        },
    ]; 
    
    const energyConsumptionData3  = [
        {
        name: '1 Jan',
        power: 350000,
        solar: 100000,
        amt: 25000,
        },
        {
        name: '2 Jan',
        power: 180000,
        solar: 240000,
        amt: 13610,
        },
        {
        name: '3 Jan',
        power: 140000,
        solar: 220000,
        amt: 2290,
        },
        {
        name: '4 Jan',
        power: 320000,
        solar: 340000,
        amt: 2000,
        },
        {
        name: '5 Jan',
        power: 400000,
        solar: 160000,
        amt: 2181,
        },
        {
        name: '6 Jan',
        power: 340000,
        solar: 200000,
        amt: 2500,
        },
        {
        name: '7 Jan',
        power: 150000,
        solar: 340000,
        amt: 2100,
        },
    ];    

    const [toggleFilterValue, setToggleFilterValue] = React.useState<string>("day");  

    const handleFilterChange = (value:any) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    }; 

    const filterToDataMap: Record<string, Array<{ name: string; power: number; solar: number; amt: number; }>> = {
        month: energyConsumptionData1,
        week: energyConsumptionData2,
        day: energyConsumptionData3, 
    };
     
    const selectedData = filterToDataMap[toggleFilterValue] || energyConsumptionData1;
 
            
                return ( 
                   
                    <WidgetWrapper className="smart-city_box energy_consumption-box">  
                        <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>  
            
                        <div className="smart-city-content">  

                            <div className="technician_chart" style={{ height: 270 }}>   
                           
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

                                 <ResponsiveContainer width="100%" height="100%">  

                                    <AreaChart width={400} height={300} data={selectedData}

                                    margin={{
                                        top: 10,
                                        right: 10,
                                        left: 0,
                                        bottom: 30,
                                    }}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip /> 
                                    <Legend />
                                    <Area
                                    type="monotone"
                                    dataKey="2023"
                                    stackId="1"
                                    stroke="#001912"
                                    fill="url(#gradient1)"  
                                    />

                                    <Area
                                    type="monotone"
                                    dataKey="2022"
                                    stackId="1"
                                    stroke="#79dccc"
                                    fill="url(#gradient2)"  
                                    />

                                    <defs>
                                    <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00516a" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#001912" stopOpacity={0.2} />
                                    </linearGradient>

                                    <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#79dccc" stopOpacity={0.2} />
                                    </linearGradient>
                                    </defs>

                                </AreaChart> 

                            </ResponsiveContainer> 

                            </div>  
                        </div>
 
            
                    </WidgetWrapper>
                )
        };
        


export default EnergyConsumption;
