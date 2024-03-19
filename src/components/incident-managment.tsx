// import * as React from "react"; 

// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
// import { IContextProvider } from '../uxp';  
// import { AutoSizer } from 'react-virtualized';

// interface IWidgetProps {
//     uxpContext?: IContextProvider,
//     instanceId: string,
//     locationkey: string
// }

// const IncidentManagement: React.FunctionComponent<IWidgetProps> = (props) => {
//     let { uxpContext,locationkey } = props;

//     //console.log('locationkey1 cctv8',props.locationkey);

//     const [cameras, setcamerasData] = React.useState<any>([]) 


//     async function getData() {
//         let data = await uxpContext.executeAction("IncidentDashboard", "GetCamerasForLocation", { LocationKey: locationkey}, { json: true })
//         setcamerasData(data)
//         //console.log('locationkey3 cctv8',locationkey);
//         //console.log('cctv8 data '+ data);
//     }

//     React.useEffect(() => {
//         getData()
//     }, [])
 

//     return (
//         <WidgetWrapper>
//             <div className="header8PAXAuto uxp-drag-handler">
//                 <div className="title8PAXAuto">
//                     {/* <div className="icon8PAXAuto"></div> */}
//                     <div className="text8PAXAuto">CCTV Automated Streaming</div>
//                 </div>
//             </div>
//             <br /><br /><br /><br />
//             <div className="parent8PAXAuto">
//                 {Object.keys(cameras).map((c: string, k: number) => {
//                     //console.log('locationkey3 cctv8',cameras[c].CamID);
//                     return (
//                         <div className="child8PAXAuto">
//                             <AutoSizer >
//                                 {({ height, width }) => {
                                   
//                                    let url=''
//                                    if (cameras[c].CamID.trim().length>0){

//                                         //url='http://mcr.iviva.cloud/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist='+cameras[c].CamID+'|'+cameras[c].AssetID
//                                         url=uxpContext.lucyUrl + 'Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist='+cameras[c].CamID+'|'+cameras[c].AssetID
//                                    }
                                  
//                                    return <iframe id="liveIframe" src={url} width={width} height={height}></iframe>
//                                 }}
//                             </AutoSizer>                          
//                         </div>)
//                 })}
//             </div>
             
//         </WidgetWrapper>
//     )
// };
 

//  export default IncidentManagement;

 













// import React, { useState, useEffect } from 'react';
// import { WidgetWrapper, TitleBar } from "uxp/components";

// const IncidentManagement: React.FC = () => {
 

//   return (
//     <WidgetWrapper className="smart-city_box building_layout-box">
//       <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>
//       <div className="smart-city-content">
       
//           <iframe
//             src="http://ccc-demo.raseel.city/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist=Arecont%20Single%20Camera%20(10.11.1.24)%20-%20Camera%201%7CTunnel-03/"
//             title="Example Website"
//             width="100%"
//             height="100%"
//             style={{ border: 'none' }}
//             allowFullScreen
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           />
        
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default IncidentManagement;



// export default async function handler(req: { query: { url: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) {
//   const url = `https://${mos.raseel.city:8082/index.html}`;
//   const response = await fetch(url);
//   const urlContents = await response.text();

//   // Prepend the base to make sure all relative and absolute paths work
//   const urlContentsWithHead = `<base href='${url}' /></head>${urlContents}`;

//   res.status(200).send(urlContentsWithHead);
// }

 
import React, { useEffect } from 'react';
import { WidgetWrapper, TitleBar } from "uxp/components";
 
interface IframeWidgetProps {
  src: string;
  title: string;
  width: string;
  height: string; 
}

const IframeWidget: React.FC<IframeWidgetProps> = ({ src, title, width, height  }) => {
  
  const handleLoad = () => {
    const iframe = document.getElementById('iframe-widget') as HTMLIFrameElement;
    if (iframe && iframe.contentDocument) {
      const body = iframe.contentDocument.body;
      console.log("ANu", body);
      if (body) {
        body.style.display = 'block';
      }
    }
  };

  return (
    <iframe
      id="iframe-widget"
      src={src}
      title={title}
      width={width}
      height={height}  
      allowFullScreen
      style={{ border: 'none' }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="no-referrer"
      onLoad={handleLoad}
    />
  );
};

const IncidentManagement: React.FunctionComponent<IframeWidgetProps> = () => {   
  return (
    <WidgetWrapper className="smart-city_box building_layout-box">
      <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
      <div className="smart-city-content">  
        <IframeWidget  
          src='http://mos.raseel.city:8082/index.html'
          title="CCTV Widget"
          width="100%"
          height="100%"   
        />
      </div>
    </WidgetWrapper>
  );
};

export default IncidentManagement;




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

//     frameBorder?: any;
//     onLoad?: any;
//     scrolling?: any;
//     styles?: any; 
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
//   const iframeProps = {
//     'data-type': props.type,
//     allowTransparency: props.allowTransparency,
//     className: props.className,
//     frameBorder: props.frameBorder,
//     height: props.height,
//     key: props.src,
//     onLoad: props.onLoad,
//     scrolling: props.scrolling,
//     src: props.src,
//     style: props.styles,
//     width: props.width
//   };

//   return (
//     <WidgetWrapper className="smart-city_box building_layout-box">
//       <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
//       <div className="smart-city-content">  
//         <IframeWidget title={''} {...iframeProps}  src={'https://mos.raseel.city:8082/index.html'}  width={"100%"} height={"100%"}/>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default IncidentManagement;





// import React from 'react';
// import { WidgetWrapper, TitleBar } from "uxp/components";

// interface IframeWidgetProps {
//   src?: string; // URL source
//   srcDoc?: string; // Static content
//   title: string;
//   width: string;
//   height: string;
// }

// const IframeWidget: React.FC<IframeWidgetProps> = ({ src, srcDoc, title, width, height }) => {
//   return (
//     <iframe
//       src={src}
//       srcDoc={srcDoc}
//       title={title}
//       width={width}
//       height={height} 
//       allowFullScreen
//     />
//   );
// };

// const IncidentManagement: React.FunctionComponent = () => {   
//   // Define your static content
//   const staticContent = `
//     <html>
//       <head>
//         <title>Static Content</title>
//       </head>
//       <body>
//         <h1>This is static content inside the iframe</h1>
//       </body>
//     </html>
//   `;

//   return (
//     <WidgetWrapper className="smart-city_box building_layout-box">
//       <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
//       <div className="smart-city-content">  
//         {/* Use either src or srcDoc based on your requirement */}
//         <IframeWidget
//           srcDoc={staticContent} // Pass the static content to srcDoc
//           title="Static Content"
//           width="100%"
//           height="100%"
//         />
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default IncidentManagement;

