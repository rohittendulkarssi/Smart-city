import React, { PureComponent } from 'react';
import {useState} from 'react';
import { registerWidget, IContextProvider  } from './uxp';  
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

import './styles.scss'; 

import { Pie } from 'react-chartjs-2';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart, } from 'recharts';

import { ResponsivePie } from '@nivo/pie';

import { Line, Circle } from 'rc-progress';

import { ResponsiveRadar } from '@nivo/radar'

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

 
interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}
  

// export default class OrderSummary extends PureComponent { 

    const OrderSummary: React.FunctionComponent<IWidgetProps> = () => {   

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
            <CartesianGrid strokeDasharray="0 0" />
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
  

const Order_TrendWidget: React.FunctionComponent<IWidgetProps> = () => {  

    return ( 

         <WidgetWrapper className="smart-city_box order_trend-box">  

            <TitleBar title="Maintenance Work Order Trend"></TitleBar> 

            <div className="smart-city-content">  
                <div className="technician_chart" style={{ height: 250 }}>  
                    <OrderSummary/> 
                </div>  
            </div>

        </WidgetWrapper> 
    )
}; 


const Order_SummaryWidget: React.FunctionComponent<IWidgetProps> = () => {  

    

var order_Summarydata = [ 
    {
        "id": "1", 
        "work_Order": 'Wo-123456789',
        "location": "Al Haram Dist", 
        "alert_Time":"2023-01-11 07:56:46",
        "status" : "ontime",
        "alert_Type" : "Pending" 
    },
    {
        "id": "2",
        "work_Order": 'Wo-123456789',
        "location": "Al Haram Dist", 
        "alert_Time":"2023-01-11 07:56:46",
        "status" : "ontime",
        "alert_Type" : "Pending" 
    },
    {
        "id": "3",
        "work_Order": 'Wo-123456789',
        "location": "Al Haram Dist", 
        "alert_Time":"2023-01-11 07:56:46",
        "status" : "ontime",
        "alert_Type" : "Pending" 
    },
    {
        "id": "4", 
        "work_Order": 'Wo-123456789',
        "location": "Al Haram Dist", 
        "alert_Time":"2023-01-11 07:56:46",
        "status" : "ontime",
        "alert_Type" : "Pending" 
    } ,
    {
        "id": "5", 
        "work_Order": 'Wo-123456789',
        "location": "Al Haram Dist", 
        "alert_Time":"2023-01-11 07:56:46",
        "status" : "ontime",
        "alert_Type" : "Pending" 
    } ,
    {
        "id": "6", 
        "work_Order": 'Wo-123456789',
        "location": "Al Haram Dist", 
        "alert_Time":"2023-01-11 07:56:46",
        "status" : "ontime",
        "alert_Type" : "Pending" 
    } ,
    {
        "id": "7", 
        "work_Order": 'Wo-123456789',
        "location": "Al Haram Dist", 
        "alert_Time":"2023-01-11 07:56:46",
        "status" : "ontime",
        "alert_Type" : "Pending" 
    } 
];
 

const getDataItems = (max: number, pageToken: string) => {
    let last = 0

    if (pageToken !== null) last = parseInt(pageToken);

    let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
        let data = order_Summarydata.filter((item: any, key: number) => (key > last && key <= last + max));
        let response = { items: data, pageToken: (last + data.length).toString() }
        resolve(response);
    })

    return p;
}

    return ( 

       
       <WidgetWrapper className="smart-city_box order_summary-box"> 

        <TitleBar title="Maintenance Work Order Summary"></TitleBar>

        
        <div className="smart-city-content">
            <DataTable
                data={(max, last) => getDataItems(max, last)}
                pageSize={10}
                columns={[
                    {
                        title: "Work Order",
                        width: "20%",
                        renderColumn: (item) => <ItemCard
                            item={item}
                            subTitleField="work_Order"
                            className="data-table-item"
                        />
                    },
                    {
                        title: "Location",
                        width: "20%",
                        renderColumn: (item) => <ItemCard
                            item={item}
                            subTitleField="location"
                            className="data-table-item"
                        />
                    },
                    {
                        title: "Alert Time",
                        width: "25%",
                        renderColumn: (item) => <ItemCard
                            item={item}
                            subTitleField="alert_Time"
                            className="data-table-item"
                        />
                    },
                    {
                        title: "Alert Type",
                        width: "20%",
                        renderColumn: (item) => <ItemCard
                            item={item}
                            subTitleField="alert_Type"
                            className="data-table-item"
                        />
                    },
                    {
                        title: "Status",
                        width: "15%",
                        renderColumn: (item) => <ItemCard
                            item={item}
                            subTitleField="status"
                            className="data-table-item"
                        />
                    }
                ]}
            />
        </div>

        </WidgetWrapper>  

    )
};




const Segregation_MetricsWidget: React.FunctionComponent<IWidgetProps> = () => {  
 

var data =[
    {
      "id": "plastic",
      "label": "Plastic",
      "value": 185,
      "color": "#025639"
    },
    {
      "id": "paper",
      "label": "Paper", 
      "value": 521,
      "color": "#0c2e23"
    },
    {
      "id": "metal",
      "label": "Metal",
      "value": 136,
      "color": "#0c7652"
    },
    {
      "id": "food_waste",
      "label": "Food Waste",
      "value": 205,
      "color": "#460357"
    },
    {
      "id": "glass",
      "label": "Glass",
      "value": 400,
      "color": "#cdff95"
    }
  ]

const MyResponsivePie = ({  }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 0, right: 40, bottom: 60, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
         
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 15,
                itemTextColor: '#fff',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#fff'
                        }
                    }
                ]
            }
        ]}
    />
)

    return ( 
       
        <WidgetWrapper className="smart-city_box segregation_metrics-box"> 
      

            <TitleBar title="Waste Segregation Metrics"></TitleBar>  

            <div className="smart-city-content">  
                <div className="technician_chart" style={{ height: 200 }}>  
                    <MyResponsivePie/>
                </div>  
            </div>

        </WidgetWrapper>

    )
};




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



const Waste_binWidget: React.FunctionComponent<IWidgetProps> = () => {  

    return ( 

         <WidgetWrapper className="smart-city_box waste-bin-box">  

            <TitleBar title="Waste Bin Status"></TitleBar> 

            <div className="smart-city-content">  

                <div className='status-content'>
                        <div className='status attention-status'>
                            <h3>68</h3>
                            <p>Attention</p>
                        </div>
                        <div className='status pending-status'>
                            <h3>36</h3>
                            <p>Pending</p>
                        </div>
                        <div className='status resolved-status'>
                            <h3>79</h3>
                            <p>Resloved</p>
                        </div>
                </div>

                <div className="technician_chart">  
                    <Line percent={70} strokeWidth={1.5} strokeColor="#076d49" />
                    <div className='chart-sec'>
                        <div className='chart-issue'><h3>147</h3><p>Issued</p></div>
                        <div className='chart-pending'><h3>36</h3><p>Pending</p></div>
                    </div>
                </div>  
            </div>

        </WidgetWrapper> 
    )
}; 



const Waste_CollectionWidget: React.FunctionComponent<IWidgetProps> = () => {  

    return ( 

         <WidgetWrapper className="smart-city_box waste-collection-vehicle">  

            <TitleBar title="Waste Collection vehicle"></TitleBar> 

            <div className="smart-city-content">  

                <div className='status-content'>
                        <div className='status attention-status'>
                            <div className='vahicle-icon co2-icon'></div>
                            <p>Carbon Footprint</p>
                            <h2>1,236.0</h2>
                            <span>mgCO2</span>
                        </div>
                        <div className='status fuel-consumption-status'>
                            <div className='vahicle-icon fuel-consumption-icon'></div>
                            <p>Fuel Consumption</p>
                            <h2>1,500</h2>
                            <span>Gallons</span>
                        </div>
                        <div className='status s-consumption-status'>
                            <div className='vahicle-icon s-consumption-icon'></div>
                            <p>S Consumption</p>
                            <h2>80,730</h2>
                            <span>Riyal</span>
                        </div>
                </div>
  
            </div>

        </WidgetWrapper> 
    )
}; 

 

const Segregation_Metrics_vehicle: React.FunctionComponent<IWidgetProps> = (props) => {
 

       var AfterHours = [
		{
			"DepartmentName": "ABEX",
			"TotalTons": "65 Tons" 
		},
		{
			"DepartmentName": "Airports",
			"TotalTons": "23 Tons" 
		},
		{
			"DepartmentName": "Business Development",
			"TotalTons": "212 Tons " 
		},
		{
			"DepartmentName": "Contract Administration",
			"TotalTons": "158 Tons" 
		},
		{
			"DepartmentName": "Corporate Brand Custodian",
			"TotalTons": "232 Tons" 
		},
		{
			"DepartmentName": "Department 1",
			"TotalTons": "104 Tons" 
		},
		{
			"DepartmentName": "Engineering",
			"TotalTons": "158 Tons" 
		},
		{
			"DepartmentName": "Environment Health and Safety",
			"TotalTons": "21 Tons" 
		},
		{
			"DepartmentName": "ERC",
			"TotalTons": "60 Tons " 
		},
		{
			"DepartmentName": "Finance & Accounts",
			"TotalTons": "29 Tons" 
		},
		{
			"DepartmentName": "Information Technology",
			"TotalTons": "85 Tons" 
		},
		{
			"DepartmentName": "IT - Ahmedabad",
			"TotalTons": "18 Tons" 
		},
		{
			"DepartmentName": "Legal",
			"TotalTons": "30 Tons" 
		},
		{
			"DepartmentName": "MAAS",
			"TotalTons": "131 Tons" 
		},
		{
			"DepartmentName": "Merger & Aquisition",
			"TotalTons": "101 Tons" 
		},
		{
			"DepartmentName": "Operation & Maintenance",
			"TotalTons": "65 Tons" 
		},
		{
			"DepartmentName": "Projects",
			"TotalTons": "27 Tons" 
		},
		{
			"DepartmentName": "Secretarial",
			"TotalTons": "58 Tons" 
		}, 
		{
			"DepartmentName": "Business Development",
			"TotalTons": "75 Tons" 
		},
		{
			"DepartmentName": "Contract Administration",
			"TotalTons": "135 Tons" 
		},
		{
			"DepartmentName": "Corporate Brand Custodian",
			"TotalTons": "90 Tons" 
		},
		{
			"DepartmentName": "Department 1",
			"TotalTons": "104 Tons" 
		},
		{
			"DepartmentName": "Engineering",
			"TotalTons": "158 Tons" 
		},
		{
			"DepartmentName": "Strategy",
			"TotalTons": "165 Tons" 
		},
		{
			"DepartmentName": "Sustainability",
			"TotalTons": "114 Tons" 
		},
		{
			"DepartmentName": "Techno Commercial",
			"TotalTons": "167 Tons" 
		},
		{
			"DepartmentName": "Techno Commercial Function",
			"TotalTons": "36 Tons" 
		},
		{
			"DepartmentName": "Technology",
			"TotalTons": "117 Tons" 
		},
		{
			"DepartmentName": "Projects",
			"TotalTons": "78 Tons" 
		},
		{
			"DepartmentName": "Secretarial",
			"TotalTons": "54 Tons" 
		},
		{
			"DepartmentName": "Strategy",
			"TotalTons": "1605 Tons" 
		}
	];
    

    var data =[
        {
          "id": "plastic",
          "label": "Plastic",
          "value": 185,
          "color": "#025639"
        },
        {
          "id": "paper",
          "label": "Paper", 
          "value": 521,
          "color": "#0c2e23"
        },
        {
          "id": "metal",
          "label": "Metal",
          "value": 136,
          "color": "#0c7652"
        },
        {
          "id": "food_waste",
          "label": "Food Waste",
          "value": 205,
          "color": "#460357"
        },
        {
          "id": "glass",
          "label": "Glass",
          "value": 400,
          "color": "#cdff95"
        }
      ]
    
const MyResponsivePie = ({  }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 0, right: 40, bottom: 60, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
         
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 15,
                itemTextColor: '#fff',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#fff'
                        }
                    }
                ]
            }
        ]}
    />
)

    let { uxpContext } = props;
    let [sectionAfterHours, setsectionAfterHours] = React.useState<any>([]);
    let [afterhoursData,setafterhoursData]=React.useState<any>([])
    let [afterhoursColorData,setafterhoursColorData]=React.useState<any>([])
    let MaxIndex, offset = 1;  

    React.useEffect(()=>{
        getAfterHours()
    },[]);

    async function getAfterHours() {
        
        setsectionAfterHours(AfterHours);
        const StartIndex = 0, EndIndex = 24;
        afterhoursFun(StartIndex, EndIndex, AfterHours); 
        
    }

 
    function afterhoursFun(StartIndex:number, EndIndex:number, ahdata:Array<any>) {
        let cdata = ahdata;
        MaxIndex = (cdata.length);
        let AfterTotal = 0;
        afterhoursData = `<div class="afterhours_tree"> `
        
        afterhoursData = afterhoursData +` <ul>`

        for (var i = StartIndex; i < EndIndex; i++) {
            afterhoursData = afterhoursData + 
                    `<li>                                    
                            <p> ` + cdata[i].DepartmentName + ` 
                                <span class="` + cdata[i].DepartmentName + `">` + cdata[i].TotalTons + `</span>
                            </p>   
                    </li>`
            AfterTotal = AfterTotal + parseInt(cdata[i].TotalTons);
        }

        afterhoursData = afterhoursData + `</ul>`
         
        afterhoursData = afterhoursData + `</div>`;

        let afterhoursDataColor = `<div class="color_value">              
                  <ul>`
                    for (var i = StartIndex; i < EndIndex; i++) {
                        afterhoursColorData = Math.round((parseInt(cdata[i].TotalTons) / AfterTotal) * 100);
                        afterhoursDataColor = afterhoursDataColor + `<li class="` + cdata[i].DepartmentName + `" style="width : ` + afterhoursColorData + `%"></li>`
                    }
                    
                    afterhoursDataColor = afterhoursDataColor + `</ul>                        
                </div>`;

        setafterhoursData(afterhoursData);
        setafterhoursColorData(afterhoursDataColor);
    }
     

return (
<WidgetWrapper className="smart-city_box segregation_metrics-box"> 
      

<TitleBar title="Waste Segregation Metrics"></TitleBar>  

<div className="smart-city-content">  
    <div className="technician_chart" style={{ height: 200 }}>  
        <MyResponsivePie/>
    </div>  
   
         <div className="body" style={{marginTop: '2em'}}>
            <div className='sub_title_bar'> District Waste (Tons)</div>  
            <div className='afterhours_inner_widget'> 
            
             <div className="afterhours_data_color" dangerouslySetInnerHTML={{__html: afterhoursColorData }}></div> 
                <div className="afterhours_data" dangerouslySetInnerHTML={{__html: afterhoursData }}></div>
           </div>
       </div>
</div>

</WidgetWrapper>
)
}

 


const VehicleSummaryWidget: React.FunctionComponent<IWidgetProps> = () => {  

    var vehicledata = [  
        {
            "taste": "Car",
            "car": 76,
            "taxi": 65,
            "bus": 46,
            "truck": 87,
            "motorcycle": 35,
            "van": 76 
          },
          {
            "taste": "Taxi",
            "car": 44,
            "taxi": 12,
            "bus": 62,
            "truck": 47,
            "motorcycle": 51,
            "van": 67
          },
          {
            "taste": "Bus",
            "car": 35,
            "taxi": 64,
            "bus": 27,
            "truck": 52,
            "motorcycle": 18,
            "van": 85 
          },
          {
            "taste": "Truck",
            "car": 32,
            "taxi": 58,
            "bus": 63,
            "truck": 74,
            "motorcycle": 42,
            "van": 69
          },
          {
            "taste": "Motorcycle",
            "car": 55,
            "taxi": 34,
            "bus": 86,
            "truck": 12,
            "motorcycle": 62,
            "van": 56
          },
          {
            "taste": "Van",
            "car": 45,
            "taxi": 74,
            "bus": 23,
            "truck": 98,
            "motorcycle": 76,
            "van": 67
          }
      ]
    
      const MyResponsiveRadar = ({}) => (
        <ResponsiveRadar
            data={vehicledata} 
            
            keys={[ 'car', 'taxi', 'bus', 'truck', 'motorcycle', 'van']}
            indexBy="taste"

            valueFormat=">-.2f"
            margin={{ top: 20, right: 20, bottom: 10, left: 20 }} 
            colors={{ scheme: 'nivo' }}
        
            legends={[
                {
                    anchor: 'top-right',
                    direction: 'column',
                    translateX: 0,
                    translateY: 0,
                    itemWidth: 120,
                    itemHeight: 23,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    justify: false, 
                }
            ]}
        />
    )
    
        return ( 
           
            <WidgetWrapper className="smart-city_box vehicle_summary-box">  
                <TitleBar title="vehicle Summary"></TitleBar>  
    
                <div className="smart-city-content">  
                    <div className="technician_chart" style={{ height: 300 }}>  
                        <MyResponsiveRadar/>
                    </div>  
                </div>
    
            </WidgetWrapper>
    
        )
    };
    
 
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
        




        

const Water_SummaryWidget: React.FunctionComponent<IWidgetProps> = () => {  

    return ( 

         <WidgetWrapper className="smart-city_box water_summary-box">  

            <TitleBar title="Water Summary"></TitleBar> 

            <div className="smart-city-content">  

                <div className='status-content'>
                        <div className='status consumption-status'>
                            <div className='vahicle-icon co2-icon'></div>
                            <p>Water Consumption</p>
                            <h2>29</h2>
                            <span className='red'>+40%</span>
                        </div>
                        <div className='status population-status'>
                            <div className='vahicle-icon fuel-consumption-icon'></div>
                            <p>Population</p>
                            <h2>9,492</h2>
                            <span className='red'>+25% </span>
                        </div>
                        <div className='status water-troubles-status'>
                            <div className='vahicle-icon s-consumption-icon'></div>
                            <p>Water Troubles Monthly</p>
                            <h2>38</h2>
                            <span className='green'>-15%</span>
                        </div>
                </div>
  
            </div>

        </WidgetWrapper> 
    )
}; 

 
  
        




 
/**
 * Register as a Widget
 */ 

registerWidget({
    id: "order_Trend", 
    widget: Order_TrendWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

registerWidget({
    id: "Order_Summary", 
    widget: Order_SummaryWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

registerWidget({
    id: "segregation_Metrics", 
    widget: Segregation_MetricsWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
}); 


registerWidget({
    id: "cctvWidget", 
    widget: CCTVWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
}); 


registerWidget({
    id: "wasteBinStatus", 
    widget: Waste_binWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
}); 


registerWidget({
    id: "waste_Collection_Vehicle", 
    widget: Waste_CollectionWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
}); 



registerWidget({
    id: "segregation_Metrics_vehicle", 
    widget: Segregation_Metrics_vehicle,
    configs: {
        layout: {
            w: 16,
            h: 17,
            minH: 12,
            minW: 12
        }
    }
}); 




registerWidget({
    id: "vehicleSummaryWidget", 
    widget: VehicleSummaryWidget,
    configs: {
        layout: {
            // w: 16,
            // h: 17,
            // minH: 12,
            // minW: 12
        }
    }
}); 



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



registerWidget({
    id: "waterSummary", 
    widget: Water_SummaryWidget,
    configs: {
        layout: {
            // w: 14,
            // h: 13,
            // minH: 13,
            // minW: 14
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