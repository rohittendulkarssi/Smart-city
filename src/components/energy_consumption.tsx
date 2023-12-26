import React, { useState } from 'react';
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

// import './styles.scss';  
 
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
 



const EnergyConsumption : React.FunctionComponent<{}> = (props) => {

  
    const energyConsumptionData1 = [
        {
            name: '1 Jan',
            power_consumption: 38,
            burning_hours: 25,
            amt: 1,
        },
        {
            name: '2 Jan',
            power_consumption: 30,
            burning_hours: 15,
            amt: 2,
        },
        {
            name: '3 Jan',
            power_consumption: 38,
            burning_hours: 22,
            amt: 3,
        },
        {
            name: '4 Jan',
            power_consumption: 42,
            burning_hours: 34,
            amt: 4,
        },
        {
            name: '5 Jan',
            power_consumption: 19,
            burning_hours: 12,
            amt: 5,
        },
        {
            name: '6 Jan',
            power_consumption: 35,
            burning_hours: 27,
            amt: 6,
        },
        {
            name: '7 Jan',
            power_consumption: 20,
            burning_hours: 10,
            amt: 7,
        },
        {
            name: '8 Jan',
            power_consumption: 28,
            burning_hours: 25,
            amt: 8,
        },
        {
            name: '9 Jan',
            power_consumption: 30,
            burning_hours: 15,
            amt: 9,
        },
        {
            name: '10 Jan',
            power_consumption: 18,
            burning_hours: 12,
            amt: 10,
        },
        {
            name: '11 Jan',
            power_consumption: 42,
            burning_hours: 34,
            amt: 11,
        },
        {
            name: '12 Jan',
            power_consumption: 49,
            burning_hours: 27,
            amt: 12,
        },
        {
            name: '13 Jan',
            power_consumption: 35,
            burning_hours: 27,
            amt: 13,
        },
        {
            name: '14 Jan',
            power_consumption: 22,
            burning_hours: 10,
            amt: 14,
        },
        {
            name: '15 Jan',
            power_consumption: 37,
            burning_hours: 34,
            amt: 15,
        },
        {
            name: '16 Jan',
            power_consumption: 29,
            burning_hours: 17,
            amt: 16,
        },
        {
            name: '17 Jan',
            power_consumption: 35,
            burning_hours: 27,
            amt: 17,
        },
        {
            name: '18 Jan',
            power_consumption: 18,
            burning_hours: 10,
            amt: 18,
        },
        {
            name: '19 Jan',
            power_consumption: 38,
            burning_hours: 25,
            amt: 19,
        },
        {
            name: '20 Jan',
            power_consumption: 30,
            burning_hours: 15,
            amt: 20,
        },
        {
            name: '21 Jan',
            power_consumption: 30,
            burning_hours: 27,
            amt: 21,
        },
        {
            name: '22 Jan',
            power_consumption: 35,
            burning_hours: 27,
            amt: 22,
        },
        {
            name: '23 Jan',
            power_consumption: 20,
            burning_hours: 10,
            amt: 23,
        },
        {
            name: '24 Jan',
            power_consumption: 38,
            burning_hours: 27,
            amt: 24,
        }
    ];    
    
    const energyConsumptionData2  = [ 

        {
            name: '1 Jan',
            power_consumption: 30,
            burning_hours: 25,
            amt: 1,
        },
        {
            name: '2 Jan',
            power_consumption: 35,
            burning_hours: 30,
            amt: 2,
        },
        {
            name: '3 Jan',
            power_consumption: 38,
            burning_hours: 22,
            amt: 3,
        },
        {
            name: '4 Jan',
            power_consumption: 42,
            burning_hours: 34,
            amt: 4,
        },
        {
            name: '5 Jan',
            power_consumption: 36,
            burning_hours: 27,
            amt: 5,
        },
        {
            name: '6 Jan',
            power_consumption: 44,
            burning_hours: 20,
            amt: 6,
        },
        {
            name: '7 Jan',
            power_consumption: 30,
            burning_hours: 20,
            amt: 7,
        },
        {
            name: '8 Jan',
            power_consumption: 38,
            burning_hours: 25,
            amt: 8,
        },
        {
            name: '9 Jan',
            power_consumption: 30,
            burning_hours: 15,
            amt: 9,
        },
        {
            name: '10 Jan',
            power_consumption: 38,
            burning_hours: 22,
            amt: 10,
        },
        {
            name: '11 Jan',
            power_consumption: 42,
            burning_hours: 34,
            amt: 11,
        },
        {
            name: '12 Jan',
            power_consumption: 39,
            burning_hours: 27,
            amt: 12,
        },
        {
            name: '13 Jan',
            power_consumption: 41,
            burning_hours: 35,
            amt: 13,
        },
        {
            name: '14 Jan',
            power_consumption: 33,
            burning_hours: 10,
            amt: 14,
        },
        {
            name: '15 Jan',
            power_consumption: 30,
            burning_hours: 24,
            amt: 15,
        },
        {
            name: '16 Jan',
            power_consumption: 39,
            burning_hours: 27,
            amt: 16,
        },
        {
            name: '17 Jan',
            power_consumption: 35,
            burning_hours: 22,
            amt: 17,
        },
        {
            name: '18 Jan',
            power_consumption: 35,
            burning_hours: 22,
            amt: 18,
        },
        {
            name: '19 Jan',
            power_consumption: 31,
            burning_hours: 27,
            amt: 19,
        },
        {
            name: '20 Jan',
            power_consumption: 22,
            burning_hours: 15,
            amt: 20,
        },
        {
            name: '21 Jan',
            power_consumption: 37,
            burning_hours: 35,
            amt: 21,
        },
        {
            name: '22 Jan',
            power_consumption: 25,
            burning_hours: 17,
            amt: 22,
        },
        {
            name: '23 Jan',
            power_consumption: 37,
            burning_hours: 31,
            amt: 23,
        },
        {
            name: '24 Jan',
            power_consumption: 21,
            burning_hours: 18,
            amt: 24,
        }
    ]; 
    
    const energyConsumptionData3  = [
       
        {
            name: '1 Jan',
            power_consumption: 36,
            burning_hours: 31,
            amt: 1,
        },
        {
            name: '2 Jan',
            power_consumption: 23,
            burning_hours: 16,
            amt: 2,
        },
        {
            name: '3 Jan',
            power_consumption: 25,
            burning_hours: 18,
            amt: 3,
        },
        {
            name: '4 Jan',
            power_consumption: 32,
            burning_hours: 28,
            amt: 4,
        },
        {
            name: '5 Jan',
            power_consumption: 38,
            burning_hours: 30,
            amt: 5,
        },
        {
            name: '6 Jan',
            power_consumption: 30,
            burning_hours: 23,
            amt: 6,
        },
        {
            name: '7 Jan',
            power_consumption: 28,
            burning_hours: 17,
            amt: 7,
        },
        {
            name: '8 Jan',
            power_consumption: 32,
            burning_hours: 25,
            amt: 8,
        },
        {
            name: '9 Jan',
            power_consumption: 40,
            burning_hours: 32,
            amt: 9,
        },
        {
            name: '10 Jan',
            power_consumption: 38,
            burning_hours: 24,
            amt: 10,
        },
        {
            name: '11 Jan',
            power_consumption: 36,
            burning_hours: 30,
            amt: 11,
        },
        {
            name: '12 Jan',
            power_consumption: 35,
            burning_hours: 27,
            amt: 12,
        },
        {
            name: '13 Jan',
            power_consumption: 36,
            burning_hours: 25,
            amt: 13,
        },
        {
            name: '14 Jan',
            power_consumption: 30,
            burning_hours: 20,
            amt: 14,
        },
        {
            name: '15 Jan',
            power_consumption: 34,
            burning_hours: 24,
            amt: 15,
        },
        {
            name: '16 Jan',
            power_consumption: 36,
            burning_hours: 28,
            amt: 16,
        },
        {
            name: '17 Jan',
            power_consumption: 35,
            burning_hours: 31,
            amt: 17,
        },
        {
            name: '18 Jan',
            power_consumption: 25,
            burning_hours: 22,
            amt: 18,
        },
        {
            name: '19 Jan',
            power_consumption: 37,
            burning_hours: 31,
            amt: 19,
        },
        {
            name: '20 Jan',
            power_consumption: 39,
            burning_hours: 32,
            amt: 20,
        },
        {
            name: '21 Jan',
            power_consumption: 34,
            burning_hours: 28,
            amt: 21,
        },
        {
            name: '22 Jan',
            power_consumption: 25,
            burning_hours: 17,
            amt: 22,
        },
        {
            name: '23 Jan',
            power_consumption: 34,
            burning_hours: 31,
            amt: 23,
        },
        {
            name: '24 Jan',
            power_consumption: 36,
            burning_hours: 31,
            amt: 24,
        }
    ];     

    
    // const hours_count  = [ 

    //     {
    //         id: '1', 
    //         count: 1,
    //     },
    //     {
    //         id: '2', 
    //         count: 2,
    //     },
    //     {
    //         id: '3', 
    //         count: 3,
    //     },
    //     {
    //         id: '4', 
    //         count: 4,
    //     },
    //     {
    //         id: '5', 
    //         count: 5,
    //     },
    //     {
    //         id: '6', 
    //         count: 6,
    //     },
    //     {
    //         id: '7', 
    //         count: 7,
    //     },
    //     {
    //         id: '8', 
    //         count: 8,
    //     },
    //     {
    //         id: '9', 
    //         count: 9,
    //     },
    //     {
    //         id: '10', 
    //         count: 10,
    //     },
    //     {
    //         id: '11', 
    //         count: 11,
    //     },
    //     {
    //         id: '12', 
    //         count: 12,
    //     },
    //     {
    //         id: '13', 
    //         count: 13,
    //     },
    //     {
    //         id: '14', 
    //         count: 14,
    //     },
    //     {
    //         id: '15', 
    //         count: 15,
    //     },
    //     {
    //         id: '16', 
    //         count: 16,
    //     },
    //     {
    //         id: '17', 
    //         count: 17,
    //     },
    //     {
    //         id: '18', 
    //         count: 18,
    //     },
    //     {
    //         id: '19', 
    //         count: 19,
    //     },
    //     {
    //         id: '20', 
    //         count: 20,
    //     },
    //     {
    //         id: '21', 
    //         count: 21,
    //     }, 
    //     {
    //         id: '22', 
    //         count: 22,
    //     },
    //     {
    //         id: '23', 
    //         count: 23,
    //     },
    //     {
    //         id: '24', 
    //         count: 24,
    //     },
    // ]; 

    const [toggleFilterValue, setToggleFilterValue] = React.useState<string>("day");  

    const handleFilterChange = (value:any) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    }; 

    const filterToDataMap: Record<string, Array<{ name: string; power_consumption: number; burning_hours: number; amt: number; }>> = {
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

                           <div className="sub_title_bar">Total kWh</div>  

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

                                 {/* <ResponsiveContainer width="100%" height="100%">  

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

                            </ResponsiveContainer>  */}



                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    width={400}
                                    height={300}
                                    data={selectedData}  
                                    margin={{
                                        top: 10,
                                        right: 0,
                                        left: 0,
                                        bottom: 30,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis yAxisId="left" />
                                    <YAxis yAxisId="right" orientation="right" />
                                    {/* <Tooltip /> */}
                                    <Legend />

                                    <Area
                                        type="monotone"
                                        dataKey="power_consumption"
                                        stackId="1"
                                        stroke="#001912"
                                        fill="url(#gradient1)"
                                        yAxisId="left"
                                    />

                                    <Area
                                        type="monotone"
                                        dataKey="burning_hours"
                                        stackId="1"
                                        stroke="#79dccc"
                                        fill="url(#gradient2)"
                                        yAxisId="left"
                                    />

                                    <Area
                                        type="monotone"
                                        dataKey="amt"
                                        stackId="0" 
                                        fill="url(#gradient3)"
                                        yAxisId="right"
                                        style={{display: "none"}}
                                        legendType="none" 
                                    />

                                    <defs>
                                        <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00516a" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#001912" stopOpacity={0.3} />
                                        </linearGradient>

                                        <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#79dccc" stopOpacity={0.3} />
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
