import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const SubmissionsList = ({navigation}) => {
  const data = useSelector(state => state.reducerApp);

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View>
        <Text>{item.Name}</Text>
        <Text>{item.Surname}</Text>
        <Text>{item.Age}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text>Submissions List</Text>
      <FlatList
        data={data.submissions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="+" onPress={() => navigation.navigate('AddSubmission')} />
    </View>
  );
};

export default SubmissionsList;
