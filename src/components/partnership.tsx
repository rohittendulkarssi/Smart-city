import React, { useState } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';



interface IMapChangeMode {
  uxpContext: IContextProvider;
}
interface ITab {
 
}
const PartnershipWidget: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  
  return (
    <WidgetWrapper className="smart-city_box partnership-box"> 

        <div className='header-content'>
                <div className='raseel_logo'></div> 

                <div className='partnership-cont'> 
                 <p><sub>Partnership with</sub></p><div className='ssi_logo'></div> 
              </div>
              
        </div>
 

    </WidgetWrapper> 
  );
};
export default PartnershipWidget; 