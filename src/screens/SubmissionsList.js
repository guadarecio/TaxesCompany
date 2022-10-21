import React, {useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../globalStyles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeToken} from '../redux/action';

const SubmissionsList = ({navigation}) => {
  const data = useSelector(state => state.reducerApp);
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      dispatch(removeToken());
    } catch (e) {
      console.log('remove');
    }
    console.log('Done.');
  };

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
      <View style={{paddingVertical: 30}}>
        <Button onPress={() => logOut()} title="Log out" color="#252850" />
      </View>
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
