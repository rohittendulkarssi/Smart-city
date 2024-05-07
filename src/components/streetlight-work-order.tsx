  

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IWidgetProps {
  uxpContext: IContextProvider;  
  workOrderAsset:IWorkOrderAsset
} 

interface IWorkOrderAsset {
  // name: string;
  longitude?: number;
  latitude?: number;
  viewAngle?: number;
  altitude?: number;
}  

const StreetLightWorkOrder: React.FunctionComponent<IWidgetProps> = ({ workOrderAsset, ...props }) => {
 // const StreetLightWorkOrder: React.FunctionComponent<IWidgetProps> = (props) => { 
  

 let { uxpContext} = props;  

  let [selected, setSelected] = React.useState<string | null>("op-1");
  let [inputValue, setInputValue] = React.useState<string | null>("Work Order");
  let [inputValue1, setInputValue1] = React.useState<string | null>("Location");

 
  const [workOrders, setWorkOrders] = useState([]);

  // const apiUrl = 'https://ccc-demo.raseel.city/lucy/workorder/v1/cwos?fields=CWOKey,CWOID,RequesterObjectType,RequesterObjectKey,RequesterObjectID,LocationKey,SiteLocationFullName,CreatedDateTime,ProblemType,PriorityID,Description';
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(apiUrl, {
  //         headers: {
  //           Authorization: 'SC:mcr:52cc6fe4f2fdf340'
  //         }
  //       });
  //       const data = await response.json();
         
  //       setWorkOrders(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 



  
  function getWorkOrders() { 
    props.uxpContext
      .executeAction("DigitalTwin", "Get Work Orders", {}, { json: true })
      .then((res: any) => {
        console.log("Response From Get Work Orders API is", res, typeof res);
        setWorkOrders(res);
       // setLoading(false);  
      })
      .catch((e: any) => {
        console.error("Error fetching health data:", e);
       // setLoading(false);  
      });
  } 
  
  React.useEffect(() => {
    getWorkOrders();
  }, []); 

 

const streetLightData = [
    {
      id: '1',
      name: 'High',
      name1:'Attention',
      value: workOrders.filter(order => order.PriorityID === 'Urgent').length
    },
    {
      id: '2',
      name: 'Medium',
      name1:'Pending',
      value: workOrders.filter(order => order.PriorityID === 'Medium').length
    },
    {
      id: '3',
      name: 'Low',
      name1:'Resloved',
      value: workOrders.filter(order => order.PriorityID === 'Low').length
    }
  ];  
  
const [poleData, setPoleData] = useState(null);

React.useEffect(() => {
  workOrders.forEach(workOrder => {
    const regex = /Pole\s+(.*?)\s+has\s+a\s+total/;
    const match = workOrder.Description.match(regex);
  
    const word = match ? match[1] : null;
    console.log(word);
 
    if (word) {
      getPoleData(word);
    }
  });
}, [workOrders]); 


function getPoleData(poleName: any) { 
  props.uxpContext
    .executeAction("DigitalTwin", "GetAssetByPoleName", { poleName }, { json: true })
    .then((res: any) => {
    //  console.log("Response is Pole", res, typeof res);
      setPoleData(res);  
      console.log("my pole name", poleName);
      console.log("my pole lat", res.latitude);
      console.log("my pole lat", res.longitude);

    })
    .catch((e: any) => {
      console.error("Error fetching Pole data:", e); 
    });
}
 

  var lat = poleData?.latitude;
  var long = poleData?.longitude; 
    var viewAngle= 0; 
    var altitude = 75;


  console.log("To Check Lat and Long",lat, long )
  
  const handleResultClick = () => { 

    props.uxpContext.eventHandler?.(
      EventsEnum.DistrictJump, 
        {  
          longitude: long,
          latitude: lat,
          viewAngle : viewAngle,
          altitude:altitude
        }
      ); 
      
    console.log("Hi Hello",long, lat)
  }; 
 

   
  const problemTypeColors: { [key: string]: string } = {
    'Main Fail': 'rgb(106, 186, 53)',
    'AC Voltage': 'rgb(99, 245, 227)',
    'Power Factor': 'rgb(25, 157, 142)',
    'Load Fail': 'rgb(25, 190, 92)',
    'Lux Sensor Blocked': '#619482',
    'Partial Failure': 'rgb(179, 238, 142',
    'Lamp Flickering': 'rgb(99, 245, 227)'
  };
 
 
      return (  
         
         <WidgetWrapper className="smart-city_box order_summary-box"> 
  
          <TitleBar title="Street Light Work Order Priority" icon='https://static.iviva.com/images/Udhayimages/work-list.png'></TitleBar>
  

          <div className='smart-city_box waste-bin-box '>
            <div className="smart-city-content" style={{height:'80px'}}>  
          
                  <div className='status-content'> 

                         {streetLightData.map((item) => ( 
                          <div  key={item.id} className={`status ${item?.name1}`}>
                              <h3>{item?.value}</h3>
                              <p>{item?.name}</p>
                          </div> 
                      ))}  

                  </div>
              </div>
          </div>

          <TitleBar title="Street Light Work Order" icon='https://static.iviva.com/images/Udhayimages/work-order.png'></TitleBar>
          <div className="smart-city-content"  style={{height:'215px', borderBottom:'1px solid'}}>

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


                <div className='work_order-content'>

                    <table>
                        <thead>
                        <tr>
                            <th style={{width:'28%'}}>CWO ID</th>
                            <th style={{width:'15%'}}>Site Location</th>
                            <th style={{width:'30%'}}>Created Date</th>
                            <th style={{width:'20%'}}>Problem Type</th>
                            <th style={{width:'10%'}}></th>
                        </tr>
                        </thead>
                        <tbody> 
                        {workOrders.map((workOrder, index) => (
                            <tr key={index}>
                                <td style={{width:'28%'}}><a onClick={() => handleResultClick()}>{workOrder?.CWOID}</a></td>
                                <td style={{width:'15%'}}><a onClick={() => handleResultClick()}>{workOrder?.SiteLocationFullName}</a></td>
                                <td style={{width:'30%'}}><a onClick={() => handleResultClick()}>{workOrder?.CreatedDateTime}</a></td>
                                {/* <td style={{width:'20%'}}>{workOrder.ProblemType}</td> */}
                                <td style={{width:'20%', color: problemTypeColors[workOrder.ProblemType] || 'inherit'}}><a onClick={() => handleResultClick()}>{workOrder?.ProblemType}</a></td>
                                <td style={{width:'7%'}}><a className='cwo_key' target="_blank" href={`https://ccc-demo.raseel.city/Apps/ivivaFacility/wo-details?key=${workOrder?.CWOKey}`}></a></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                 </div> 
          </div> 

          </WidgetWrapper>  
  
      )
  };
 

export default StreetLightWorkOrder;























// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
// import { IContextProvider } from '../uxp';
// import { EventsEnum } from '../index';

// interface IWidgetProps {
//   uxpContext: IContextProvider;  
//   workOrderAsset:IWorkOrderAsset
// } 

// interface IWorkOrderAsset {
//   // name: string;
//   longitude?: number;
//   latitude?: number;
//   viewAngle?: number;
//   altitude?: number;
// }  

// const StreetLightWorkOrder: React.FunctionComponent<IWidgetProps> = ({ workOrderAsset, ...props }) => {
//  // const StreetLightWorkOrder: React.FunctionComponent<IWidgetProps> = (props) => { 
  

//  let { uxpContext} = props;  

//   let [selected, setSelected] = React.useState<string | null>("op-1");
//   let [inputValue, setInputValue] = React.useState<string | null>("Work Order");
//   let [inputValue1, setInputValue1] = React.useState<string | null>("Location");

 
//   const [workOrders, setWorkOrders] = useState([]);

//   const apiUrl = 'https://ccc-demo.raseel.city/lucy/workorder/v1/cwos?fields=CWOKey,CWOID,RequesterObjectType,RequesterObjectKey,RequesterObjectID,LocationKey,SiteLocationFullName,CreatedDateTime,ProblemType,PriorityID,Description';
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl, {
//           headers: {
//             Authorization: 'SC:mcr:52cc6fe4f2fdf340'
//           }
//         });
//         const data = await response.json();
         
//         setWorkOrders(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); 

 

// const streetLightData = [
//     {
//       id: '1',
//       name: 'High',
//       name1:'Attention',
//       value: workOrders.filter(order => order.PriorityID === 'Urgent').length
//     },
//     {
//       id: '2',
//       name: 'Medium',
//       name1:'Pending',
//       value: workOrders.filter(order => order.PriorityID === 'Medium').length
//     },
//     {
//       id: '3',
//       name: 'Low',
//       name1:'Resloved',
//       value: workOrders.filter(order => order.PriorityID === 'Low').length
//     }
//   ];  
  
// const [poleData, setPoleData] = useState(null);

// React.useEffect(() => {
//   workOrders.forEach(workOrder => {
//     const regex = /Pole\s+(.*?)\s+has\s+a\s+total/;
//     const match = workOrder.Description.match(regex);
  
//     const word = match ? match[1] : null;
//     console.log(word);
 
//     if (word) {
//       getPoleData(word);
//     }
//   });
// }, [workOrders]); 


// function getPoleData(poleName: any) { 
//   props.uxpContext
//     .executeAction("DigitalTwin", "GetAssetByPoleName", { poleName }, { json: true })
//     .then((res: any) => {
//     //  console.log("Response is Pole", res, typeof res);
//       setPoleData(res);  
//       console.log("my pole name", poleName);
//       console.log("my pole lat", res.latitude);
//       console.log("my pole lat", res.longitude);

//     })
//     .catch((e: any) => {
//       console.error("Error fetching Pole data:", e); 
//     });
// }
 

//   var lat = poleData?.latitude;
//   var long = poleData?.longitude; 
//     var viewAngle= 0; 
//     var altitude = 10;


//   console.log("To Check Lat and Long",lat, long )
  
//   const handleResultClick = () => { 

//     props.uxpContext.eventHandler?.(
//       EventsEnum.DistrictJump, 
//         {  
//           longitude: long,
//           latitude: lat,
//           viewAngle : viewAngle,
//           altitude:altitude
//         }
//       ); 
      
//     console.log("Hi Hello",long, lat)
//   }; 
 

   
//   const problemTypeColors: { [key: string]: string } = {
//     'Main Fail': 'rgb(106, 186, 53)',
//     'AC Voltage': 'rgb(99, 245, 227)',
//     'Power Factor': 'rgb(25, 157, 142)',
//     'Load Fail': 'rgb(25, 190, 92)',
//     'Lux Sensor Blocked': '#619482',
//     'Partial Failure': 'rgb(179, 238, 142',
//     'Lamp Flickering': 'rgb(99, 245, 227)'
//   };
 
 
//       return (  
         
//          <WidgetWrapper className="smart-city_box order_summary-box"> 
  
//           <TitleBar title="Street Light Work Order Priority" icon='https://static.iviva.com/images/Udhayimages/work-list.png'></TitleBar>
  

//           <div className='smart-city_box waste-bin-box '>
//             <div className="smart-city-content" style={{height:'80px'}}>  
          
//                   <div className='status-content'> 

//                          {streetLightData.map((item) => ( 
//                           <div  key={item.id} className={`status ${item?.name1}`}>
//                               <h3>{item?.value}</h3>
//                               <p>{item?.name}</p>
//                           </div> 
//                       ))}  

//                   </div>
//               </div>
//           </div>

//           <TitleBar title="Street Light Work Order" icon='https://static.iviva.com/images/Udhayimages/work-order.png'></TitleBar>
//           <div className="smart-city-content"  style={{height:'215px', borderBottom:'1px solid'}}>

//               <div className="chart-top">
                
//                   <FormField inline className="showcase-input" >

//                         <SearchBox
//                             value={inputValue}
//                             onChange={(newValue) => { setInputValue(newValue) }}
//                             position="left"
//                             placeholder=''
//                         />  
//                         <SearchBox
//                             value={inputValue1}
//                             onChange={(newValue) => { setInputValue1(newValue) }}
//                             position="left"
//                             placeholder=''
//                         />          
//                       <Select
//                           selected={selected}
//                           options={[
//                               { label: "All Alert", value: "op-1" },
//                               { label: "All Alert 1", value: "op-2" },
//                               { label: "All Alert 2", value: "op-3" },
//                           ]}
//                           onChange={(value) => { setSelected(value) }}
//                           placeholder=" -- select --"
//                       /> 
//                       <Select
//                           selected={selected}
//                           options={[
//                               { label: "Alert Type", value: "op-1" },
//                               { label: "Alert Type 1", value: "op-2" },
//                               { label: "Alert Type 2", value: "op-3" },
//                           ]}
//                           onChange={(value) => { setSelected(value) }}
//                           placeholder=" -- select --"
//                       />  
                        
//                   </FormField>
//             </div>


//                 <div className='work_order-content'>

//                     <table>
//                         <thead>
//                         <tr>
//                             <th style={{width:'28%'}}>CWOID</th>
//                             <th style={{width:'15%'}}>Site Location</th>
//                             <th style={{width:'30%'}}>Created Date</th>
//                             <th style={{width:'20%'}}>Problem Type</th>
//                             <th style={{width:'10%'}}></th>
//                         </tr>
//                         </thead>
//                         <tbody> 
//                         {workOrders.map((workOrder, index) => (
//                             <tr key={index}>
//                                 <td style={{width:'28%'}}><a onClick={() => handleResultClick()}>{workOrder?.CWOID}</a></td>
//                                 <td style={{width:'15%'}}><a onClick={() => handleResultClick()}>{workOrder?.SiteLocationFullName}</a></td>
//                                 <td style={{width:'30%'}}><a onClick={() => handleResultClick()}>{workOrder?.CreatedDateTime}</a></td>
//                                 {/* <td style={{width:'20%'}}>{workOrder.ProblemType}</td> */}
//                                 <td style={{width:'20%', color: problemTypeColors[workOrder.ProblemType] || 'inherit'}}><a onClick={() => handleResultClick()}>{workOrder?.ProblemType}</a></td>
//                                 <td style={{width:'7%'}}><a className='cwo_key' target="_blank" href={`https://ccc-demo.raseel.city/Apps/ivivaFacility/wo-details?key=${workOrder?.CWOKey}`}></a></td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>

//                  </div> 
//           </div> 

//           </WidgetWrapper>  
  
//       )
//   };
 

// export default StreetLightWorkOrder;




















// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
// import { IContextProvider } from '../uxp';
// import { EventsEnum } from '../index';

// interface IWidgetProps {
//   uxpContext: IContextProvider;  
//  workOrderAsset:IWorkOrderAsset
// } 

// interface IWorkOrderAsset {
//   // name: string;
//   longitude?: number;
//   latitude?: number;
// }  

// const StreetLightWorkOrder: React.FunctionComponent<IWidgetProps> = ({ workOrderAsset, ...props }) => {
//  // const StreetLightWorkOrder: React.FunctionComponent<IWidgetProps> = (props) => { 
  
//   let [selected, setSelected] = React.useState<string | null>("op-1");
//   let [inputValue, setInputValue] = React.useState<string | null>("Work Order");
//   let [inputValue1, setInputValue1] = React.useState<string | null>("Location");

 
//   const [workOrders, setWorkOrders] = useState([]);
//   const apiUrl = 'https://ccc-demo.raseel.city/lucy/workorder/v1/cwos?fields=CWOKey,CWOID,RequesterObjectType,RequesterObjectKey,RequesterObjectID,LocationKey,SiteLocationFullName,CreatedDateTime,ProblemType,PriorityID,Description';
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl, {
//           headers: {
//             Authorization: 'SC:mcr:52cc6fe4f2fdf340'
//           }
//         });
//         const data = await response.json();
//         // console.log("Priority ID is",data.map((order: { PriorityID: any; }) => order.PriorityID));
//         setWorkOrders(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); 

// const streetLightData = [
//     {
//       id: '1',
//       name: 'High',
//       name1:'Attention',
//       value: workOrders.filter(order => order.PriorityID === 'Urgent').length
//     },
//     {
//       id: '2',
//       name: 'Medium',
//       name1:'Pending',
//       value: workOrders.filter(order => order.PriorityID === 'Medium').length
//     },
//     {
//       id: '3',
//       name: 'Low',
//       name1:'Resloved',
//       value: workOrders.filter(order => order.PriorityID === 'Low').length
//     }
//   ];  


// //   const [poleData, setpoleData] = useState(null);  
   
// //   workOrders.forEach(workOrder => {
// //     const regex = /Pole\s+(.*?)\s+has\s+a\s+total/; 
// //     const match = workOrder.Description.match(regex);
  
// //     const word = match ? match[1] : null;
// //     console.log("Hey Fool",word);
// //   });
 

// // var pole = word;

// // // var poleName = 'ن92-1-10';
  

// // function getHealthData() { 
// //   props.uxpContext
// //     .executeAction("DigitalTwin", "GetAssetByPoleName", { poleName: poleName }, { json: true })
// //     .then((res: any) => {
// //       console.log("Response UDKKKKKKKKD is", res, typeof res);
// //       setpoleData(res);  
// //     })
// //     .catch((e: any) => {
// //       console.error("Error fetching health data:", e); 
// //     });
// // } 

// // React.useEffect(() => {
// //   getHealthData();
// // }, []);  
 
// const [poleData, setPoleData] = useState(null);

// React.useEffect(() => {
//   workOrders.forEach(workOrder => {
//     const regex = /Pole\s+(.*?)\s+has\s+a\s+total/;
//     const match = workOrder.Description.match(regex);
  
//     const word = match ? match[1] : null;
//     console.log("Hey Fool", word);

//     // Assign the value of 'word' to 'poleName' and call 'getHealthData'
//     if (word) {
//       getPoleData(word);
//     }
//   });
// }, [workOrders]); 

// function getPoleData(poleName: any) { 
//   props.uxpContext
//     .executeAction("DigitalTwin", "GetAssetByPoleName", { poleName }, { json: true })
//     .then((res: any) => {
//      console.log("Response is Pole", res, typeof res);
//       setPoleData(res);  
//     })
//     .catch((e: any) => {
//       console.error("Error fetching health data:", e); 
//     });
// }
 

//   var lat = poleData?.latitude;
//   var long = poleData?.longitude;
  
//   const handleResultClick = () => {
//     if (props.uxpContext.eventHandler) { 
      
//       props.uxpContext.eventHandler(EventsEnum.DistrictJump, { 
//         longitude: long,
//         latitude: lat
//       });
//     }
//     console.log("Hi Hello",longitude, latitude)
//   }; 
 

//   // Define a mapping of ProblemType values to colors
//   const problemTypeColors: { [key: string]: string } = {
//     'Main Fail': 'rgb(106, 186, 53)',
//     'AC Voltage': 'rgb(99, 245, 227)',
//     'Power Factor': 'rgb(25, 157, 142)',
//     'Load Fail': 'rgb(25, 190, 92)',
//     'Lux Sensor Blocked': '#619482',
//     'Partial Failure': 'rgb(179, 238, 142',
//     'Lamp Flickering': 'rgb(99, 245, 227)'
//   };
 
 
//       return (  
         
//          <WidgetWrapper className="smart-city_box order_summary-box"> 
  
//           <TitleBar title="Street Light Work Order Priority" icon='https://static.iviva.com/images/Udhayimages/work-list.png'></TitleBar>
  

//           <div className='smart-city_box waste-bin-box '>
//             <div className="smart-city-content" style={{height:'80px'}}>  
          
//                   <div className='status-content'> 

//                          {streetLightData.map((item) => ( 
//                           <div  key={item.id} className={`status ${item?.name1}`}>
//                               <h3>{item?.value}</h3>
//                               <p>{item?.name}</p>
//                           </div> 
//                       ))}  

//                   </div>
//               </div>
//           </div>

//           <TitleBar title="Street Light Work Order" icon='https://static.iviva.com/images/Udhayimages/work-order.png'></TitleBar>
//           <div className="smart-city-content"  style={{height:'215px', borderBottom:'1px solid'}}>

//               <div className="chart-top">
                
//                   <FormField inline className="showcase-input" >

//                         <SearchBox
//                             value={inputValue}
//                             onChange={(newValue) => { setInputValue(newValue) }}
//                             position="left"
//                             placeholder=''
//                         /> 


//                         <SearchBox
//                             value={inputValue1}
//                             onChange={(newValue) => { setInputValue1(newValue) }}
//                             position="left"
//                             placeholder=''
//                         /> 
                                    
//                       <Select
//                           selected={selected}
//                           options={[
//                               { label: "All Alert", value: "op-1" },
//                               { label: "All Alert 1", value: "op-2" },
//                               { label: "All Alert 2", value: "op-3" },
//                           ]}
//                           onChange={(value) => { setSelected(value) }}
//                           placeholder=" -- select --"
//                       />

//                       <Select
//                           selected={selected}
//                           options={[
//                               { label: "Alert Type", value: "op-1" },
//                               { label: "Alert Type 1", value: "op-2" },
//                               { label: "Alert Type 2", value: "op-3" },
//                           ]}
//                           onChange={(value) => { setSelected(value) }}
//                           placeholder=" -- select --"
//                       />  
                        
//                   </FormField>
//             </div>


//                 <div className='work_order-content'>

//                     <table>
//                         <thead>
//                         <tr>
//                             <th style={{width:'28%'}}>CWOID</th>
//                             <th style={{width:'15%'}}>Site Location</th>
//                             <th style={{width:'30%'}}>Created Date</th>
//                             <th style={{width:'20%'}}>Problem Type</th>
//                             <th style={{width:'10%'}}></th>
//                         </tr>
//                         </thead>
//                         <tbody> 
//                         {workOrders.map((workOrder, index) => (
//                             <tr key={index}>
//                                 <td style={{width:'28%'}}><a onClick={() => handleResultClick()}>{workOrder?.CWOID}</a></td>
//                                 <td style={{width:'15%'}}><a onClick={() => handleResultClick()}>{workOrder?.SiteLocationFullName}</a></td>
//                                 <td style={{width:'30%'}}><a onClick={() => handleResultClick()}>{workOrder?.CreatedDateTime}</a></td>
//                                 {/* <td style={{width:'20%'}}>{workOrder.ProblemType}</td> */}
//                                 <td style={{width:'20%', color: problemTypeColors[workOrder.ProblemType] || 'inherit'}}><a onClick={() => handleResultClick()}>{workOrder?.ProblemType}</a></td>
//                                 <td style={{width:'7%'}}><a className='cwo_key' target="_blank" href={`https://ccc-demo.raseel.city/Apps/ivivaFacility/wo-details?key=${workOrder?.CWOKey}`}></a></td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>

//                  </div> 
//           </div> 

//           </WidgetWrapper>  
  
//       )
//   };
 

// export default StreetLightWorkOrder;







 
// import React, { useState, useEffect } from 'react';
// import { DataList, WidgetWrapper, SearchBox, TitleBar, FormField, Select } from "uxp/components";

// const StreetLightWorkOrder: React.FunctionComponent<{}> = () => {
//   let [selected, setSelected] = React.useState<string | null>("op-1");
//   const [inputValue, setInputValue] = useState<string>('');
//   const [inputValue1, setInputValue1] = useState<string>(''); 

//   const [workOrders, setWorkOrders] = useState([]);

  
//   const apiUrl = 'https://ccc-demo.raseel.city/lucy/workorder/v1/cwos?fields=CWOKey,CWOID,RequesterObjectType,RequesterObjectKey,RequesterObjectID,LocationKey,SiteLocationFullName,CreatedDateTime,ProblemType,PriorityID';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl, {
//           headers: {
//             Authorization: 'SC:mcr:52cc6fe4f2fdf340'
//           }
//         });
//         const data = await response.json();
//         console.log("Priority ID is", data.map((order: { PriorityID: any; }) => order.PriorityID));
//         setWorkOrders(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const streetLightData = [
//     {
//       id: '1',
//       name: 'High',
//       name1: 'Attention',
//       value: workOrders.filter(order => order.PriorityID === 'Urgent').length
//     },
//     {
//       id: '2',
//       name: 'Medium',
//       name1: 'Pending',
//       value: workOrders.filter(order => order.PriorityID === 'Medium').length
//     },
//     {
//       id: '3',
//       name: 'Low',
//       name1: 'Resloved',
//       value: workOrders.filter(order => order.PriorityID === 'Low').length
//     }
//   ];

//   const problemTypeColors: { [key: string]: string } = {
//     'Main Fail': 'rgb(106, 186, 53)',
//     'AC Voltage': 'rgb(99, 245, 227)',
//     'Power Factor': 'rgb(25, 157, 142)',
//     'Load Fail': 'rgb(25, 190, 92)',
//     'Lux Sensor Blocked': '#619482',
//     'Partial Failure': 'rgb(179, 238, 142',
//     'Lamp Flickering': 'rgb(99, 245, 227)'
//   };

//   const filteredWorkOrdersByCwoId = workOrders.filter(order =>
//     order.CWOID.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   const filteredWorkOrders = workOrders.filter(order =>
//     order.SiteLocationFullName.toLowerCase().includes(inputValue1.toLowerCase())
//   );

//   return (
//     <WidgetWrapper className="smart-city_box order_summary-box">
//       <TitleBar title="Street Light Work Order Priority" icon='https://static.iviva.com/images/Udhayimages/work-list.png'></TitleBar>
//       <div className='smart-city_box waste-bin-box '>
//         <div className="smart-city-content" style={{ height: '80px' }}>
//           <div className='status-content'>
//             {streetLightData.map((item) => (
//               <div key={item.id} className={`status ${item.name1}`}>
//                 <h3>{item.value}</h3>
//                 <p>{item.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <TitleBar title="Street Light Work Order" icon='https://static.iviva.com/images/Udhayimages/work-order.png'></TitleBar>
//       <div className="smart-city-content" style={{ height: '215px', borderBottom: '1px solid' }}>
//         <div className="chart-top">
//           <FormField inline className="showcase-input">
//             {/* <SearchBox
//               value={inputValue}
//               onChange={(newValue) => { setInputValue(newValue) }}
//               position="left"
//               placeholder=''
//             /> */}

//             <SearchBox
//               value={inputValue}
//               onChange={(newValue) => { setInputValue(newValue) }}
//               position="left"
//               placeholder='Filter by CWOID'
//             />

//             <SearchBox
//               value={inputValue1}
//               onChange={(newValue) => { setInputValue1(newValue) }}
//               position="left"
//               placeholder=''
//             />
//             <Select
//               selected={selected}
//               options={[
//                 { label: "All Alert", value: "op-1" },
//                 { label: "All Alert 1", value: "op-2" },
//                 { label: "All Alert 2", value: "op-3" },
//               ]}
//               onChange={(value) => { setSelected(value) }}
//               placeholder=" -- select --"
//             />
//             <Select
//               selected={selected}
//               options={[
//                 { label: "Alert Type", value: "op-1" },
//                 { label: "Alert Type 1", value: "op-2" },
//                 { label: "Alert Type 2", value: "op-3" },
//               ]}
//               onChange={(value) => { setSelected(value) }}
//               placeholder=" -- select --"
//             />
//           </FormField>
//         </div>
//         <div className='work_order-content'>
//           <table>
//             <thead>
//               <tr>
//                 <th style={{ width: '30%' }}>CWOID</th>
//                 <th style={{ width: '20%' }}>Site Location</th>
//                 <th style={{ width: '30%' }}>Created Date</th>
//                 <th style={{ width: '20%' }}>Problem Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredWorkOrders.map((workOrder, index) => (
//                 <tr key={index}>
//                   <td style={{ width: '30%' }}><a target="_blank" href='https://ccc-demo.raseel.city/Apps/Auth/userlogin#!tabs.dashboardtabs=1'>{workOrder.CWOID}</a></td>
//                   <td style={{ width: '20%' }}>{workOrder.SiteLocationFullName}</td>
//                   <td style={{ width: '30%' }}>{workOrder.CreatedDateTime}</td>
//                   <td style={{ width: '20%', color: problemTypeColors[workOrder.ProblemType] || 'inherit' }}>{workOrder.ProblemType}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default StreetLightWorkOrder;





























// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  
// const StreetLightWorkOrder: React.FunctionComponent<{}> = () => {   

//   let [selected, setSelected] = React.useState<string | null>("op-1");
//   let [inputValue, setInputValue] = React.useState<string | null>("Work Order");
//   let [inputValue1, setInputValue1] = React.useState<string | null>("Location");

 
//   const [workOrders, setWorkOrders] = useState([]);
//   const apiUrl = 'https://ccc-demo.raseel.city/lucy/workorder/v1/cwos?fields=CWOKey,CWOID,RequesterObjectType,RequesterObjectKey,RequesterObjectID,LocationKey,SiteLocationFullName,CreatedDateTime,ProblemType,PriorityID';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl, {
//           headers: {
//             Authorization: 'SC:mcr:52cc6fe4f2fdf340'
//           }
//         });
//         const data = await response.json();
//         console.log("Priority ID is",data.map((order: { PriorityID: any; }) => order.PriorityID));
//         setWorkOrders(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
   
 

// const streetLightData = [
//     {
//       id: '1',
//       name: 'High',
//       name1:'Attention',
//       value: workOrders.filter(order => order.PriorityID === 'Urgent').length
//     },
//     {
//       id: '2',
//       name: 'Medium',
//       name1:'Pending',
//       value: workOrders.filter(order => order.PriorityID === 'Medium').length
//     },
//     {
//       id: '3',
//       name: 'Low',
//       name1:'Resloved',
//       value: workOrders.filter(order => order.PriorityID === 'Low').length
//     }
//   ];
  
  

//   // Define a mapping of ProblemType values to colors
//   const problemTypeColors: { [key: string]: string } = {
//   'Main Fail': 'rgb(106, 186, 53)',
//   'AC Voltage': 'rgb(99, 245, 227)',
//   'Power Factor': 'rgb(25, 157, 142)',
//   'Load Fail': 'rgb(25, 190, 92)',
//   'Lux Sensor Blocked': '#619482',
//   'Partial Failure': 'rgb(179, 238, 142',
//   'Lamp Flickering': 'rgb(99, 245, 227)'
// };

 
//       return ( 
  
         
//          <WidgetWrapper className="smart-city_box order_summary-box"> 
  
//           <TitleBar title="Street Light Work Order Priority" icon='https://static.iviva.com/images/Udhayimages/work-list.png'></TitleBar>
  

//           <div className='smart-city_box waste-bin-box '>
//             <div className="smart-city-content" style={{height:'80px'}}>  
          
//                   <div className='status-content'> 

//                          {streetLightData.map((item) => ( 
//                           <div  key={item.id} className={`status ${item.name1}`}>
//                               <h3>{item.value}</h3>
//                               <p>{item.name}</p>
//                           </div> 
//                       ))}  

//                   </div>
//               </div>
//           </div>

//           <TitleBar title="Street Light Work Order" icon='https://static.iviva.com/images/Udhayimages/work-order.png'></TitleBar>
//           <div className="smart-city-content"  style={{height:'215px', borderBottom:'1px solid'}}>

//               <div className="chart-top">
                
//                   <FormField inline className="showcase-input" >

//                         <SearchBox
//                             value={inputValue}
//                             onChange={(newValue) => { setInputValue(newValue) }}
//                             position="left"
//                             placeholder=''
//                         /> 


//                         <SearchBox
//                             value={inputValue1}
//                             onChange={(newValue) => { setInputValue1(newValue) }}
//                             position="left"
//                             placeholder=''
//                         /> 
                                    
//                       <Select
//                           selected={selected}
//                           options={[
//                               { label: "All Alert", value: "op-1" },
//                               { label: "All Alert 1", value: "op-2" },
//                               { label: "All Alert 2", value: "op-3" },
//                           ]}
//                           onChange={(value) => { setSelected(value) }}
//                           placeholder=" -- select --"
//                       />

//                       <Select
//                           selected={selected}
//                           options={[
//                               { label: "Alert Type", value: "op-1" },
//                               { label: "Alert Type 1", value: "op-2" },
//                               { label: "Alert Type 2", value: "op-3" },
//                           ]}
//                           onChange={(value) => { setSelected(value) }}
//                           placeholder=" -- select --"
//                       />  
                        
//                   </FormField>
//             </div>


//                 <div className='work_order-content'>

//                     <table>
//                         <thead>
//                         <tr>
//                             <th style={{width:'28%'}}>CWOID</th>
//                             <th style={{width:'15%'}}>Site Location</th>
//                             <th style={{width:'30%'}}>Created Date</th>
//                             <th style={{width:'20%'}}>Problem Type</th>
//                             <th style={{width:'10%'}}></th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {/* {workOrders.map((workOrder, index) => ( */}
//                         {workOrders.map((workOrder, index) => (
//                             <tr key={index}>
//                             <td style={{width:'28%'}}>{workOrder.CWOID}</td>
//                             <td style={{width:'15%'}}>{workOrder.SiteLocationFullName}</td>
//                             <td style={{width:'30%'}}>{workOrder.CreatedDateTime}</td>
//                             {/* <td style={{width:'20%'}}>{workOrder.ProblemType}</td> */}
//                             <td style={{width:'20%', color: problemTypeColors[workOrder.ProblemType] || 'inherit'}}>{workOrder.ProblemType}</td>
//                             <td style={{width:'7%'}}><a className='cwo_key' target="_blank" href={`https://ccc-demo.raseel.city/Apps/ivivaFacility/wo-details?key=${workOrder.CWOKey}`}></a></td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>

//                  </div> 
//           </div> 

//           </WidgetWrapper>  
  
//       )
//   };
 

// export default StreetLightWorkOrder;






























// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 


// const StreetLightWorkOrder: React.FunctionComponent<{}> = () => {   

//   let [selected, setSelected] = React.useState<string | null>("op-1");
//   let [inputValue, setInputValue] = React.useState<string | null>("Work Order");
//   let [inputValue1, setInputValue1] = React.useState<string | null>("Location");

 
//   const [workOrders, setWorkOrders] = useState([]);
//   const apiUrl = 'https://ccc-demo.raseel.city/lucy/workorder/v1/cwos?fields=CWOKey,CWOID,RequesterObjectType,RequesterObjectKey,RequesterObjectID,LocationKey,SiteLocationFullName,CreatedDateTime,ProblemType';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl, {
//           headers: {
//             Authorization: 'SC:mcr:52cc6fe4f2fdf340'
//           }
//         });
//         const data = await response.json();
//         setWorkOrders(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
   

//   const streetLightData  = [ 
//     {
//         id: '1',
//         name: 'Attention', 
//         value: 12 
//     },
//     {
//         id: '2',
//         name: 'Pending', 
//         value: 2 
//     },
//     {
//         id: '3',
//         name: 'Resloved', 
//         value: 12 
//     }
// ];  

  
 
  
//       return ( 
  
         
//          <WidgetWrapper className="smart-city_box order_summary-box"> 
  
//           <TitleBar title="Street Light Work Order" icon='https://static.iviva.com/images/Udhayimages/traffic-light.png'></TitleBar>
  

//           <div className='smart-city_box waste-bin-box '>
//             <div className="smart-city-content" style={{height:'80px'}}>  
          
//                   <div className='status-content'>

//                       {streetLightData.map((item) => ( 
//                           <div  key={item.id} className={`status ${item.name}`}>
//                               <h3>{item.value}</h3>
//                               <p>{item.name}</p>
//                           </div> 
//                       ))}

//                   </div>
//               </div>
//           </div>

          
//           <div className="smart-city-content"  style={{height:'215px', borderBottom:'1px solid'}}>

//               <div className="chart-top">
                
//                   <FormField inline className="showcase-input" >

//                         <SearchBox
//                             value={inputValue}
//                             onChange={(newValue) => { setInputValue(newValue) }}
//                             position="left"
//                             placeholder=''
//                         /> 


//                         <SearchBox
//                             value={inputValue1}
//                             onChange={(newValue) => { setInputValue1(newValue) }}
//                             position="left"
//                             placeholder=''
//                         /> 
                                    
//                       <Select
//                           selected={selected}
//                           options={[
//                               { label: "All Alert", value: "op-1" },
//                               { label: "All Alert 1", value: "op-2" },
//                               { label: "All Alert 2", value: "op-3" },
//                           ]}
//                           onChange={(value) => { setSelected(value) }}
//                           placeholder=" -- select --"
//                       />

//                       <Select
//                           selected={selected}
//                           options={[
//                               { label: "Alert Type", value: "op-1" },
//                               { label: "Alert Type 1", value: "op-2" },
//                               { label: "Alert Type 2", value: "op-3" },
//                           ]}
//                           onChange={(value) => { setSelected(value) }}
//                           placeholder=" -- select --"
//                       />  
                        
//                   </FormField>
//             </div>


//                 <div className='work_order-content'>

//                     <table>
//                         <thead>
//                         <tr>
//                             <th style={{width:'30%'}}>CWOID</th>
//                             <th style={{width:'20%'}}>Site Location</th>
//                             <th style={{width:'30%'}}>Created Date</th>
//                             <th style={{width:'20%'}}>Problem Type</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {workOrders.map((workOrder, index) => (
//                             <tr key={index}>
//                             <td style={{width:'30%'}}>{workOrder.CWOID}</td>
//                             <td style={{width:'20%'}}>{workOrder.SiteLocationFullName}</td>
//                             <td style={{width:'30%'}}>{workOrder.CreatedDateTime}</td>
//                             <td style={{width:'20%'}}>{workOrder.ProblemType}</td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>

//                  </div> 
//           </div> 

//           </WidgetWrapper>  
  
//       )
//   };
 

// export default StreetLightWorkOrder;



 