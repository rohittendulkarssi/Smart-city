 
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
// import { IContextProvider } from '../uxp';
 

// interface IBuildingSummary {
//    uxpContext: IContextProvider; 
//    page: string;
//    selectedAsset: ISelectedAsset;
// // districtName: string 
// }

// interface ISelectedAsset {
//   objectType: any;
//   id: string;
//   lat?: number;
//   long?: number;
// }
 
//   const BuildingSummary: React.FunctionComponent<IBuildingSummary> = (props,{page,selectedAsset}) => {  
 
//     const [building_Summary, setBuilding_Summary] = useState(null);
//     const [isbuilding_SummaryLoading, setIsBuilding_SummaryLoading] = useState(false);
   
//     console.log("Here Selected Asset", selectedAsset);

//     useEffect(() => {
//       fetchData();
//     },[selectedAsset]);  
  
//     async function fetchData() {
//       setIsBuilding_SummaryLoading(true);
//       try { 

      
//   const lat = selectedAsset?.long;
//   const long = selectedAsset?.lat;


//         console.log("We are making API Call", lat, long);

//         const headers = {
//           Authorization: 'APIKEY SC:mda:307d91db4fe4f10b',
//           Cookie: '.AspNetCore.Session=Mzc3MWU0NTktNzkxNC02YWMxLTYyZTUtZTdjYjE2MWQwNDZk',
//         }; 
//         const { data } = await axios.get( 

//           `https://mda.lucyday.io/Lucy/DigitalTwin/getBuildingInfo?lat=${lat}&long=${long}`,
          
//           { headers}
//         );    
//        console.log("Response from the API is", data);


//         //setBuilding_Summary(data);
//         setBuilding_Summary(data['Building Details']);
//         setIsBuilding_SummaryLoading(false);
//       } catch (error) {
//         console.error('Error fetching data from API:', error.message);
//         setIsBuilding_SummaryLoading(false);
//       }
//     } 
  
//     console.log(building_Summary);


      
 
// var building_nav_data = [ 
//     {
//         "id": "1", 
//         "Building_icon": 'https://static.iviva.com/images/Udhayimages/incident-icon.png',
//         "Building_Title": "Report Incident",  
//         "btn_url": "http://150.230.244.155/Apps/UXP/dashboards/IM20220324028"
//     },
//     {
//         "id": "1", 
//         "Building_icon": 'https://static.iviva.com/images/Udhayimages/facility-management.png',
//         "Building_Title": "Facility Issue",  
//         "btn_url": ""
//     }, 
//     {
//         "id": "1", 
//         "Building_icon": 'https://static.iviva.com/images/Udhayimages/agenda.png',
//         "Building_Title": "Leasing Info",  
//          "btn_url": ""
//     }
// ]; 
   
//   var building_nearbydata = [ 
//     {
//         "id": "1", 
//         "Hospital_Nearby": 'Al Zahra Hospital and 3 others',
//         "Pharmacy_Nearby": "Al Nahdi Pharmacy and 2 others", 
//         "Police_Station_Nearby":"Madina District Police and 2 others", 
//         'Mosques_Nearby': "Al Masjid An Nabawi and 4 others", 
//         "Restaurants_Nearby" : "Zaitoon Restaurants and 6 others" 
//     } 
// ]; 
  
//       return (  
        
//          <WidgetWrapper className="smart-city_box building_summary-box">  

//           <TitleBar title="Building Summary" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/layout.png'></TitleBar>   
          
//           <div className="smart-city-content"  style={{height:'350px'}}>

//                 <div className='building-details'>
//                    <div className='building-top'> 

//                             <div className="building-pict"
//                               style={{
//                                 backgroundImage: `url(${building_Summary?.header?.buildingImage || 'https://static.iviva.com/images/Udhayimages/al-masid-building.png'})`,
                              
//                               }} />   
                              

//                         <div className='building-header'>
//                             <div className='building-title'>{building_Summary?.header?.buildingName || "" }</div>
//                             <div className='building-nav'>
//                             <ul>
//                             {building_nav_data.map((item) => (
                              
//                                 <li key={item.id}>
//                                     <a target="_blank" href={item.btn_url}>
//                                       <div className='building-nav-icon'><img src={item.Building_icon}/></div>
//                                       <div className='building-nav-title'>{item.Building_Title}</div>
//                                     </a> 
//                                 </li> 
                              
//                             ))} 
//                       </ul>

//                             </div>
//                         </div>
//                    </div>
//                     <div className='building-info-box'> 
//                     {/* {isbuilding_SummaryLoading ? (
//                             <>Loading please wait</>
//                         ) : (
//                             <ul>
//                             <li className='building-code'><label>Building Code : </label><span> {building_Summary?.body?.buildingCode || 'N/A'}</span></li>
//                             <li className='building-name'><label>Building Name : </label><span> {building_Summary?.body?.buildingName || 'N/A'}</span></li>
//                             <li className='street-number'><label>Street Number : </label><span> {building_Summary?.body?.streetNumber || 'N/A'}</span></li>
//                             <li className='street-name'><label>Street Name : </label><span>{building_Summary?.body?.streetName || 'N/A'}</span></li>
//                             <li className='city'><label>City : </label><span>{building_Summary?.body?.city || 'N/A'}</span></li>
//                             </ul>  
//                         )} */}
 
//                             <ul>
//                                 <li className='building-code'><label>Building Code : </label><span> {building_Summary?.body?.buildingCode || 'N/A'}</span></li>
//                                 <li className='building-name'><label>Building Name : </label><span> {building_Summary?.body?.buildingName || 'N/A'}</span></li>
//                                 <li className='street-number'><label>Street Number : </label><span> {building_Summary?.body?.streetNumber || 'N/A'}</span></li>
//                                 <li className='street-name'><label>Street Name : </label><span>{building_Summary?.body?.streetName || 'N/A'}</span></li>
//                                 <li className='city'><label>City : </label><span>{building_Summary?.body?.city || 'N/A'}</span></li>
//                             </ul>  
                        
                            
//                     </div>

//                     <div className='building-nearby-box' style={{display:"none"}}>
                         
//                          {building_nearbydata.map((item) => (
//                              <ul>
//                                  <li key={item.id} className='hospital'><label>Hospital Nearby : </label><span>{item.Hospital_Nearby}</span></li>
//                                  <li className='pharmacy'><label>Pharmacy Nearby : </label><span>{item.Pharmacy_Nearby}</span></li>
//                                  <li className='police-station'><label>Police Station Nearby : </label><span>{item.Police_Station_Nearby}</span></li>
//                                  <li className='mosques'><label>Mosques Nearby : </label><span>{item.Mosques_Nearby}</span></li>
//                                  <li className='restaurants'><label>Restaurants Nearby : </label><span>{item.Restaurants_Nearby}</span></li>
//                              </ul>
//                          ))} 

//                  </div>

//                  <div className='building-bot'> 
//                          <div className='g_map-link' ><a href={building_Summary?.url} target="_blank">More : Gmap Link</a></div>
                         
//                  </div>

//                 </div>
 
//           </div>  

//           </WidgetWrapper>    
//       )
//   };
  

// export default BuildingSummary;


 




import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import { IContextProvider } from '../uxp';
 

interface IBuildingSummary {
   uxpContext: IContextProvider; 
   page: string;
   selectedAsset: ISelectedAsset;
// districtName: string 
}

interface ISelectedAsset {
 objectType: any;
  id: string;
  lat?: number;
  long?: number; 
}
 
  // const BuildingSummary: React.FunctionComponent<IBuildingSummary> = (props,{page,selectedAsset}) => {  
 
  const BuildingSummary: React.FunctionComponent<IBuildingSummary> = ({page,selectedAsset, ...props}) => { 

  const [building_Summary, setBuilding_Summary] = useState(null);   

           const lat = selectedAsset?.long;
           const long = selectedAsset?.lat;

        // const long = 39.611305236816406;
        // const  lat = 24.465124130249023; 
         

        console.log('Details are',{selectedAsset,lat,long});

  function getBuildingSummaryData () {

    console.log("getBulingInfo")
 
      props.uxpContext.executeAction("DigitalTwin","GetBuildingInfo",{lat:lat, long:long},{json:true}).then((res: any[])=>{  
        console.log("Response From API is", res, typeof res);
        setBuilding_Summary(res[0]);
      }).catch((e: any)=>{
          // console.log("hi", e);
      }); 
  }
  
  React.useEffect(() =>{
    getBuildingSummaryData();
  }, []) 
   
 
 
var building_nav_data = [ 
    {
        "id": "1", 
        "Building_icon": 'https://static.iviva.com/images/Udhayimages/incident-icon.png',
        "Building_Title": "Report Incident",  
        "btn_url": "http://150.230.244.155/Apps/UXP/dashboards/IM20220324028"
    },
    {
        "id": "1", 
        "Building_icon": 'https://static.iviva.com/images/Udhayimages/facility-management.png',
        "Building_Title": "Facility Issue",  
        "btn_url": ""
    }, 
    {
        "id": "1", 
        "Building_icon": 'https://static.iviva.com/images/Udhayimages/agenda.png',
        "Building_Title": "Leasing Info",  
         "btn_url": ""
    }
]; 
   
  var building_nearbydata = [ 
    {
        "id": "1", 
        "Hospital_Nearby": 'Al Zahra Hospital and 3 others',
        "Pharmacy_Nearby": "Al Nahdi Pharmacy and 2 others", 
        "Police_Station_Nearby":"Madina District Police and 2 others", 
        'Mosques_Nearby': "Al Masjid An Nabawi and 4 others", 
        "Restaurants_Nearby" : "Zaitoon Restaurants and 6 others" 
    } 
]; 
  
      return (  
        
         <WidgetWrapper className="smart-city_box building_summary-box">  

          <TitleBar title="Building Summary" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/layout.png'></TitleBar>   
          
          <div className="smart-city-content"  style={{height:'350px'}}>

                <div className='building-details'>
                   <div className='building-top'> 

                            <div className="building-pict"
                              style={{
                                backgroundImage: `url(${building_Summary?.header?.buildingImage || 'https://static.iviva.com/images/Udhayimages/al-masid-building.png'})`,
                              
                              }} />   
                              

                        <div className='building-header'>
                            <div className='building-title'>{building_Summary?.header?.buildingName || "" }</div>
                            <div className='building-nav'>
                            <ul>
                            {building_nav_data.map((item) => (
                              
                                <li key={item.id}>
                                    <a target="_blank" href={item.btn_url}>
                                      <div className='building-nav-icon'><img src={item.Building_icon}/></div>
                                      <div className='building-nav-title'>{item.Building_Title}</div>
                                    </a> 
                                </li> 
                              
                            ))} 
                      </ul>

                            </div>
                        </div>
                   </div>
                    <div className='building-info-box'> 
                      
                             <ul>
                                <li className='building-code'><label>Building Code : </label><span> {building_Summary?.body?.buildingCode || 'N/A'}</span></li>
                                <li className='building-name'><label>Building Name : </label><span> {building_Summary?.body?.buildingName || 'N/A'}</span></li>
                                <li className='street-number'><label>Street Number : </label><span> {building_Summary?.body?.streetNumber || 'N/A'}</span></li>
                                <li className='street-name'><label>Street Name : </label><span>{building_Summary?.body?.streetName || 'N/A'}</span></li>
                                <li className='city'><label>City : </label><span>{building_Summary?.body?.city || 'N/A'}</span></li>
                            </ul>  
                        
                            
                    </div>

                    <div className='building-nearby-box' style={{display:"none"}}>
                         
                         {building_nearbydata.map((item) => (
                             <ul>
                                 <li key={item.id} className='hospital'><label>Hospital Nearby : </label><span>{item.Hospital_Nearby}</span></li>
                                 <li className='pharmacy'><label>Pharmacy Nearby : </label><span>{item.Pharmacy_Nearby}</span></li>
                                 <li className='police-station'><label>Police Station Nearby : </label><span>{item.Police_Station_Nearby}</span></li>
                                 <li className='mosques'><label>Mosques Nearby : </label><span>{item.Mosques_Nearby}</span></li>
                                 <li className='restaurants'><label>Restaurants Nearby : </label><span>{item.Restaurants_Nearby}</span></li>
                             </ul>
                         ))} 

                 </div>

                 <div className='building-bot'> 
                         <div className='g_map-link' ><a href={building_Summary?.url} target="_blank">More : Gmap Link</a></div>
                         
                 </div>

                </div>
 
          </div>  

          </WidgetWrapper>    
      )
  };
  

export default BuildingSummary;


 

