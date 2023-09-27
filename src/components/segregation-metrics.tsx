import React, { useState } from 'react';
 
import {  WidgetWrapper,  TitleBar } from "uxp/components";  
import { ResponsivePie } from '@nivo/pie';  
 
 
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Segregation_MetricsChart: React.FunctionComponent<{}> = () => {  
 

    
 var data =[
    {
      "id": "plastic",
      "label": "Plastic",
      "value": 3273,
      "color": "rgb(106 186 53)"
    },
    {
      "id": "paper",
      "label": "Paper", 
      "value": 2947 ,
      "color": "rgb(2 108 92)"
    },
    {
      "id": "metal",
      "label": "Metal",
      "value":  2838,
      "color": "rgb(50 161 152)"
    },
    {
      "id": "food_waste",
      "label": "Food Waste",
      "value":  3875,
      "color": "rgb(99 245 227)"
    },
    {
      "id": "glass",
      "label": "Glass",
      "value":  1945,
      "color": "rgb(179 238 142)"
    }
  ]
    
    const MyResponsivePie = ({  }) => (
        // <ResponsivePie
        //     data={data}
        //     margin={{ top: 0, right: 40, bottom: 60, left: 40 }}
        //     innerRadius={0.4}
        //     padAngle={0.5}
        //     cornerRadius={0}
        //     activeOuterRadiusOffset={8}
        //     borderWidth={1}
        //     borderColor={{
        //         from: 'color',
        //         modifiers: [
        //             [
        //                 'darker',
        //                 0.2
        //             ]
        //         ]
        //     }}
        //     arcLinkLabelsSkipAngle={10}
        //     arcLinkLabelsTextColor="#ffffff"
        //     arcLinkLabelsThickness={2}
        //     arcLinkLabelsColor={{ from: 'color' }}
        //     arcLabelsSkipAngle={10}
        //     arcLabelsTextColor={{
        //         from: 'color',
        //         modifiers: [
        //             [
        //                 'darker',
        //                 1
        //             ]
        //         ]
        //     }}
             
        //     legends={[
        //         {
        //             anchor: 'bottom',
        //             direction: 'row',
        //             justify: false,
        //             translateX: 0,
        //             translateY: 56,
        //             itemsSpacing: 0,
        //             itemWidth: 100,
        //             itemHeight: 15,
        //             itemTextColor: '#fff',
        //             itemDirection: 'left-to-right',
        //             itemOpacity: 1,
        //             symbolSize: 18,
        //             symbolShape: 'circle',
        //             effects: [
        //                 {
        //                     on: 'hover',
        //                     style: {
        //                         itemTextColor: '#fff'
        //                     }
        //                 }
        //             ]
        //         }
        //     ]}
        // />

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <ResponsiveContainer width={300} height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={0}
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            content={(props) => {
              const { payload } = props;

              return (
                <ul>
                  {data.map((entry, index) => (
                    <li key={`legend-${index}`} style={{ color: entry.color }}>
                      <em style={{ background: entry.color }}></em>
                      <span>{`${entry.label}:`}</span>
                      <span className="data_values">{` ${entry.value} Tons`}</span>
                    </li>
                  ))}
                </ul>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    )
    
        return ( 
           
            <WidgetWrapper className="smart-city_box segregation_metrics-box"> 
          
    
                <TitleBar title="Waste Segregation Metrics" icon='https://static.iviva.com/images/Udhayimages/waste-seg-matrix.png'></TitleBar>  
    
                <div className="smart-city-content">  
                    <div className="technician_chart" style={{ height: 200 }}>  
                        <MyResponsivePie/>
                    </div>  
                </div>
    
            </WidgetWrapper>
    
        )
    };

export default Segregation_MetricsChart;
