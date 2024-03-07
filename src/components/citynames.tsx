import React, { useState } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';



interface IMapChangeMode {
  uxpContext: IContextProvider;
}
interface ITab {
 
}
const CityNamesWidget: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  
  return (
    <WidgetWrapper className="smart-city_box empty-box">  

        {/* <h4>Al Haram District</h4> */}
        <h4>Overall City</h4>

    </WidgetWrapper> 
  );
};
export default CityNamesWidget; 