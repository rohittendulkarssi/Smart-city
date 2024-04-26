import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Label,
  Tooltip,
} from "recharts";

import { WidgetWrapper, TitleBar } from "uxp/components";
import { IContextProvider } from "../uxp";
import { ResponsivePie } from "@nivo/pie";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HCMore from "highcharts/highcharts-more";
HCMore(Highcharts);

interface IWidgetProps {
  instanceId?: string;
  uxpContext?: IContextProvider;

  ilmAlerts?: {
    "AC Voltage"?: string;
    "Load Fail"?: string;
    "Lux Sensor Blocked"?: string;
    "Main Fail"?: string;
    "Partial Failure"?: string;
    "Power Factor"?: string;
  };
}

const VehicleSummaryWidget: React.FunctionComponent<IWidgetProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [health, setHealth] = useState({
    ilmAlerts: {
      "AC Voltage": 0,
      "Load Fail": 0,
      "Lux Sensor Blocked": 0,
      "Main Fail": 0,
      "Partial Failure": 0,
      "Power Factor": 0,
      "Lamp Flickering": 0,
    },
  });

  const [activeIndex, setActiveIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);

  const hierarchy = "منطقة المدينة";

  function getHealthData() {
    props.uxpContext
      .executeAction(
        "TataStreetLightAPI",
        "Alert Summary",
        { hierarchy: hierarchy },
        { json: true }
      )
      .then((res: any) => {
        console.log("Response From API is", res, typeof res);
        setHealth(res);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error("Error fetching health data:", e);
        setLoading(false);
      });
  }

  useEffect(() => {
    getHealthData();
  }, []);

  const pieChartData = [
    {
      type: "AC Voltage",
      name: "AC Voltage",
      y: Number(health?.ilmAlerts?.["AC Voltage"]) || 45,
    },
    {
      type: "Load Fail",
      name: "Load Fail",
      y: Number(health?.ilmAlerts?.["Load Fail"]) || 58,
    },
    {
      type: "Lux Sensor Blocked",
      name: "Lux Sensor Blocked",
      y: Number(health?.ilmAlerts?.["Lux Sensor Blocked"]) || 42,
    },
    {
      type: "Main Fail",
      name: "Main Fail",
      y: Number(health?.ilmAlerts?.["Main Fail"]) || 54,
    },
    {
      type: "Partial Failure",
      name: "Partial Failure",
      y: Number(health?.ilmAlerts?.["Partial Failure"]) || 57,
    },
    {
      type: "Power Factor",
      name: "Power Factor",
      y: Number(health?.ilmAlerts?.["Power Factor"]) || 36,
    },
    {
      type: "Lamp Flickering",
      name: "Lamp Flickering",
      y: Number(health?.ilmAlerts?.["Lamp Flickering"]) || 87,
    },
  ];

  const chartTheme = {
    background: "transparent",
    text: {
      fontSize: 13,
      fill: "#f61e1e",
      outlineWidth: 0,
      // outlineColor: "#015b02",
    },
    legends: {
      title: {
        text: {
          fontSize: 10,
          fill: "#fff",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      text: {
        fontSize: 12,
        fill: "#333333",
        outlineWidth: 10,
        outlineColor: "transparent",
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    tooltip: {
      container: {
        background: "#ffffff",
        fontSize: 12,
      },
    },
  };

  const COLORS = [
    "rgb(99 245 227)",
    "rgb(25 190 92)",
    "",
    "rgb(106 186 53)",
    "rgb(179 238 142)",
    "rgb(25 157 142)",
  ];

  // const totalValue = pieChartData.reduce((acc, entry) => acc + entry.value, 0);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
    setIsHovering(false);
  };

  const renderCustomActiveShape = (props: {
    cx: any;
    cy: any;
    innerRadius: any;
    outerRadius: any;
    startAngle: any;
    endAngle: any;
    fill: any;
  }) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props;

    return (
      <g>
        <path
          d={`
            M${cx},${cy - outerRadius}
            A${outerRadius},${outerRadius},0,1,1,${cx - 0.01},${
            cy - outerRadius
          }
            L${cx - 0.01},${cy - innerRadius}
            A${innerRadius},${innerRadius},0,1,0,${cx},${cy - innerRadius}
            Z
          `}
          fill={fill} // Change the fill color for the active shape
          stroke="red" // Add a stroke to the active shape for highlighting
          strokeWidth={2} // Adjust the stroke width as needed
        />
      </g>
    );
  };

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      height: 380,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: "transparent",
      // marginTop: 80,
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#b7b7b7",
      style: {
        color: "white",
      },
      formatter: function () {
        const point = this.point as Highcharts.Point;
        const color = point.color || "black";
        return `<span style="color: ${color}; font-weight: bold;">${
          point.name
        }:</span> <b>${point.percentage!.toFixed(1)}%</b>`;
      },
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            fontWeight: "lighter", // Set label font weight to light
            color: "white",
          },
        },
        showInLegend: true,
        cursor: "pointer",
        center: ["50%", "59%"],
        size: "70%",
      },
    },
    series: [
      {
        type: "pie",
        data: pieChartData,
        colors: COLORS,
      },
    ],
  };

  return (
    <WidgetWrapper className="smart-city_box vehicle_summary-box">
      <TitleBar
        title="Streetlight health summary"
        icon="https://static.iviva.com/images/Udhayimages/health-data.png"
      />

      <div className="smart-city-content">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="technician_chart" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </WidgetWrapper>
  );
};

export default VehicleSummaryWidget;

// import React, { useState, useEffect } from 'react';
// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   Label,
// } from 'recharts';

// import { WidgetWrapper, TitleBar } from 'uxp/components';
// import { IContextProvider } from '../uxp';

// interface IWidgetProps {
//   instanceId?: string;
//   uxpContext?: IContextProvider;

//   ilmAlerts?: {
//     "AC Voltage"?: string;
//     "Load Fail"?: string;
//     "Lux Sensor Blocked"?: string;
//     "Main Fail"?: string;
//     "Partial Failure"?: string;
//     "Power Factor"?: string;
//   };
// }

// const VehicleSummaryWidget: React.FunctionComponent<IWidgetProps> = (props) => {
//   const [loading, setLoading] = useState(true);
//   const [health, setHealth] = useState({
//     ilmAlerts: {
//       "AC Voltage": 0,
//       "Load Fail": 0,
//       "Lux Sensor Blocked": 0,
//       "Main Fail": 0,
//       "Partial Failure": 0,
//       "Power Factor": 0,
//       "Lamp Flickering": 0
//     }
//   });

//   const hierarchy = 'منطقة المدينة';

//   function getHealthData() {
//     props.uxpContext
//       .executeAction("TataStreetLightAPI", "Alert Summary", { hierarchy: hierarchy }, { json: true })
//       .then((res: any) => {
//         console.log("Response From API is", res, typeof res);
//         setHealth(res);
//         setLoading(false);
//       })
//       .catch((e: any) => {
//         console.error("Error fetching health data:", e);
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     getHealthData();
//   }, []);

//   const pieChartData = [
//     { name: 'AC Voltage', value: Number(health?.ilmAlerts?.["AC Voltage"]) || 45 },
//     { name: 'Load Fail', value: Number(health?.ilmAlerts?.["Load Fail"]) || 58 },
//     { name: 'Lux Sensor Blocked', value: Number(health?.ilmAlerts?.["Lux Sensor Blocked"]) || 42 },
//     { name: 'Main Fail', value: Number(health?.ilmAlerts?.["Main Fail"]) || 54 },
//     { name: 'Partial Failure', value: Number(health?.ilmAlerts?.["Partial Failure"]) || 57 },
//     { name: 'Power Factor', value: Number(health?.ilmAlerts?.["Power Factor"]) || 36 },
//     { name: 'Lamp Flickering', value: Number(health?.ilmAlerts?.["Lamp Flickering"]) || 87 }
//   ];

//   const COLORS = ["rgb(99 245 227)", "rgb(25 190 92)", "", "rgb(106 186 53)", "rgb(179 238 142)", "rgb(25 157 142)"];

//   const totalValue = pieChartData.reduce((acc, entry) => acc + entry.value, 0);

//   const renderCustomActiveShape = (props: { cx: any; cy: any; innerRadius: any; outerRadius: any; startAngle: any; endAngle: any; fill: any; }) => {
//     const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

//     return (
//       <g>
//         <path
//           d={`
//             M${cx},${cy - outerRadius}
//             A${outerRadius},${outerRadius},0,1,1,${cx - 0.01},${cy - outerRadius}
//             L${cx - 0.01},${cy - innerRadius}
//             A${innerRadius},${innerRadius},0,1,0,${cx},${cy - innerRadius}
//             Z
//           `}
//           fill={fill} // Change the fill color for the active shape
//           stroke="red" // Add a stroke to the active shape for highlighting
//           strokeWidth={2} // Adjust the stroke width as needed
//         />
//       </g>
//     );
//   };

//   return (
//     <WidgetWrapper className="smart-city_box vehicle_summary-box">
//       <TitleBar title="Streetlight health summary" icon="https://static.iviva.com/images/Udhayimages/health-data.png" />

//       <div className="smart-city-content">
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <div className="technician_chart" style={{ height: 300 }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={pieChartData}
//                   dataKey="value"
//                   nameKey="name"
//                   innerRadius={50} // Adjust innerRadius to create a donut chart effect
//                   outerRadius={100}
//                   fill="#8884d8"
//                   label
//                  activeShape={renderCustomActiveShape}
//                 >
//                   {pieChartData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                   <Label value={totalValue} position="center" />
//                 </Pie>
//                 <Legend />

//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         )}
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default VehicleSummaryWidget;

// import React, { useState, useEffect } from 'react';
// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from 'recharts';

// import { WidgetWrapper, TitleBar } from 'uxp/components';
// import { IContextProvider } from '../uxp';

// interface IWidgetProps {
//   instanceId?: string,
//   uxpContext?: IContextProvider,

//   ilmAlerts?: {
//     "AC Voltage"?: string;
//     "Load Fail"?: string;
//     "Lux Sensor Blocked"?: string;
//     "Main Fail"?: string;
//     "Partial Failure"?: string;
//     "Power Factor"?: string;
//   };
// }

// const VehicleSummaryWidget: React.FunctionComponent<IWidgetProps> = (props) => {

//   const [loading, setLoading] = useState(true);
//   const [health, setHealth] = useState({
//     ilmAlerts: {
//       "AC Voltage": 0,
//       "Load Fail": 0,
//       "Lux Sensor Blocked": 0,
//       "Main Fail": 0,
//       "Partial Failure": 0,
//       "Power Factor": 0,
//       "Lamp Flickering": 0
//     }
//   });

//   const hierarchy = 'منطقة المدينة';

//   function getHealthData() {
//     props.uxpContext
//       .executeAction("TataStreetLightAPI", "Alert Summary", { hierarchy: hierarchy }, { json: true })
//       .then((res: any) => {
//         console.log("Response From API is", res, typeof res);
//         setHealth(res);
//         setLoading(false);
//       })
//       .catch((e: any) => {
//         console.error("Error fetching health data:", e);
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     getHealthData();
//   }, []);

//   const pieChartData = [
//     { name: 'AC Voltage', value: Number(health?.ilmAlerts?.["AC Voltage"]) || 45 },
//     { name: 'Load Fail', value: Number(health?.ilmAlerts?.["Load Fail"]) || 58 },
//     { name: 'Lux Sensor Blocked', value: Number(health?.ilmAlerts?.["Lux Sensor Blocked"]) || 42 },
//     { name: 'Main Fail', value: Number(health?.ilmAlerts?.["Main Fail"]) || 54 },
//     { name: 'Partial Failure', value: Number(health?.ilmAlerts?.["Partial Failure"]) || 57 },
//     { name: 'Power Factor', value: Number(health?.ilmAlerts?.["Power Factor"]) || 36 },
//     { name: 'Lamp Flickering', value: Number(health?.ilmAlerts?.["Lamp Flickering"]) || 87 }
//   ];

//   // const COLORS = ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845', '#1B4F72', '#154360'];

//   const COLORS = ["rgb(99 245 227)", "rgb(25 190 92)", "", "rgb(106 186 53)", "rgb(179 238 142)", "rgb(25 157 142)"]

//   return (
//     <WidgetWrapper className="smart-city_box vehicle_summary-box">
//       <TitleBar title="Streetlight health summary" icon="https://static.iviva.com/images/Udhayimages/health-data.png" />

//       <div className="smart-city-content">
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <div className="technician_chart" style={{ height: 300 }}>
//            <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={pieChartData}
//                   dataKey="value"
//                   nameKey="name"
//                   innerRadius={50}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   label
//                 >
//                   {pieChartData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Legend/>
//               </PieChart>
//             </ResponsiveContainer>

//           </div>
//         )}
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default VehicleSummaryWidget;

// import React, { useState, useEffect } from 'react';
// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from 'recharts';

// import { WidgetWrapper, TitleBar } from 'uxp/components';
// import { IContextProvider } from '../uxp';

// interface IWidgetProps {
//   instanceId?: string,
//   uxpContext?: IContextProvider,

//   ilmAlerts?: {
//     "AC Voltage"?: string;
//     "Load Fail"?: string;
//     "Lux Sensor Blocked"?: string;
//     "Main Fail"?: string;
//     "Partial Failure"?: string;
//     "Power Factor"?: string;
//   };
// }

// const VehicleSummaryWidget: React.FunctionComponent<IWidgetProps> = (props) => {

//   const [loading, setLoading] = useState(true);
//   const [health, setHealth] = useState({
//     ilmAlerts: {
//       "AC Voltage": 0,
//       "Load Fail": 0,
//       "Lux Sensor Blocked": 0,
//       "Main Fail": 0,
//       "Partial Failure": 0,
//       "Power Factor": 0,
//       "Lamp Flickering": 0
//     }
//   });

//   const hierarchy = 'منطقة المدينة';

//   function getHealthData() {
//     props.uxpContext
//       .executeAction("TataStreetLightAPI", "Alert Summary", { hierarchy: hierarchy }, { json: true })
//       .then((res: any) => {
//         console.log("Response From API is", res, typeof res);
//         setHealth(res);
//         setLoading(false);
//       })
//       .catch((e: any) => {
//         console.error("Error fetching health data:", e);
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     getHealthData();
//   }, []);

//   const pieChartData = [
//     { name: 'AC Voltage', value: Number(health?.ilmAlerts?.["AC Voltage"]) || 45 },
//     { name: 'Load Fail', value: Number(health?.ilmAlerts?.["Load Fail"]) || 58 },
//     { name: 'Lux Sensor Blocked', value: Number(health?.ilmAlerts?.["Lux Sensor Blocked"]) || 42 },
//     { name: 'Main Fail', value: Number(health?.ilmAlerts?.["Main Fail"]) || 54 },
//     { name: 'Partial Failure', value: Number(health?.ilmAlerts?.["Partial Failure"]) || 57 },
//     { name: 'Power Factor', value: Number(health?.ilmAlerts?.["Power Factor"]) || 36 },
//     { name: 'Lamp Flickering', value: Number(health?.ilmAlerts?.["Lamp Flickering"]) || 87 }
//   ];

//   const COLORS = ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845', '#1B4F72', '#154360'];

//   return (
//     <WidgetWrapper className="smart-city_box vehicle_summary-box">
//       <TitleBar title="Streetlight health summary" icon="https://static.iviva.com/images/Udhayimages/health-data.png" />

//       <div className="smart-city-content">
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <div className="technician_chart" style={{ height: 300 }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={pieChartData}
//                   dataKey="value"
//                   nameKey="name"
//                   innerRadius={50}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   label
//                 >
//                   {pieChartData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Legend/>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         )}
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default VehicleSummaryWidget;

// import React, { useState, useEffect } from 'react';
// import {
//   ResponsiveContainer,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Radar,
//   Tooltip,
//   LabelList,
//   PieChart,
//   Pie
// } from 'recharts';

// import { WidgetWrapper, TitleBar } from 'uxp/components';
// import { IContextProvider } from '../uxp';

// interface IWidgetProps {
//   instanceId?: string,
//   uxpContext?: IContextProvider,

//   ilmAlerts?: {
//     "AC Voltage"?: string;
//     "Load Fail"?: string;
//     "Lux Sensor Blocked"?: string;
//     "Main Fail"?: string;
//     "Partial Failure"?: string;
//     "Power Factor"?: string;
//   };
// }

// const VehicleSummaryWidget: React.FunctionComponent<IWidgetProps> = (props) => {

//   const [loading, setLoading] = useState(true);
//   const [health, setHealth] = useState({
//     ilmAlerts: {
//       "AC Voltage": 0,
//       "Load Fail": 0,
//       "Lux Sensor Blocked": 0,
//       "Main Fail": 0,
//       "Partial Failure": 0,
//       "Power Factor": 0,
//       "Lamp Flickering": 0
//     }
//   });

//   const hierarchy = 'منطقة المدينة';

//   function getHealthData() {
//     props.uxpContext
//       .executeAction("TataStreetLightAPI", "Alert Summary", { hierarchy: hierarchy }, { json: true })
//       .then((res: any) => {
//         console.log("Response From API is", res, typeof res);
//         setHealth(res);
//         setLoading(false);
//       })
//       .catch((e: any) => {
//         console.error("Error fetching health data:", e);
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     getHealthData();
//   }, []);

//   const radarChartData = [
//     { vehicle: 'AC Voltage', value: Number(health?.ilmAlerts?.["AC Voltage"]) || 45 },
//     { vehicle: 'Load Fail', value: Number(health?.ilmAlerts?.["Load Fail"]) || 58 },
//     { vehicle: 'Lux Sensor Blocked', value: Number(health?.ilmAlerts?.["Lux Sensor Blocked"]) || 42 },
//     { vehicle: 'Main Fail', value: Number(health?.ilmAlerts?.["Main Fail"]) || 54 },
//     { vehicle: 'Partial Failure', value: Number(health?.ilmAlerts?.["Partial Failure"]) || 57 },
//     { vehicle: 'Power Factor', value: Number(health?.ilmAlerts?.["Power Factor"]) || 36 },
//     { vehicle: 'Lamp Flickering', value: Number(health?.ilmAlerts?.["Lamp Flickering"]) || 87 }
//   ];

//   return (
//     <WidgetWrapper className="smart-city_box vehicle_summary-box">
//       <TitleBar title="Streetlight health summary" icon="https://static.iviva.com/images/Udhayimages/health-data.png" />

//       <div className="smart-city-content">
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <div className="technician_chart" style={{ height: 300 }}>
//             <ResponsiveContainer width="100%" height="100%">
//                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
//                   <PolarGrid />
//                   <PolarAngleAxis dataKey="vehicle" />
//                   <PolarRadiusAxis />
//                   <Radar name="Value" dataKey="value" stroke="#005936" fill="#00a68a" fillOpacity={0.6}>
//                     <LabelList dataKey="value" position="top" />
//                   </Radar>
//                   <Tooltip />
//                 </RadarChart>

//               </ResponsiveContainer>
//           </div>
//         )}
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default VehicleSummaryWidget;

// import React, { useState, useEffect } from 'react';
// import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
// import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

// import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

// import axios from 'axios';

// interface HealthData {
//   ilmAlerts?: {
//     "AC Voltage"?: string;
//     "Load Fail"?: string;
//     "Lux Sensor Blocked"?: string;
//     "Main Fail"?: string;
//     "Partial Failure"?: string;
//     "Power Factor"?: string;
//   };
// }

// const VehicleSummaryWidget: React.FunctionComponent<{}> = () => {

//   const [health, setHealth] = useState<HealthData>({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const hierarchy = 'منطقة المدينة,المدينة,الطرق الرئيسية,السيح';
//       const headers = {
//         Authorization: 'APIKEY SC:mda:307d91db4fe4f10b',
//       };
//       const { data } = await axios.get(
//         `https://mda.lucyday.io/Lucy/TataStreetLightAPI/getAlertSummary?hierarchy=${hierarchy}`,
//         { headers }
//       );
//       setHealth(data);
//     } catch (error) {
//       console.error('Error fetching data from API:', error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//     var vehicledata = [

//         {
//           vehicle: 'Load fail',
//           value: 120,
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Main Fail',
//           value: 98,
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Voltage trip alert',
//           value: 86,
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Lux Sensor Blocked',
//           value: 99,
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Excessive power drawn alert',
//           value: 85,
//           fullValue: 150,
//         },
//         {
//           vehicle: 'Overload Alert',
//           value: 65,
//           fullValue: 150,
//         },
//     ]

//   const vehicleData =  isLoading ? (
//       <p>Loading, please wait...</p>
//     ) : (
//       <div>
//         <p>{`AC Voltage: ${health?.ilmAlerts?.["AC Voltage"]}`}</p>
//         <p>{`Load Fail: ${health?.ilmAlerts?.["Load Fail"]}`}</p>
//         <p>{`Lux Sensor Blocked: ${health?.ilmAlerts?.["Lux Sensor Blocked"]}`}</p>
//         <p>{`Main Fail: ${health?.ilmAlerts?.["Main Fail"]}`}</p>
//         <p>{`Partial Failure: ${health?.ilmAlerts?.["Partial Failure"]}`}</p>
//         <p>{`Power Factor: ${health?.ilmAlerts?.["Power Factor"]}`}</p>
//       </div>
//     ); [];

//       const MyResponsiveRadar = ({}) => (

//             <ResponsiveContainer width="100%" height="100%">
//                 <RadarChart cx="50%" cy="50%" outerRadius="80%" data={vehicledata}>
//                 <PolarGrid />
//                 <PolarAngleAxis dataKey="vehicle" />
//                  <PolarRadiusAxis />
//                 <Radar name="Value" dataKey="value" stroke="#005936" fill="#00a68a" fillOpacity={0.6}>
//                     <LabelList dataKey="value" position="top" />
//                 </Radar>
//                 <Tooltip />
//                 {/* <Legend   /> */}
//                 </RadarChart>
//             </ResponsiveContainer>
//         )

//         return (

//             <WidgetWrapper className="smart-city_box vehicle_summary-box">
//                 <TitleBar title="Streetlight health summary" icon='https://static.iviva.com/images/Car_widget/Car.svg'></TitleBar>

//                 <div className="smart-city-content">
//                     <div className="technician_chart" style={{ height: 300 }}>
//                         <MyResponsiveRadar/>
//                     </div>

//                   <div>
//                     <p>{`AC Voltage: ${health?.ilmAlerts?.["AC Voltage"]}`}</p>
//                     <p>{`Load Fail: ${health?.ilmAlerts?.["Load Fail"]}`}</p>
//                     <p>{`Lux Sensor Blocked: ${health?.ilmAlerts?.["Lux Sensor Blocked"]}`}</p>
//                     <p>{`Main Fail: ${health?.ilmAlerts?.["Main Fail"]}`}</p>
//                     <p>{`Partial Failure: ${health?.ilmAlerts?.["Partial Failure"]}`}</p>
//                     <p>{`Power Factor: ${health?.ilmAlerts?.["Power Factor"]}`}</p>
//                   </div>

//                 </div>

//             </WidgetWrapper>

//         )
//     };

// export default VehicleSummaryWidget;
