import React, {useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../globalStyles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeToken} from '../redux/action';

const SubmissionsList = ({navigation}) => {
  const data = useSelector(state => state.reducerApp.submissions);
  console.log('data', data);
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
      <View style={{padding: 20, borderRadius: 15}}>
        {item.map((ele, ind) => {
          return (
            <View
              key={ind}
              style={{backgroundColor: 'lightgray', width: '100%', height: 40}}>
              <Text style={{padding: 10}}>
                {ele.label}: {ele.textVal}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };
  // <View style={globalStyles.globalViewItem}>
  //   <View style={globalStyles.viewItem}>
  //     <Text>{item.label} </Text>
  //     <Text style={globalStyles.itemText}>{item.textVal}</Text>
  //   </View>
  //   {/* <View style={globalStyles.viewItem}>
  //   <Text>Surname: </Text>
  //   <Text style={globalStyles.itemText}>{item.Surname}</Text>
  // </View>
  // <View style={globalStyles.viewItem}>
  //   <Text>Age: </Text>
  //   <Text style={globalStyles.itemText}>{item.Age}</Text>
  // </View> */}
  //   {/* <Text>{item.label} </Text>
  //   <Text>{item.textVal} </Text> */}
  // </View>

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={globalStyles.title}>Your Submissions List:</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
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
