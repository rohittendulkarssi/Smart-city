
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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


const BuildingSummary: React.FunctionComponent<IBuildingSummary> = ({ page, selectedAsset, ...props }) => {

  const [building_Summary, setBuilding_Summary] = useState(null);

   const lat = selectedAsset?.long;
   const long = selectedAsset?.lat;

  // const long = 39.6103515625;
  // const lat = 24.47159767150879;

  console.log('Selected Asset are', selectedAsset);
  console.log('latitude are', lat);
  console.log('Longitude are', long);

  // console.log('Details are',{selectedAsset,lat,long});

  function getBuildingSummaryData() {

    console.log("getBulingInfo")

    if (!lat && !long) {
      console.log("Lat or long is undefined.");
    } else {
      console.log("WE are calling building info API");
      props.uxpContext.executeAction("DigitalTwin", "GetBuildingInfo", { lat: lat, long: long }, { json: true })
        .then((res: any) => {
          console.log("Response From API is", res, typeof res);
          setBuilding_Summary(res["Building Details"]);
        }).catch((e: any) => {
          // console.log("hi", e);
        });
    }

  }

  React.useEffect(() => {
    getBuildingSummaryData();
  }, [lat, long])

  console.log('Image', building_Summary?.header?.buildingImage)

  return (

    <WidgetWrapper className="smart-city_box building_summary-box">

      <TitleBar title="Building Summary" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/layout.png'></TitleBar>

      <div className="smart-city-content" style={{ height: '350px' }}>

        <div className='building-details'>
          <div className='building-top'>

            <div className="building-pict"
              style={{
                  backgroundImage: `url(${building_Summary?.header?.buildingImage || 'https://static.iviva.com/images/Udhayimages/buildings-summary-pict.png'})`,
                // backgroundImage: `url("https://static.iviva.com/images/Udhayimages/buildings-summary-pict.png")`
              }} />


            <div className='building-header'>
              <div className='building-title'>{building_Summary?.header?.buildingName || ""}</div>
              <div className='building-nav'>
                <ul>


                  <li>
                    <a target="_blank" href='http://150.230.244.155/Apps/UXP/dashboards/IM20220324028'>
                      <div className='building-nav-icon'><img src="https://static.iviva.com/images/Udhayimages/incident-icon.png" /></div>
                      <div className='building-nav-title'>Report Incident</div>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href='#'>
                      <div className='building-nav-icon'><img src="https://static.iviva.com/images/Udhayimages/facility-management.png" /></div>
                      <div className='building-nav-title'>Facility Issue</div>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href='http://150.230.244.155/Apps/UXP/dashboards/IM20220324028'>
                      <div className='building-nav-icon'><img src="https://static.iviva.com/images/Udhayimages/agenda.png" /></div>
                      <div className='building-nav-title'>Report Incident</div>
                    </a>
                  </li>
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
 

          <div className='building-bot'>
            <div className='g_map-link' ><a href={building_Summary?.url} target="_blank">More : Gmap Link</a></div>

          </div>

        </div>

      </div>

    </WidgetWrapper>
  )
};


export default BuildingSummary;




