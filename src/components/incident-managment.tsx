    
import React, { useState, useEffect, useRef } from 'react';  
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import { IContextProvider } from '../uxp';  
import { AutoSizer } from 'react-virtualized';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId: string,
    locationkey: string  
} 

const IncidentManagement: React.FunctionComponent<IWidgetProps> = (props:any) => {
    let { uxpContext,locationkey } = props;  

    const [cameras, setcamerasData] = React.useState<any>([])  

    async function getIncidentData() {
        let data = await uxpContext.executeAction("IncidentDashboard2", "GetCamerasForLocation", { LocationKey: locationkey}, { json: true })
         setcamerasData(JSON.parse(data)) 
       // setcamerasData(data);  
        console.log('Hello', data); 
    }

    React.useEffect(() => {
        getIncidentData()
    }, [])  

    return (   

     <WidgetWrapper className="smart-city_box building_layout-box  incident-manage-box">
      <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
        <div className="smart-city-content">  
         
            <div className="parent8PAXAuto">    

                { cameras.length > 0 && cameras.map((c: any, k: any) => {  
                    return (   
                        <div className="child8PAXAuto">
                            <AutoSizer className='iframe-resize'>
                                {({ height, width }) => {     
                                    let url;  
                                    url = 'https://mda.lucyday.io/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist='+c?.CamID+'|'+c?.AssetID; 
                                      
                                  return <iframe id="liveIframe" src={url}  width={width} height={height}></iframe>  
                                }}
                            </AutoSizer>   
                        </div> 
                    )
                })}    
         
            </div>    
          </div> 
        </WidgetWrapper>  
    )
}; 

 export default IncidentManagement;




// import React, { useState, useEffect, useRef } from 'react';  
// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
// import { IContextProvider } from '../uxp';  
// import { AutoSizer } from 'react-virtualized';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// interface IWidgetProps {
//     uxpContext?: IContextProvider,
//     instanceId: string,
//     locationkey: string  
// } 

// const IncidentManagement: React.FunctionComponent<IWidgetProps> = (props:any) => {
//     let { uxpContext,locationkey } = props; 

//     const [cameras, setcamerasData] = React.useState<any>([])  

//     async function getIncidentData() {
//         let data = await uxpContext.executeAction("IncidentDashboard2", "GetCamerasForLocation", { LocationKey: locationkey}, { json: true })
//          setcamerasData(JSON.parse(data)) 
//        // setcamerasData(data);  
//         console.log('Hello', data); 
//     }

//     React.useEffect(() => {
//         getIncidentData()
//     }, [])  

//     return (   

//      <WidgetWrapper className="smart-city_box building_layout-box  incident-manage-box">
//       <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
//         <div className="smart-city-content">  
         
//             <div className="parent8PAXAuto">  
//                 { cameras.length > 0 && cameras.map((c: any, k: any) => {  
//                     return (   
//                         <div className="child8PAXAuto">
//                             <AutoSizer className='iframe-resize'>
//                                 {({ height, width }) => {    

//                                     let url;

//                                     // url = 'https://mda.lucyday.io/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist=' + encodeURIComponent(c?.CamID) + '%7C' + encodeURIComponent(c?.AssetID); 
//                                     // url = 'https://ccc-demo.raseel.city/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist='+c?.CamID+'|'+c?.AssetID;
//                                      url = 'https://mda.lucyday.io/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist='+c?.CamID+'|'+c?.AssetID;
//                                     // url = 'https://ccc-demo.raseel.city/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist=' + cameras[c].CamID + '|' + cameras[c].AssetID;
//                                     // url = 'https://ccc-demo.raseel.city/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist=Arecont%20Single%20Camera%20(10.11.1.24)%20-%20Camera%201%7CTunnel-03/CCTV-01'; 

//                                 return <iframe id="liveIframe" src={url}  width={width} height={height}></iframe> 
//                                 }}
//                             </AutoSizer>   

//                             {/* <div className="cctv_err_onplayer">
//                                 <div id="player_error_icon">
//                                 <FontAwesomeIcon icon={faExclamationTriangle} className="glyphicon glyphicon-warning-sign" aria-hidden="true" />
//                                 </div>
//                                 <div id="player_error_text">Connect Failure to Milestone</div>
//                             </div>  */}
//                         </div> 
//                     )
//                 })}   
         
//             </div>    
//           </div> 
//         </WidgetWrapper>  
//     )
// }; 

//  export default IncidentManagement;

  



// import React, { useState, useEffect } from 'react';  
// import { WidgetWrapper, TitleBar } from "uxp/components";
// import { IContextProvider } from '../uxp';  
// import { AutoSizer } from 'react-virtualized';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// interface IWidgetProps {
//     uxpContext?: IContextProvider,
//     instanceId: string,
//     locationkey: string  
// } 

// const IncidentManagement: React.FunctionComponent<IWidgetProps> = (props: any) => {
//     const { uxpContext, locationkey } = props; 

//     const [cameras, setCamerasData] = useState<any[]>([]);

//     useEffect(() => {
//         async function getIncidentData() {
//             try {
//                 const data = await uxpContext.executeAction("IncidentDashboard2", "GetCamerasForLocation", { LocationKey: locationkey }, { json: true });
//                 setCamerasData(JSON.parse(data));
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }

//         getIncidentData();
//     }, [locationkey, uxpContext]);

//     const handleIframeError = () => {
//         console.log('Iframe failed to load');
//         // Handle the error here (e.g., set a flag to display error message)
//     };

//     return (   
//         <WidgetWrapper className="smart-city_box building_layout-box  incident-manage-box">
//             <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
//             <div className="smart-city-content">  
//                 <div className="parent8PAXAuto"> 
//                     {cameras.map((c: any, k: any) => (
//                         <CameraFrame key={k} camera={c} onError={handleIframeError} />
//                     ))}
//                 </div>    
//             </div>
//         </WidgetWrapper>  
//     );
// }; 

// const CameraFrame: React.FC<{ camera: any; onError: () => void; }> = ({ camera, onError }) => {
//     const { CamID, AssetID } = camera;
//     const url = `https://ccc-demo.raseel.city/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist=${encodeURIComponent(CamID)}%7C${encodeURIComponent(AssetID)}`;

//     return (
//         <div className="child8PAXAuto">
//             <AutoSizer className='iframe-resize'>
//                 {({ height, width }) => (
//                     <div style={{width:'100%',height:'100%', display:"block", position:"relative" }}>
//                         <iframe
//                             src={url}
//                             width={width}
//                             height={height}
//                             onError={onError} // Call handleIframeError function on iframe error
//                         ></iframe>
//                         {/* Render error message only if iframe failed to load */}
//                         <div className="cctv_err_onplayer">
//                             <div id="player_error_icon">
//                                 <FontAwesomeIcon icon={faExclamationTriangle} className="glyphicon glyphicon-warning-sign" aria-hidden="true" />
//                             </div>
//                             <div id="player_error_text">Connect Failure to Milestone</div>
//                         </div>
//                     </div>
//                 )}
//             </AutoSizer>   
//         </div> 
//     );
// };

// export default IncidentManagement;







// import React from 'react';
// import { WidgetWrapper, TitleBar } from "uxp/components";

// interface IframeWidgetProps {
//     src: string;
//     title: string;
//     width: string;
//     height: string;
//     type?: string; 
//     allowTransparency?: string;
//     className?: string;
 
// }

// const IframeWidget: React.FC<IframeWidgetProps> = ({ src, title, width, height }) => {
//   return (
//     <iframe
//       src={src}
//       title={title}
//       width={width}
//       height={height}
//       allowFullScreen
//       style={{ border: 'none' }}
//       sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
//     />
//   );
// };

// const IncidentManagement: React.FunctionComponent<IframeWidgetProps> = (props) => { 

//   return (
//     <WidgetWrapper className="smart-city_box building_layout-box">
//       <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
//       <div className="smart-city-content">  
//         <IframeWidget title={'CCTV Screen'}   src={'https://www.iviva.com/'}  width={"100%"} height={"100%"}/>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default IncidentManagement;


 


// import React, { useEffect, useState } from 'react';
// import { WidgetWrapper, TitleBar } from "uxp/components";

// interface IncidentManagementProps {
//     title: string;
// }
// interface ContentResponse {
//     content: string;
//   }

// const IncidentManagement: React.FC<IncidentManagementProps> = ({ title }) => {
//     const [content, setContent] = useState<string>('');

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch('https://mos.raseel.city:8082/index.html');  
//           const data: ContentResponse = await response.json();
//           setContent(data.content);
//         } catch (error) {
//           console.error('Error fetching content:', error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     return (
//       <div>
//         <h1>Content from Express.js Server</h1>
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       </div>
//     );
//   };

// export default IncidentManagement;

