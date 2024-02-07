import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
const EmergencyWorkOrderSummary: React.FunctionComponent<{}> = () => {   

  let [selected, setSelected] = React.useState<string | null>("op-1");
  let [inputValue, setInputValue] = React.useState<string | null>("Work Order");
  let [inputValue1, setInputValue1] = React.useState<string | null>("Location");
 
  var order_Summarydata = [ 
      {
          "id": "1", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46", 
          'status': 'attention', 
          "alert_Type" : "Faulty" 
      },
      {
          "id": "2",
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "attention",
          "alert_Type" : "Faulty" 
      },
      {
          "id": "3",
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "attention",
          "alert_Type" : "Offline" 
      },
      {
          "id": "4", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "pending",
          "alert_Type" : "Offline" 
      } ,
      {
          "id": "5", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "pending",
          "alert_Type" : "Working" 
      },
      {
          "id": "6", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "resloved",
          "alert_Type" : "Working" 
      } ,
      {
          "id": "7", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "resloved",
          "alert_Type" : "resloved" 
      } ,
      {
          "id": "8", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "pending",
          "alert_Type" : "Offline" 
      } ,
      {
          "id": "9", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "pending",
          "alert_Type" : "Working" 
      } ,
      {
          "id": "10", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "resloved",
          "alert_Type" : "Working" 
      } ,
      {
          "id": "11", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "resloved",
          "alert_Type" : "resloved" 
      },
      {
          "id": "12",
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "attention",
          "alert_Type" : "Faulty" 
      },
      {
          "id": "13",
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "attention",
          "alert_Type" : "Offline" 
      },
      {
          "id": "14", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "pending",
          "alert_Type" : "Offline" 
      } ,
      {
          "id": "15", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "pending",
          "alert_Type" : "Working" 
      },
      {
          "id": "16", 
          "work_Order": 'Wo-123456789',
          "location": "Al Haram Dist", 
          "alert_Time":"2023-01-11 07:56:46",
          "status" : "resloved",
          "alert_Type" : "Working" 
      }
       
  ];
   

  const alertworkordertData  = [ 
    {
        id: '1',
        name: 'Attention', 
        value: 8 
    },
    {
        id: '2',
        name: 'Pending', 
        value: 5 
    },
    {
        id: '3',
        name: 'Resloved', 
        value: 21 
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
 
   const [toggleFilterValueday, setToggleFilterValueday] = React.useState<string>("1");  

        const handleFilterChangeday = (value:any) => { 
            setToggleFilterValueday(value);
        }; 
  
      return ( 
  
         
         <WidgetWrapper className="smart-city_box order_summary-box"> 
  
          <TitleBar title="Emergency Work Order" icon='https://static.iviva.com/images/Udhayimages/emergency.png'>

          <div className='top_tabs' style={{width:'100%'}}>
                <ToggleFilter  
                      options={[
                          { label: "2023", value: "1" },
                          { label: "1D", value: "2" } 
                      ]}
                      value={toggleFilterValueday}
                      onChange={handleFilterChangeday}
                  /> 
               </div>


          </TitleBar>
  
          
          <div className="smart-city-content"  style={{height:'800px'}}>

              <div className="chart-top">
                
                  <FormField inline className="showcase-input" >

                        <SearchBox
                            value={inputValue}
                            onChange={(newValue) => { setInputValue(newValue) }}
                            position="left"
                            placeholder=''
                        /> 


                        <SearchBox
                            value={inputValue1}
                            onChange={(newValue) => { setInputValue1(newValue) }}
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
                          placeholder=" -- select --"
                      />

                      <Select
                          selected={selected}
                          options={[
                              { label: "Alert Type", value: "op-1" },
                              { label: "Alert Type 1", value: "op-2" },
                              { label: "Alert Type 2", value: "op-3" },
                          ]}
                          onChange={(value) => { setSelected(value) }}
                          placeholder=" -- select --"
                      />  
                        
                  </FormField>
            </div>


              <DataTable
                  data={(max, last) => getDataItems(max, last)}
                  pageSize={17}
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
                          width: "25%",
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
                          title: " ",
                          width: "10%",
                          renderColumn: (item) => <ItemCard
                              item={item}
                              subTitleField=""
                              className={`data-table-item ${item.status}`}
                          /> 
                           
                      }
                  ]}
              /> 
          </div>

          <div className='smart-city_box waste-bin-box '>
            <div className="smart-city-content" style={{height:'100px'}}>  
          
                  <div className='status-content'>

                      {alertworkordertData.map((item) => ( 
                          <div  key={item.id} className={`status ${item.name}`}>
                              <h3>{item.value}</h3>
                              <p>{item.name}</p>
                          </div> 
                      ))}

                  </div>
              </div>
          </div>


          </WidgetWrapper>  
  
      )
  };
  

export default  EmergencyWorkOrderSummary;
