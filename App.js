import {View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import StackNav from './src/navigator/StackNav';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <StackNav />
      </Provider>
    </View>
  );
};

export default App;
