import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddSubmission from '../screens/AddSubmission';
import SubmissionsList from '../screens/SubmissionsList';

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SubmissionsList" component={SubmissionsList} />
        <Stack.Screen name="AddSubmission" component={AddSubmission} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
