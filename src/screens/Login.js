import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';
import logo from '../assets/logo';
import globalStyles from '../globalStyles/globalStyles';

const Login = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={globalStyles.container}>
        <View style={globalStyles.logo}>
          <SvgXml xml={logo} height="265" width="265" />
        </View>
        <View style={globalStyles.subContainer}>
          <Text style={globalStyles.text}>Username</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Write your username"
          />
          <Text style={globalStyles.text}>Password</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Write your password"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
