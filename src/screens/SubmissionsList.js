import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyles from '../globalStyles/globalStyles';

const SubmissionsList = ({navigation}) => {
  const data = useSelector(state => state.reducerApp);

  const renderItem = ({item}) => {
    return (
      <View style={globalStyles.globalViewItem}>
        <View style={globalStyles.viewItem}>
          <Text>Name: </Text>
          <Text style={globalStyles.itemText}>{item.Name}</Text>
        </View>
        <View style={globalStyles.viewItem}>
          <Text>Surname: </Text>
          <Text style={globalStyles.itemText}>{item.Surname}</Text>
        </View>
        <View style={globalStyles.viewItem}>
          <Text>Age: </Text>
          <Text style={globalStyles.itemText}>{item.Age}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={globalStyles.title}>Your Submissions List:</Text>
      <FlatList
        data={data.submissions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={globalStyles.submissionsButton}>
        <Button
          onPress={() => navigation.navigate('AddSubmission')}
          title="+"
          color="#252850"
        />
      </View>
    </View>
  );
};

export default SubmissionsList;
