import React, { PureComponent } from 'react';
import {useState} from 'react';
import { registerWidget, IContextProvider  } from './uxp';  
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

import './styles.scss'; 

 

import { ResponsiveContainer, LineChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart} from 'recharts';
 

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 
 
interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}  
 
const EnergyConsumption : React.FunctionComponent<IWidgetProps> = (props) => {

        const NuclearStockpileChart = () => {
            const options = {
                    
                chart: {
                    type: 'area'
                },
                accessibility: {
                    description: ''
                },
                title: {
                    text: ''
                }, 
                xAxis: {
                    allowDecimals: false,
                    accessibility: {
                        rangeDescription: 'Range: 1940 to 2017.'
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
                },
                plotOptions: {
                    area: {
                        pointStart: 1940,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'USA',
                    data: [
                        null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
                        1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
                        28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
                        26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
                        23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
                        21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
                        10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
                        5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
                        3750, 3708, 3708
                    ]
                }, {
                    name: 'USSR/Russia',
                    data: [null, null, null, null, null, null, null, null, null,
                        1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
                        3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
                        14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
                        32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
                        32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
                        13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
                        5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
                        4310, 4495, 4477
                    ]
                }] 

            };
        
            
            return (
                <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            );
            }; 
        
            return ( 
                
                <WidgetWrapper className="smart-city_box energy_consumption-box">  
                    <TitleBar title="Energy Consumption"></TitleBar>  
        
                    <div className="smart-city-content">  
                        <div className="technician_chart" style={{ height: 150 }}>  
                            
                                <NuclearStockpileChart />    

                        </div>  
                    </div>
        
                </WidgetWrapper>
            )
    };
        
 
 
 
/**
 * Register as a Widget
 */   


registerWidget({
    id: "energyConsumption", 
    widget: EnergyConsumption,
    configs: {
        layout: {
            w: 14,
            h: 13,
            minH: 13,
            minW: 14
        }
    }
}); 
 



/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "smart_city",
    label: "Smart_city",
    // click: () => alert("Hello"),
    component: Smart_cityWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"smart_city",
    component: Smart_cityWidget
});
*/