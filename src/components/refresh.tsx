
import React from 'react';
import { Button, WidgetWrapper } from "uxp/components";
import { IContextProvider } from '../uxp';
import { EventsEnum } from '..';

interface IRefresh {
  uxpContext: IContextProvider;
}

const Refresh_Btn: React.FunctionComponent<IRefresh> = (props) => {
  const { uxpContext } = props;

  const handleModeChange = () => {
    uxpContext.eventHandler?.(EventsEnum.UpdateIOTAssetData, {});
  };

  return (
    <WidgetWrapper className="smart-city_box refresh-btn-box">
      <Button className='refresh-btn' title="Refresh" onClick={handleModeChange} />
    </WidgetWrapper>
  );
};

export default Refresh_Btn;



 