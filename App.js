import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {color} from './src/consts';

import Navigation from './src/navigations';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={color['background-color']}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
