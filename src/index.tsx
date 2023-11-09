import React, { PureComponent } from 'react'; 

import { useEffect, useRef, useState } from "react"; 
import mapboxgl from "mapbox-gl";

import { registerWidget, IContextProvider  } from './uxp';  
import { DataList, WidgetWrapper, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

import './styles.scss';  

import { Line as RCProgressLine, Circle } from 'rc-progress';
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

import { generateScriptPathFromModuleId, getModuleIdFromWidgetId, loadScriptFile } from "./utils";
 
import * as Cesium from 'cesium'; 

// import StreetLightStatusChart from './lightStatusChart'; 

// import OrderSummary from './order-summary';

import StreetLightWorkOrder from './components/streetlight-work-order';
import EnergyConsumption from './components/energy_consumption'; 
import Street_Light__Status_Widget from './components/street-light-status'; 
import VehicleSummaryWidget from './components/vehicle-summary';
import Waste_Segregation_Metrics from './components/waste-segregation-metrics';
import Segregation_MetricsChart from './components/segregation-metrics'; 
import Water_ConsumptionWidget from './components/water-consumption';
import CCTVWidget from './components/cctv-capture'; 
import MaintenanceWorkOrderSummary from './components/maintenance-work-order';
import Waste_CollectionVehicle from './components/waste-collection-vehicle';
import Waste_bin_StatusWidget from './components/waste-bin-status';
import Maintenance_WorkOrder_Trend from './components/maintenance-work-order-trend';
import Water_SummaryWidget from './components/water-summary'; 
import Waste_Generated_Trend from './components/waste-generated-trends';
import Maintenance_Work_Order_Summary from './components/maintenance-work-order-summary';
import WaterLeakageWorkOrder from './components/water-leakage-work-order'
import AlertWorkOrderSummary from './components/alert-work-order-summary';
import CountsWidget from './components/counts';
import AlertTrends from './components/alert_trends';
import EmergencyWorkOrderSummary from './components/emergency-work-oder-summary';
import Traffic_Control from './components/traffic-control';
import IAQ_Summary from './components/IAQ-summary';
import IAQ_Widget from './components/IAQ';
import Comapre_IAQ from './components/compare_IAQ'
import CCTVOverviewWidget from './components/CCTV-overview'

import TopNavTabs from './components/top-section'
import WeatherIcons from './components/WeatherIcons'
import MapChangeMode from './components/map-change-mode'

import SemiCircle from './components/semi-circle';


 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

  
const TopNavBar: React.FunctionComponent<{}> = () => {   

    
    return (
              <div>Hi Udhaya</div>
  
    );
   
  }

//   <TopNavBar/>

/**
 * Register as a Widget
 */  

 
registerWidget({
    id: "waste-Generated-Trend", 
    widget: Waste_Generated_Trend,
    configs: {
        layout: {
            w: 10,
            h: 12,
            // minH: 9,
            // minW: 14
        }
    }
}); 

registerWidget({
    id: "wasteBinStatus", 
    widget: Waste_bin_StatusWidget,
    configs: {
        layout: {
            w: 10,
            h: 6,
            // minH: 12,
            // minW: 12
        }
    }
});  

registerWidget({
    id: "waste_Collection_Vehicle", 
    widget: Waste_CollectionVehicle,
    configs: {
        layout: {
            w: 10,
            h: 6,
            // minH: 12,
            // minW: 12
        }
    }
});  

registerWidget({
    id: "waste_segregation_Metrics", 
    widget: Waste_Segregation_Metrics,
    configs: {
        layout: {
            w: 10,
            h: 17,
            // minH: 12,
            // minW: 12
        }
    }
});  

registerWidget({
    id: "maintenance_WorkOrder_Trend", 
    widget: Maintenance_WorkOrder_Trend,
    configs: {
        layout: {
            w: 10,
            h: 12,
            // minH: 9,
            // minW: 14
        }
    }
}); 

registerWidget({
    id: "maintenance-Work-Order-Summary", 
    widget: Maintenance_Work_Order_Summary,
    configs: {
        layout: {
            w: 10,
            h: 12,
            // minH: 13,
            // minW: 14
        }
    }
}); 

registerWidget({
    id: "segregation_Metrics_Chart", 
    widget: Segregation_MetricsChart,
    configs: {
        layout: {
            w: 10,
            h: 8,
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
            w: 10,
            h: 10,
            // minH: 12,
            // minW: 12
        }
    }
});  

registerWidget({
    id: "energyConsumption", 
    widget: EnergyConsumption,
    configs: {
        layout: {
            w: 10,
            h: 9,
            // minH: 13,
            // minW: 14
        }
    }
});  

registerWidget({
    id: "Order_Summary", 
    widget: MaintenanceWorkOrderSummary,
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
    id: "streetLightStatusWidget", 
    widget: Street_Light__Status_Widget,
    configs: {
        layout: {
            w: 10,
            h: 14,
            // minH: 13,
            // minW: 14
        }
    }
});  

registerWidget({
    id: "vehicleSummaryWidget", 
    widget: VehicleSummaryWidget,
    configs: {
        layout: {
            w: 10,
            h: 10,
            // minH: 12,
            // minW: 12
        }
    }
});  

registerWidget({
    id: "streetLightWorkOrder", 
    widget: StreetLightWorkOrder,
    configs: {
        layout: {
            w: 10,
            h: 14,
            // minH: 13,
            // minW: 14
        }
    }
});
 
registerWidget({
    id: "waterSummary", 
    widget: Water_SummaryWidget,
    configs: {
        layout: {
            w: 10,
            h: 7,
            // minH: 13,
            // minW: 14
        }
    }
});  

registerWidget({
    id: "water_consumption", 
    widget: Water_ConsumptionWidget,
    configs: {
        layout: {
            w: 10,
            h: 11,
            // minH: 13,
            // minW: 14
        }
    }
});

registerWidget({
    id: "water_Leakage_Work_Order", 
    widget: WaterLeakageWorkOrder,
    configs: {
        layout: {
            w: 10,
            h: 19,
            // minH: 13,
            // minW: 14
        }
    }
});
 
registerWidget({
    id: "alert-Work-Order-Summary", 
    widget: AlertWorkOrderSummary,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});

registerWidget({
    id: "counts_Widget", 
    widget: CountsWidget,
    configs: {
        layout: {
            w: 10,
            h: 13,
            // minH: 13,
            // minW: 14
        }
    }
});
  
 
registerWidget({
    id: "alertTrends", 
    widget: AlertTrends,
    configs: {
        layout: {
            w: 10,
            h: 13,
            // minH: 13,
            // minW: 14
        }
    }
});

registerWidget({
    id: "emergencyWorkOrderSummary", 
    widget: EmergencyWorkOrderSummary,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});

registerWidget({
    id: "traffic_Control", 
    widget: Traffic_Control,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});

registerWidget({
    id: "iaq_Summary", 
    widget: IAQ_Summary,
    configs: {
        layout: {
            w: 10,
            h: 11,
            // minH: 13,
            // minW: 14
        }
    }
});

registerWidget({
    id: "iaq_Widget", 
    widget: IAQ_Widget,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});


registerWidget({
    id: "comapre-IAQ", 
    widget: Comapre_IAQ,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});

registerWidget({
    id: "cctvoverviewWidget", 
    widget: CCTVOverviewWidget,
    configs: {
        layout: {
            w: 30,
            h: 16,
            minH: 16,
            minW: 30,
             maxH: 16,
             maxW: 30
        }
    }
});

registerWidget({
    id: "topNavTabs", 
    widget: TopNavTabs,
    configs: {
        layout: {
            w: 12,
            h: 3, 
            minH: 3,
            minW: 12,
             maxH: 3,
             maxW: 12
        }
    }
});

registerWidget({
    id: "weatherIcons", 
    widget: WeatherIcons,
    configs: {
        layout: {
            w: 8,
            h: 3, 
            // minH: 3,
            // minW: 8,
            //  maxH: 3,
            //  maxW: 8
        }
    }
});


registerWidget({
    id: "mapChangeMode", 
    widget: MapChangeMode,
    configs: {
        layout: {
            w: 2,
            h: 9,
            minH: 9,
            minW: 2,
             maxH: 9,
             maxW: 2
        }
    }
});






function componentDidMount() {
    throw new Error('Function not implemented.');
}
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