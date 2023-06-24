import React from 'react';

import {BottomTabs} from './src/navigation/BottomTabs';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
