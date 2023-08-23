import React, { PureComponent } from 'react';
import { registerWidget, IContextProvider  } from './uxp';  
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

import './styles.scss';



import { Pie } from 'react-chartjs-2';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart, } from 'recharts';

import { ResponsivePie } from '@nivo/pie';

import { Line, Circle } from 'rc-progress';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}
  

export default class OrderSummary extends PureComponent { 

  render() {

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



// const Waste_CollectionWidget: React.FunctionComponent<IWidgetProps> = () => {  

//     return ( 

//          <WidgetWrapper className="smart-city_box waste-bin-box">  

//             <TitleBar title="Waste Collection vehicle"></TitleBar> 

//             <div className="smart-city-content">  

//                 <div className='status-content'>
//                         <div className='status attention-status'>
//                             <h3>68</h3>
//                             <p>Attention</p>
//                         </div>
//                         <div className='status pending-status'>
//                             <h3>36</h3>
//                             <p>Pending</p>
//                         </div>
//                         <div className='status resolved-status'>
//                             <h3>79</h3>
//                             <p>Resloved</p>
//                         </div>
//                 </div>
  
//             </div>

//         </WidgetWrapper> 
//     )
// }; 



 
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