import React, { useState, useEffect } from "react";
import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { IContextProvider } from "../uxp";

interface EnergyConsumptionData {
  "Power Consumption"?: {
    [key: string]: { [key: string]: number }[];
  };
  "Burning Hours"?: {
    [key: string]: { [key: string]: number }[];
  };
}

interface IWidgetProps {
  instanceId?: string;
  uxpContext?: IContextProvider;
}

const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => {
  const [energyConsumptionData, setEnergyConsumptionData] =
    React.useState<EnergyConsumptionData>({});
  const [toggleFilterValue, setToggleFilterValue] = useState<
    "day" | "week" | "month"
  >("day");
  const [filter, setFilter] = useState<"Day" | "Week" | "Month">("Day");

  const currentDate = new Date();
  currentDate.setDate(0);

  const startDate = currentDate.toISOString();
  const endDate = new Date().toISOString();
  const hierarchy = "منطقة المدينة";
  const start = startDate;
  const end = endDate;

  const handleFilterChange = (value: "day" | "week" | "month") => {
    console.log("Selected Filter Value:", value);
    setToggleFilterValue(value);
    if (value === "day") {
      setFilter("Day");
    } else if (value === "week") {
      setFilter("Week");
    } else if (value === "month") {
      setFilter("Month");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [hierarchy, start, end, filter]);

  const fetchData = async () => {
    let newStart = start;
    let newEnd = end;

    if (filter === "Month") {
      newStart = new Date("2024-02-03T00:00:00").toISOString();
      newEnd = new Date().toISOString();
    }

    try {
      const res = await props.uxpContext.executeAction(
        "TataStreetLightAPI",
        "GetSyncDataNew",
        { hierarchy, start: newStart, end: newEnd, filter },
        { json: true }
      );
      //console.log("Response From API is", res, typeof res);
      setEnergyConsumptionData(res);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  const transformData = (
    rawData: EnergyConsumptionData,
    filterType: "day" | "week" | "month"
  ) => {
    let filteredData: {
      name: string;
      powerConsumption: number;
      burningHours: number;
    }[] = [];

    const powerConsumptionData:
      | any[]
      | { [key: string]: { [key: string]: number }[] } =
      rawData["Power Consumption"] || [];
    const burningHoursData:
      | any[]
      | { [key: string]: { [key: string]: number }[] } =
      rawData["Burning Hours"] || [];

    if (filterType === "day") {
      const daysInWeekFull: string[] = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const daysInWeekAbbr: string[] = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ];

      filteredData = daysInWeekAbbr.map((abbr, index) => {
        const fullDayName = daysInWeekFull[index];

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + index - 1);
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString("default", { month: "short" });
        // const year = currentDate.getFullYear();
        const year = currentDate.toLocaleString("default", { year: "2-digit" });
        const dateString = `${day}/${month}/${year}`;

        const powerEntry = (powerConsumptionData as any[]).find(
          (entry: { day: string }) => entry.day === fullDayName
        );
        const burningEntry = (burningHoursData as any[]).find(
          (entry: { day: string }) => entry.day === fullDayName
        );

        const fullDateString = currentDate.toLocaleDateString(); // Full date string for tooltip

        return {
          name: abbr,
          // name: dateString,
          fullDate: fullDateString,
          powerConsumption: powerEntry ? powerEntry.value : 0,
          burningHours: burningEntry ? burningEntry.value : 0,
        };
      });
    } else if (filterType === "week") {
      const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];

      filteredData = WeekNamesFull.map((weekName) => {
        const powerEntry = (powerConsumptionData as any[]).find(
          (entry: { week: string }) => entry.week === weekName
        );
        const burningEntry = (burningHoursData as any[]).find(
          (entry: { week: string }) => entry.week === weekName
        );
        const powerValue = powerEntry ? powerEntry.value : 0;
        const burningValue = burningEntry ? burningEntry.value : 0;

        return {
          name: weekName,
          powerConsumption: powerValue,
          burningHours: burningValue,
        };
      });
    } else if (filterType === "month") {
      const startDate = new Date("2024-02-01T00:00:00").toISOString();
      const monthNamesFull: string[] = [
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthNamesabbr: string[] = [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      filteredData = monthNamesabbr.map((abbr, index) => {
        const fullMonthName = monthNamesFull[index];

        const powerEntry = (powerConsumptionData as any[]).find(
          (entry: { month: string }) => entry.month === fullMonthName
        );
        const burningEntry = (burningHoursData as any[]).find(
          (entry: { month: string }) => entry.month === fullMonthName
        );
        const powerValue = powerEntry ? powerEntry.value : 0;
        const burningValue = burningEntry ? burningEntry.value : 0;

        return {
          name: abbr,
          powerConsumption: powerValue,
          burningHours: burningValue,
        };
      });
    }
    return filteredData;
  };

  const transformedData1 = transformData(energyConsumptionData, "month");
  const transformedData2 = transformData(energyConsumptionData, "week"); // Corrected from 'Week' to 'week'
  const transformedData3 = transformData(energyConsumptionData, "day");

  const filterToDataMap: { [key: string]: any[] } = {
    month: transformedData1,
    week: transformedData2,
    day: transformedData3,
  };

  const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;

  const transformedChartData = selectedData.map((item) => ({
    ...item,
    powerConsumption: item.powerConsumption / 1000,
    burningHours: item.burningHours / 1000,
  }));

  return (
    <WidgetWrapper className="smart-city_box energy_consumption-box">
      <TitleBar
        icon="https://static.iviva.com/images/Udhayimages/energy.png"
        title="Streetlight Energy Consumption"
      >
        {" "}
      </TitleBar>
      <div className="smart-city-content">
        <div className="technician_chart">
          <div className="chart-top">
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

          <div className="chart-top" style={{ marginTop: "0.5em" }}>
            <div className="sub_title_bar">Total MWh</div>
            <div className="sub_title_bar hrs">Hours</div>
          </div>

          <ResponsiveContainer>
            <AreaChart
              data={transformedChartData}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 30,
              }}
            >
              <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />

              <XAxis dataKey="name" />
              <YAxis
                yAxisId="left"
                tickCount={4}
                // tickFormatter={(value) => `${value * 1000}`}
                allowDecimals={true}
                interval="preserveEnd"
              />
              {/* <YAxis yAxisId="left" ticks={[0, 20, 40, 60, 80]} />   */}
              {/* <YAxis  ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]} yAxisId="right" orientation="right" tickFormatter={(value) => `${(value)}K`}/>  */}
              {/* <YAxis  yAxisId="right" orientation="right" tickFormatter={(value) => `${(value)}K`}/>  */}
              <YAxis
                yAxisId="right"
                orientation="right"
                tickFormatter={(value) => `${value}`}
                tickCount={7}
                allowDecimals={true}
                interval="preserveStartEnd"
              />

              <Tooltip
                formatter={(value: any, name: any, props: any) => {
                  if (name === "Burning Hours") {
                    return [`${value} hours`, name];
                  } else {
                    return [`${value} MWh`, name];
                  }
                }}
                labelFormatter={(label: string) => {
                  if (toggleFilterValue === "day") {
                    const dayIndexMap: { [key: string]: number } = {
                      Sun: 0,
                      Mon: 1,
                      Tue: 2,
                      Wed: 3,
                      Thu: 4,
                      Fri: 5,
                      Sat: 6,
                    };
                    const dayIndex = dayIndexMap[label];
                    const currentDate = new Date();
                    const currentDay = currentDate.getDay();
                    const startDate = new Date(currentDate);
                    startDate.setDate(startDate.getDate() - currentDay);
                    const targetDate = new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      currentDate.getDate() - currentDate.getDay() + dayIndex
                    );
                    const day = targetDate.getDate();
                    const month = targetDate.getMonth() + 1;
                    const year = targetDate.getFullYear();
                    const formattedDate = `${day}/${month}/${year}`;
                    return `Date: ${formattedDate}`;
                  } else {
                    return `Date: ${label}`;
                  }
                }}
              />

              <Legend />
              <Area
                type="monotone"
                dataKey="powerConsumption"
                name="Power Consumption (MWh)"
                stackId="1"
                stroke="#001912"
                fill="url(#gradient1)"
                yAxisId="left"
              />
              <Area
                type="monotone"
                dataKey="burningHours"
                name="Burning Hours"
                stackId="1"
                stroke="#79dccc"
                fill="url(#gradient2)"
                yAxisId="right"
              />
              <Area
                type="monotone"
                dataKey="hours"
                stackId="0"
                fill="url(#gradient3)"
                yAxisId="right"
                style={{ display: "none" }}
                legendType="none"
              />
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#01a4ef" stopOpacity={0.8} />
                  <stop offset="90%" stopColor="#013335" stopOpacity={0.9} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#00947b" stopOpacity={0.8} />
                  <stop offset="90%" stopColor="#053122" stopOpacity={0.9} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default EnergyConsumption;

// import React, { useState, useEffect } from 'react';
// import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
// import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { IContextProvider } from '../uxp';

// interface EnergyConsumptionData {
//   "Power Consumption"?: {
//     [key: string]: { [key: string]: number }[]
//   };
//   "Burning Hours"?: {
//     [key: string]: { [key: string]: number }[]
//   };
// }

// interface IWidgetProps {
//   instanceId?: string;
//   uxpContext?: IContextProvider;
// }

// const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => {
//     const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({});
//     const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");
//     const [filter, setFilter] = useState<'Day' | 'Week' | 'Month'>('Day');

//     const currentDate = new Date();
//     currentDate.setDate(0);

//     const startDate = currentDate.toISOString();
//     const endDate = new Date().toISOString();
//     const hierarchy = 'منطقة المدينة';
//     const start = startDate;
//     const end = endDate;

//     const handleFilterChange = (value: "day" | "week" | "month") => {
//       console.log("Selected Filter Value:", value);
//       setToggleFilterValue(value);
//       if (value === 'day') {
//         setFilter('Day');
//       } else if (value === 'week') {
//         setFilter('Week');
//       } else if (value === 'month') {
//         setFilter('Month');
//       }
//     };

//     const fetchData = async () => {
//       let newStart = start;
//       let newEnd = end;

//       if (filter === 'Month') {
//           newStart = new Date('2024-02-03T00:00:00').toISOString();
//           newEnd = new Date().toISOString();
//       }

//       try {
//           const res = await props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start: newStart, end: newEnd, filter }, { json: true });
//           //console.log("Response From API is", res, typeof res);
//           setEnergyConsumptionData(res);
//       } catch (e) {
//           console.error("Error fetching data:", e);
//       }
//   };

//     React.useEffect(() => {
//       fetchData();
//     }, [hierarchy, start, end, filter]);

//  const transformData = (rawData: EnergyConsumptionData, filterType: "day" | "week" | "month") => {
//     let filteredData: { name: string; powerConsumption: number; burningHours: number }[] = [];

//     const powerConsumptionData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Power Consumption"] || [];
//     const burningHoursData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Burning Hours"] || [];

//   if (filterType === "day") {
//     const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     filteredData = daysInWeekAbbr.map((abbr, index) => {
//         const fullDayName = daysInWeekFull[index];

//         const currentDate = new Date();
//         currentDate.setDate(currentDate.getDate() + index - 1);
//         const day = currentDate.getDate();
//         const month = currentDate.toLocaleString('default', { month: 'short' });
//         // const year = currentDate.getFullYear();
//         const year = currentDate.toLocaleString('default', { year: '2-digit' });
//         const dateString = `${day}/${month}/${year}`;

//         const powerEntry = (powerConsumptionData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//         const burningEntry = (burningHoursData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);

//         const fullDateString = currentDate.toLocaleDateString(); // Full date string for tooltip

//         return {
//              name: abbr,
//             // name: dateString,
//             fullDate: fullDateString,
//             powerConsumption: powerEntry ? powerEntry.value : 0,
//             burningHours: burningEntry ? burningEntry.value : 0,
//         };
//     });

//     }

//     else if (filterType === "week") {
//         const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];

//         filteredData = WeekNamesFull.map(weekName => {
//             const powerEntry = (powerConsumptionData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//             const powerValue = powerEntry ? powerEntry.value : 0;
//             const burningValue = burningEntry ? burningEntry.value : 0;

//             return {
//                 name: weekName,
//                 powerConsumption: powerValue,
//                 burningHours: burningValue,
//             };
//         });
//     }

//     else if (filterType === "month") {

//         const startDate = new Date('2024-02-01T00:00:00').toISOString();
//         const monthNamesFull: string[] = [ "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         const monthNamesabbr: string[] = [ "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//             filteredData = monthNamesabbr.map((abbr, index) => {
//             const fullMonthName = monthNamesFull[index];

//             const powerEntry = (powerConsumptionData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//             const powerValue = powerEntry ? powerEntry.value : 0;
//             const burningValue = burningEntry ? burningEntry.value : 0;

//             return {
//                 name: abbr,
//                 powerConsumption: powerValue,
//                 burningHours: burningValue,
//             };
//         });
//     }
//     return filteredData;
// };

//   const transformedData1 = transformData(energyConsumptionData, 'month');
//   const transformedData2 = transformData(energyConsumptionData, 'week'); // Corrected from 'Week' to 'week'
//   const transformedData3 = transformData(energyConsumptionData, 'day');

//   const filterToDataMap: { [key: string]: any[] } = {
//     month: transformedData1,
//     week: transformedData2,
//     day: transformedData3,
//   };

//   const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;

//   const transformedChartData = selectedData.map((item) => ({
//     ...item,
//     powerConsumption: item.powerConsumption / 1000,
//     burningHours: item.burningHours / 1000,
//   }));

//   return (
//     <WidgetWrapper className="smart-city_box energy_consumption-box">
//       <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//       <div className="smart-city-content">
//         <div className="technician_chart">
//           <div className='chart-top'>

//             <ToggleFilter
//               options={[
//                 { label: "7D", value: "day" },
//                 { label: "1M", value: "week" },
//                 { label: "1Y", value: "month" },
//               ]}
//               value={toggleFilterValue}
//               onChange={handleFilterChange}
//             />
//           </div>

//           <div className='chart-top' style={{marginTop:"0.5em"}}>
//             <div className="sub_title_bar">Total mWh</div>
//             <div className="sub_title_bar hrs">Hours</div>
//           </div>

//           <ResponsiveContainer>

//                   <AreaChart
//                     data={transformedChartData}
//                     margin={{
//                         top: 10,
//                         right: 0,
//                         left: 0,
//                         bottom: 30,
//                     }}
//                 >
//                     <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />

//                     <XAxis dataKey="name"  />
//                     <YAxis yAxisId="left" />
//                     {/* <YAxis yAxisId="left" ticks={[0, 20, 40, 60, 80]} />   */}
//                     {/* <YAxis  ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]} yAxisId="right" orientation="right" tickFormatter={(value) => `${(value)}K`}/>  */}
//                     <YAxis  yAxisId="right" orientation="right" tickFormatter={(value) => `${(value)}K`}/>

//                   <Tooltip
//                     formatter={(value: any, name: any, props: any) => {
//                       if (name === "Burning Hours") {
//                         return [`${value} hours`, name];
//                       } else {
//                         return [`${value} mWh`, name];
//                       }
//                     }}
//                     labelFormatter={(label: string) => {
//                       if (toggleFilterValue === 'day') {
//                         const dayIndexMap: { [key: string]: number } = {
//                           "Sun": 0,
//                           "Mon": 1,
//                           "Tue": 2,
//                           "Wed": 3,
//                           "Thu": 4,
//                           "Fri": 5,
//                           "Sat": 6
//                         };
//                         const dayIndex = dayIndexMap[label];
//                         const currentDate = new Date();
//                         const currentDay = currentDate.getDay();
//                         const startDate = new Date(currentDate);
//                         startDate.setDate(startDate.getDate() - currentDay);
//                         const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + dayIndex);
//                         const day = targetDate.getDate();
//                         const month = targetDate.getMonth() + 1;
//                         const year = targetDate.getFullYear();
//                         const formattedDate = `${day}/${month}/${year}`;
//                         return `Date: ${formattedDate}`;
//                       } else {
//                         return `Date: ${label}`;
//                       }
//                     }}
//                   />

//                     <Legend />
//                     <Area
//                         type="monotone"
//                         dataKey="powerConsumption"
//                         name="Power Consumption (MWh)"
//                         stackId="1"
//                         stroke="#001912"
//                         fill="url(#gradient1)"
//                         yAxisId="left"
//                     />
//                     <Area
//                         type="monotone"
//                         dataKey="burningHours"
//                         name="Burning Hours"
//                         stackId="1"
//                         stroke="#79dccc"
//                         fill="url(#gradient2)"
//                         yAxisId="left"
//                     />
//                     <Area
//                         type="monotone"
//                         dataKey="hours"
//                         stackId="0"
//                         fill="url(#gradient3)"
//                         yAxisId="right"
//                         style={{ display: "none" }}
//                         legendType="none"
//                     />
//                     <defs>
//                         <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="10%" stopColor="#01a4ef" stopOpacity={0.8} />
//                             <stop offset="90%" stopColor="#013335" stopOpacity={0.9} />
//                         </linearGradient>
//                         <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="10%" stopColor="#00947b" stopOpacity={0.8} />
//                             <stop offset="90%" stopColor="#053122" stopOpacity={0.9} />
//                         </linearGradient>
//                     </defs>
//                 </AreaChart>

//           </ResponsiveContainer>
//         </div>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default EnergyConsumption;

// import React, { useState, useEffect } from 'react';
// import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
// import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { IContextProvider } from '../uxp';

// interface EnergyConsumptionData {
//   "Power Consumption"?: {
//     [key: string]: { [key: string]: number }[]
//   };
//   "Burning Hours"?: {
//     [key: string]: { [key: string]: number }[]
//   };
// }

// interface IWidgetProps {
//   instanceId?: string;
//   uxpContext?: IContextProvider;
// }

// const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => {
//     const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({});
//     const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");
//     const [filter, setFilter] = useState<'Day' | 'Week' | 'Month'>('Day');

//     // const currentDate = new Date();
//     // currentDate.setDate(-1);

//     const currentDate = new Date();
//     currentDate.setDate(0);

//     const startDate = currentDate.toISOString();
//     const endDate = new Date().toISOString();
//     const hierarchy = 'منطقة المدينة';
//     const start = startDate;
//     const end = endDate;

//     const handleFilterChange = (value: "day" | "week" | "month") => {
//       console.log("Selected Filter Value:", value);
//       setToggleFilterValue(value);
//       if (value === 'day') {
//         setFilter('Day');
//       } else if (value === 'week') {
//         setFilter('Week');
//       } else if (value === 'month') {
//         setFilter('Month');
//       }
//     };

//     const fetchData = () => {
//         let newStart = start;
//         let newEnd = end;

//         //  if (filter === 'Day') {
//         //     newStart = new Date(-1).toISOString();
//         //     newEnd = new Date().toISOString();
//         //   }

//         if (filter === 'Month') {
//           newStart = new Date('2024-02-03T00:00:00').toISOString();
//           newEnd = new Date().toISOString();
//         }

//         props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start: newStart, end: newEnd, filter }, { json: true })
//           .then((res: any) => {
//             console.log("Response From API is", res, typeof res);
//             setEnergyConsumptionData(res);
//           }).catch((e: any) => {
//             console.error("Error fetching data:", e);
//           });
//       };

//     React.useEffect(() => {
//       fetchData();
//     }, [hierarchy, start, end, filter]);

//  const transformData = (rawData: EnergyConsumptionData, filterType: "day" | "week" | "month") => {
//     let filteredData: { name: string; powerConsumption: number; burningHours: number }[] = [];

//     const powerConsumptionData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Power Consumption"] || [];
//     const burningHoursData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Burning Hours"] || [];

//   // if (filterType === "day") {
//   //       const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   //       const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   //       // filteredData = daysInWeekAbbr.map((abbr, index) => {
//   //       //     const fullDayName = daysInWeekFull[index];
//   //       //     const powerEntry = (powerConsumptionData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//   //       //     const burningEntry = (burningHoursData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//   //       //     return {
//   //       //         name: abbr, new Date(),
//   //       //         powerConsumption: powerEntry ? powerEntry.value : 0,
//   //       //         burningHours: burningEntry ? burningEntry.value : 0,
//   //       //     };
//   //       // });

//   //       filteredData = daysInWeekAbbr.map((abbr, index) => {
//   //         const fullDayName = daysInWeekFull[index];

//   //         const currentDate = new Date();
//   //         currentDate.setDate(currentDate.getDate() + index - 1);
//   //         const dateString = currentDate.toLocaleDateString();

//   //         const powerEntry = (powerConsumptionData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//   //         const burningEntry = (burningHoursData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//   //         return {
//   //             name: abbr || dateString,
//   //             powerConsumption: powerEntry ? powerEntry.value : 0,
//   //             burningHours: burningEntry ? burningEntry.value : 0,
//   //         };
//   //     });

//   if (filterType === "day") {
//     const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     filteredData = daysInWeekAbbr.map((abbr, index) => {
//         const fullDayName = daysInWeekFull[index];

//         // const currentDate = new Date();
//         // currentDate.setDate(currentDate.getDate() + index - 1);
//         // const dateString = currentDate.toLocaleDateString();

//         const currentDate = new Date();
//         currentDate.setDate(currentDate.getDate() + index - 1);
//         const day = currentDate.getDate();
//         const month = currentDate.toLocaleString('default', { month: 'short' });
//         // const year = currentDate.getFullYear();
//         const year = currentDate.toLocaleString('default', { year: '2-digit' });
//         const dateString = `${day}/${month}/${year}`;

//         const powerEntry = (powerConsumptionData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//         const burningEntry = (burningHoursData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);

//         const fullDateString = currentDate.toLocaleDateString(); // Full date string for tooltip

//         return {
//            //  name: abbr,
//              name: dateString,
//             fullDate: fullDateString, // Store the full date string separately
//             powerConsumption: powerEntry ? powerEntry.value : 0,
//             burningHours: burningEntry ? burningEntry.value : 0,
//         };
//     });

//     }

//     else if (filterType === "week") {
//         const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];

//         filteredData = WeekNamesFull.map(weekName => {
//             const powerEntry = (powerConsumptionData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//             const powerValue = powerEntry ? powerEntry.value : 0;
//             const burningValue = burningEntry ? burningEntry.value : 0;

//             return {
//                 name: weekName,
//                 powerConsumption: powerValue,
//                 burningHours: burningValue,
//             };
//         });
//     }

//     else if (filterType === "month") {

//         const startDate = new Date('2024-02-01T00:00:00').toISOString();

//         const monthNamesFull: string[] = [ "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         const monthNamesabbr: string[] = [ "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//             filteredData = monthNamesabbr.map((abbr, index) => {
//             const fullMonthName = monthNamesFull[index];

//             const powerEntry = (powerConsumptionData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//             const powerValue = powerEntry ? powerEntry.value : 0;
//             const burningValue = burningEntry ? burningEntry.value : 0;

//             return {
//                 name: abbr,
//                 powerConsumption: powerValue,
//                 burningHours: burningValue,
//             };
//         });
//     }
//     return filteredData;
// };

//   const transformedData1 = transformData(energyConsumptionData, 'month');
//   const transformedData2 = transformData(energyConsumptionData, 'week'); // Corrected from 'Week' to 'week'
//   const transformedData3 = transformData(energyConsumptionData, 'day');

//   const filterToDataMap: { [key: string]: any[] } = {
//     month: transformedData1,
//     week: transformedData2,
//     day: transformedData3,
//   };

//   const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;

//   const transformedChartData = selectedData.map((item) => ({
//     ...item,
//     powerConsumption: item.powerConsumption / 1000,
//     burningHours: item.burningHours / 1000,
//   }));

//   return (
//     <WidgetWrapper className="smart-city_box energy_consumption-box">
//       <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//       <div className="smart-city-content">
//         <div className="technician_chart">
//           <div className='chart-top'>

//             <ToggleFilter
//               options={[
//                 { label: "7D", value: "day" },
//                 { label: "1M", value: "week" },
//                 { label: "1Y", value: "month" },
//               ]}
//               value={toggleFilterValue}
//               onChange={handleFilterChange}
//             />
//           </div>

//           <div className='chart-top' style={{marginTop:"0.5em"}}>
//             <div className="sub_title_bar">Total MWh</div>
//             <div className="sub_title_bar hrs">Hours</div>
//           </div>

//           <ResponsiveContainer>

//                 <AreaChart
//                 data={transformedChartData}
//                 margin={{
//                     top: 10,
//                     right: 0,
//                     left: 0,
//                     bottom: 30,
//                 }}
//                 >
//                 <CartesianGrid stroke="#0b3e35cf" strokeDasharray="1 1" />
//                 <XAxis dataKey="name" />

//                   {/* <YAxis yAxisId="left" tickFormatter={(value) => `${(value / 1000).toFixed(2)} MWh`} />  */}

//                  <YAxis yAxisId="left" />
//                 {/* <YAxis yAxisId="left" ticks={[0,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]} /> */}
//                 <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${(value)}K`}/>

//                 <Tooltip
//                     formatter={(value: any, name: any, props: any) => [`${value} kWh`, name]}
//                     labelFormatter={(label: any) => `Day: ${label}`}
//                 />

//                 <Legend />

//                 <Area
//                     type="monotone"
//                     dataKey="powerConsumption"
//                     name="Power Consumption (MWh)"
//                     stackId="1"
//                     stroke="#001912"
//                     fill="url(#gradient1)"
//                     yAxisId="left"
//                 />
//                 <Area
//                     type="monotone"
//                     dataKey="burningHours"
//                     name="Burning Hours (MWh)"
//                     stackId="1"
//                     stroke="#79dccc"
//                     fill="url(#gradient2)"
//                     yAxisId="left"
//                 />
//                 <Area
//                     type="monotone"
//                     dataKey="hours"
//                     stackId="0"
//                     fill="url(#gradient3)"
//                     yAxisId="right"
//                     style={{ display: "none" }}
//                     legendType="none"
//                 />
//                 <defs>
//                     <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="10%" stopColor="#01a4ef" stopOpacity={0.8} />
//                         <stop offset="90%" stopColor="#013335" stopOpacity={0.9} />
//                     </linearGradient>

//                     <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="10%" stopColor="#00947b" stopOpacity={0.8} />
//                         <stop offset="90%" stopColor="#053122" stopOpacity={0.9} />
//                     </linearGradient>

//                 </defs>
//                 </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default EnergyConsumption;

// import React, { useState, useEffect } from 'react';
// import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
// import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { IContextProvider } from '../uxp';

// interface EnergyConsumptionData {
//   "Power Consumption"?: {
//     [key: string]: { [key: string]: number }[]
//   };
//   "Burning Hours"?: {
//     [key: string]: { [key: string]: number }[]
//   };
// }

// interface IWidgetProps {
//   instanceId?: string;
//   uxpContext?: IContextProvider;
// }

// const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => {
//     const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({});
//     const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");
//     const [filter, setFilter] = useState<'Day' | 'Week' | 'Month'>('Day');

//     const currentDate = new Date();
//     currentDate.setDate(-1);
//     const startDate = currentDate.toISOString();
//     const endDate = new Date().toISOString();
//     const hierarchy = 'منطقة المدينة';
//     const start = startDate;
//     const end = endDate;

//     const handleFilterChange = (value: "day" | "week" | "month") => {
//       console.log("Selected Filter Value:", value);
//       setToggleFilterValue(value);
//       if (value === 'day') {
//         setFilter('Day');
//       } else if (value === 'week') {
//         setFilter('Week');
//       } else if (value === 'month') {
//         setFilter('Month');
//       }
//     };

//     // const fetchData = () => {

//     //   props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start, end, filter }, { json: true })
//     //     .then((res: any) => {
//     //       console.log("Response From API is", res, typeof res);
//     //       setEnergyConsumptionData(res);
//     //     }).catch((e: any) => {
//     //       console.error("Error fetching data:", e);
//     //     });
//     // };

//     const fetchData = () => {
//         let newStart = start;
//         let newEnd = end;

//         //  if (filter === 'Day') {
//         //     newStart = new Date('2024-03-31T00:00:00').toISOString();

//         //     newStart = new Date('2024-03-31T00:00:00').toISOString();

//         //     newEnd = new Date().toISOString();
//         //   }

//         //  if (filter === 'Week') {
//         //    // newStart = new Date('2024-04-01T00:00:00').toISOString();
//         //     newEnd = new Date().toISOString();
//         //     newEnd = new Date('2024-04-09T17:45:00').toISOString();
//         //   }

//         if (filter === 'Month') {
//           newStart = new Date('2024-02-03T00:00:00').toISOString();
//           newEnd = new Date().toISOString();
//         }

//         props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start: newStart, end: newEnd, filter }, { json: true })
//           .then((res: any) => {
//             console.log("Response From API is", res, typeof res);
//             setEnergyConsumptionData(res);
//           }).catch((e: any) => {
//             console.error("Error fetching data:", e);
//           });
//       };

//     React.useEffect(() => {
//       fetchData();
//     }, [hierarchy, start, end, filter]);

//  const transformData = (rawData: EnergyConsumptionData, filterType: "day" | "week" | "month") => {
//     let filteredData: { name: string; powerConsumption: number; burningHours: number }[] = [];

//     const powerConsumptionData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Power Consumption"] || [];
//     const burningHoursData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Burning Hours"] || [];

//     if (filterType === "day") {

//         const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//         filteredData = daysInWeekAbbr.map((abbr, index) => {
//             const fullDayName = daysInWeekFull[index];
//             const powerEntry = (powerConsumptionData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//             return {
//                 name: abbr,
//                 powerConsumption: powerEntry ? powerEntry.value : 0,
//                 burningHours: burningEntry ? burningEntry.value : 0,
//             };
//         });
//     }

//     else if (filterType === "week") {

//         const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];

//         filteredData = WeekNamesFull.map(weekName => {
//             const powerEntry = (powerConsumptionData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//             const powerValue = powerEntry ? powerEntry.value : 0;
//             const burningValue = burningEntry ? burningEntry.value : 0;

//             return {
//                 name: weekName,
//                 powerConsumption: powerValue,
//                 burningHours: burningValue,
//             };
//         });
//     }

//     else if (filterType === "month") {

//         const startDate = new Date('2024-02-01T00:00:00').toISOString();

//         const monthNamesFull: string[] = [ "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         const monthNamesabbr: string[] = [ "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//             filteredData = monthNamesabbr.map((abbr, index) => {
//             const fullMonthName = monthNamesFull[index];

//             const powerEntry = (powerConsumptionData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//             const powerValue = powerEntry ? powerEntry.value : 0;
//             const burningValue = burningEntry ? burningEntry.value : 0;

//             return {
//                 name: abbr,
//                 powerConsumption: powerValue,
//                 burningHours: burningValue,
//             };
//         });
//     }
//     return filteredData;
// };

//   const transformedData1 = transformData(energyConsumptionData, 'month');
//   const transformedData2 = transformData(energyConsumptionData, 'week'); // Corrected from 'Week' to 'week'
//   const transformedData3 = transformData(energyConsumptionData, 'day');

//   const filterToDataMap: { [key: string]: any[] } = {
//     month: transformedData1,
//     week: transformedData2,
//     day: transformedData3,
//   };

//   const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;

//   return (
//     <WidgetWrapper className="smart-city_box energy_consumption-box">
//       <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//       <div className="smart-city-content">
//         <div className="technician_chart">
//           <div className='chart-top'>

//             <ToggleFilter
//               options={[
//                 { label: "7D", value: "day" },
//                 { label: "1M", value: "week" },
//                 { label: "1Y", value: "month" },
//               ]}
//               value={toggleFilterValue}
//               onChange={handleFilterChange}
//             />
//           </div>

//            <div className='chart-top' style={{marginTop:"0.5em"}}>
//             <div className="sub_title_bar">Total mWh</div>
//             <div className="sub_title_bar hrs">Hours</div>
//           </div>

//           <ResponsiveContainer>
//                 <AreaChart
//                 data={selectedData}
//                 margin={{
//                     top: 10,
//                     right: 0,
//                     left: 0,
//                     bottom: 30,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 {/* <YAxis yAxisId="left" /> */}
//                 <YAxis yAxisId="left" tickFormatter={(value) => `${(value / 1000).toFixed(2)} MWh`} />
//                 <YAxis yAxisId="right" orientation="right" />

//                  {/* <Tooltip
//                     formatter={(value: any, name: any, props: any) => [`${value} kWh`, name]}
//                     labelFormatter={(label: any) => `Day: ${label} ${endDate}`}
//                 />     */}

//                 <Tooltip
//                     formatter={(value: any, name: any, props: any) => [`${value * 1000} mWh`, name]}
//                     labelFormatter={(label: any) => `Day: ${label} ${endDate}`}
//                 />

//                 <Legend />

//                 <Area
//                     type="monotone"
//                     dataKey="powerConsumption"
//                     name="Power Consumption"
//                     stackId="1"
//                     stroke="#001912"
//                     fill="url(#gradient1)"
//                     yAxisId="left"
//                 />
//                 <Area
//                     type="monotone"
//                     dataKey="burningHours"
//                     name="Burning Hours"
//                     stackId="1"
//                     stroke="#79dccc"
//                     fill="url(#gradient2)"
//                     yAxisId="left"
//                 />
//                 <Area
//                     type="monotone"
//                     dataKey="hours"
//                     stackId="0"
//                     fill="url(#gradient3)"
//                     yAxisId="right"
//                     style={{ display: "none" }}
//                     legendType="none"
//                 />
//                 <defs>
//                     <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#065168" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#065168" stopOpacity={0.7} />
//                     </linearGradient>
//                     <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#79dccc" stopOpacity={0.7} />
//                     </linearGradient>
//                 </defs>
//                 </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default EnergyConsumption;

// import React, { useState, useEffect } from 'react';
// import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
// import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { IContextProvider } from '../uxp';

// interface EnergyConsumptionData {
//   "Power Consumption"?: {
//     [key: string]: { [key: string]: number }[]
//   };
//   "Burning Hours"?: {
//     [key: string]: { [key: string]: number }[]
//   };
// }

// interface IWidgetProps {
//   instanceId?: string;
//   uxpContext?: IContextProvider;
// }

// interface ConsumptionEntry {
//     day: string;
//     value: number;
//   }

// const EnergyConsumption: React.FunctionComponent<IWidgetProps> = (props) => {

//   const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({});

//     const currentDate = new Date();
//     currentDate.setDate(1);
//     const startDate = currentDate.toISOString();

//     const endDate = new Date().toISOString();
//     const hierarchy = 'منطقة المدينة';
//     const start = startDate;
//     const end = endDate;
//     let filter: 'Day' | 'Week' | 'Month';

//     //let filter = 'Month'; // For example, set it to 'Day' initially

// function getEnergyConsumptionData() {
//     props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start, end, filter }, { json: true })
//       .then((res: any) => {
//         console.log("Response From API is", res, typeof res);
//         setEnergyConsumptionData(res);
//       }).catch((e: any) => {
//         console.error("Error fetching data:", e);
//       });
//   }

//   React.useEffect(() => {
//     getEnergyConsumptionData();
//   }, [hierarchy, start, end, filter]);

//   const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");

//   const handleFilterChange = (value: "day" | "week" | "month") => {
//     console.log("Selected Filter Value:", value);
//     setToggleFilterValue(value);
//   };

// const transformData = (rawData: EnergyConsumptionData, filterType: "day" | "week" | "month") => {
//     let filteredData: { name: string; powerConsumption: number; burningHours: number }[] = [];

//       const powerConsumptionData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Power Consumption"] || [];
//       const burningHoursData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Burning Hours"] || [];

//     if (filterType === "day") {

//         filter = 'Day';

//         const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//         filteredData = daysInWeekAbbr.map((abbr, index) => {
//             const fullDayName = daysInWeekFull[index];
//             const powerEntry = (powerConsumptionData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//             return {
//                 name: abbr,
//                 powerConsumption: powerEntry ? powerEntry.value : 0,
//                 burningHours: burningEntry ? burningEntry.value : 0,
//             };
//         });
//     }

//     else if (filterType === "week") {

//         filter = 'Week';

//         const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];

//         filteredData = WeekNamesFull.map(weekName => {
//             const powerEntry = (powerConsumptionData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//             const powerValue = powerEntry ? powerEntry.value : 0;
//             const burningValue = burningEntry ? burningEntry.value : 0;

//             return {
//                 name: weekName,
//                 powerConsumption: powerValue,
//                 burningHours: burningValue,
//             };
//         });

//     }

//     else if (filterType === "month") {

//         filter = 'Month';

//         const monthNamesFull: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         const monthNamesabbr: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//             filteredData = monthNamesabbr.map((abbr, index) => {
//             const fullMonthName = monthNamesFull[index];

//             const powerEntry = (powerConsumptionData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//             const burningEntry = (burningHoursData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//             const powerValue = powerEntry ? powerEntry.value : 0;
//             const burningValue = burningEntry ? burningEntry.value : 0;

//             return {
//                 name: abbr,
//                 powerConsumption: powerValue,
//                 burningHours: burningValue,
//             };
//         });
//     }

//     return filteredData;
// };

//   const transformedData1 = transformData(energyConsumptionData, 'month');
//   const transformedData2 = transformData(energyConsumptionData, 'week'); // Corrected from 'Week' to 'week'
//   const transformedData3 = transformData(energyConsumptionData, 'day');

//   const filterToDataMap: { [key: string]: any[] } = {
//     month: transformedData1,
//     week: transformedData2,
//     day: transformedData3,
//   };

//   const selectedData = filterToDataMap[toggleFilterValue] || transformedData1;

//   return (
//     <WidgetWrapper className="smart-city_box energy_consumption-box">
//       <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//       <div className="smart-city-content">
//         <div className="technician_chart">
//           <div className='chart-top'>
//             <div className="sub_title_bar">Total kWh</div>
//             <ToggleFilter
//               options={[
//                 { label: "7D", value: "day" },
//                 { label: "1M", value: "week" },
//                 { label: "1Y", value: "month" },
//               ]}
//               value={toggleFilterValue}
//               onChange={handleFilterChange}
//             />
//           </div>
//           <ResponsiveContainer>

//                 <AreaChart
//                 data={selectedData}
//                 margin={{
//                     top: 10,
//                     right: 0,
//                     left: 0,
//                     bottom: 30,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis yAxisId="left" />
//                 <YAxis yAxisId="right" orientation="right" />
//                 <Tooltip
//                     formatter={(value: any, name: any, props: any) => [`${value} kWh`, name]}
//                     labelFormatter={(label: any) => `Day: ${label}`}
//                 />
//                 <Legend />

//                 <Area
//                     type="monotone"
//                     dataKey="powerConsumption"
//                     name="Power Consumption"
//                     stackId="1"
//                     stroke="#001912"
//                     fill="url(#gradient1)"
//                     yAxisId="left"
//                 />
//                 <Area
//                     type="monotone"
//                     dataKey="burningHours"
//                     name="Burning Hours"
//                     stackId="1"
//                     stroke="#79dccc"
//                     fill="url(#gradient2)"
//                     yAxisId="left"
//                 />
//                 <Area
//                     type="monotone"
//                     dataKey="hours"
//                     stackId="0"
//                     fill="url(#gradient3)"
//                     yAxisId="right"
//                     style={{ display: "none" }}
//                     legendType="none"
//                 />
//                 <defs>
//                     <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#065168" stopOpacity={0.8} />
//                     <stop offset="95%" stopColor="#065168" stopOpacity={0.7} />
//                     </linearGradient>
//                     <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#008b74" stopOpacity={0.8} />
//                     <stop offset="95%" stopColor="#79dccc" stopOpacity={0.7} />
//                     </linearGradient>
//                 </defs>
//                 </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default EnergyConsumption;
