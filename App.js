import React from 'react';
import StackNavigation from './src/routes/StackNavigation';
import { useTheme } from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';


const App = () => {

  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  return (
    <PaperProvider>
      <StackNavigation />
    </PaperProvider>
  )
}

export default App;
