import React, { useState } from 'react';
import { WidgetWrapper, Select, FormField } from 'uxp/components';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '..';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const ModeChangeWidget: React.FunctionComponent<IMapChangeMode> = (props) => { 

  const { uxpContext } = props;
  const [selected, setSelected] = React.useState<string | null>('Land Bank Management');

  const handleModeChange = (newMode: string) => {
    uxpContext.eventHandler?.(
      EventsEnum.ChangeAppMode,
      { mode: newMode }
    );
  };

  // const handleModeChange = () => {
  //   uxpContext.eventHandler?.(
  //     EventsEnum.ChangeAppMode,
  //     { mode: 'Land Bank Management' }
  //   );
  // };

  return ( 

    <WidgetWrapper className="smart-city_box mode-change-box">
    <FormField inline className="showcase-input">
      <Select
        selected={selected}
        options={[
          { label: 'Land Bank Management', value: 'Land Bank Management' },
          { label: 'Real Estate Insights', value: 'Real Estate Insights' } 
        ]}
        onChange={(selectedOption) => {
          setSelected(selectedOption);
          handleModeChange(selectedOption); 
        }}
        placeholder="Select Mode"
      />
    </FormField>
  </WidgetWrapper>

  );
};

export default ModeChangeWidget;
