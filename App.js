import React from 'react';
import ScreensStacks from './src/interactive/screensStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <ScreensStacks />
    </NavigationContainer>
  );
}

export default App