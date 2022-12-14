import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import AddSubmission from '../screens/AddSubmission';
import SubmissionsList from '../screens/SubmissionsList';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken} from '../redux/action';
import {removeToken} from '../redux/action';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

function StackNav() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.reducerApp);

  const headerOptions = {
    headerRight: () => (
      <Icon.Button
        onPress={() => logOut()}
        name="power-off"
        color={'black'}
        backgroundColor={'white'}
      />
    ),
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      dispatch(removeToken());
    } catch (e) {
      console.log('remove');
    }
    console.log('Done.');
  };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_Key');
      if (token !== null) {
        dispatch(setToken(token));
      }
    } catch (e) {
      console.log('error', token);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {data.token === null ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
        ) : (
          <>
            <Stack.Screen
              name="QueryList"
              component={SubmissionsList}
              options={headerOptions}
            />
            <Stack.Screen
              name="AddQuery"
              component={AddSubmission}
              options={headerOptions}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
