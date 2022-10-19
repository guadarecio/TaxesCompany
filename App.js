import {View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import StackNav from './src/navigator/StackNav';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StackNav />
    </View>
  );
};

export default App;
