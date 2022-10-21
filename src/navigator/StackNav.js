import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import AddSubmission from '../screens/AddSubmission';
import SubmissionsList from '../screens/SubmissionsList';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken} from '../redux/action';

const Stack = createNativeStackNavigator();

function StackNav() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.reducerApp);

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
            <Stack.Screen name="SubmissionsList" component={SubmissionsList} />
            <Stack.Screen name="AddSubmission" component={AddSubmission} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
