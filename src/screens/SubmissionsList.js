import React from 'react';
import {View, Text, Button} from 'react-native';

const SubmissionsList = ({navigation}) => {
  return (
    <View>
      <Text>SubmissionsList</Text>
      <Button title="+" onPress={() => navigation.navigate('AddSubmission')} />
    </View>
  );
};

export default SubmissionsList;
