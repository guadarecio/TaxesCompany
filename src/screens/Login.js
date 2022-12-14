import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, Image} from 'react-native';

import {useDispatch} from 'react-redux';
import globalStyles from '../globalStyles/globalStyles';
import {setToken} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('correo@correo.com');
  const [password, setPassword] = useState('12345678');

  const logIn = async token => {
    try {
      dispatch(setToken(token));
      await AsyncStorage.setItem('@storage_Key', token);
    } catch (e) {
      Alert.alert('Log in error');
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={globalStyles.container}>
        <View>
          <Image
            source={{
              uri: 'https://www.enkel.ca/wp-content/uploads/2019/05/not-for-profit-tax-requirementsArtboard-1.png',
            }}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 250,
            }}
          />
        </View>
        <View style={globalStyles.subContainer}>
          <Text style={globalStyles.text}>Username</Text>
          <TextInput
            style={globalStyles.textInputLogin}
            placeholder="Write your e-mail address"
            keyboardType="email-address"
            onChangeText={u => setUsername(u)}
            value={username}
          />
          <Text style={globalStyles.text}>Password</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Write your password"
            onChangeText={p => setPassword(p)}
            value={password}
            secureTextEntry
          />
          <View style={globalStyles.buttonLogo}>
            <Button
              onPress={() => {
                if (
                  username === 'correo@correo.com' &&
                  password === '12345678'
                ) {
                  logIn('token');
                } else {
                  Alert.alert('Your username or password is incorrect');
                }
              }}
              title="Log in"
            />
          </View>

          <Button title="Register" />

          <Button title="I forgot my password" />
        </View>
      </View>
    </View>
  );
};

export default Login;
