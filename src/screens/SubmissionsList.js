import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../globalStyles/globalStyles';

const SubmissionsList = ({navigation}) => {
  const data = useSelector(state => state.reducerApp.submissions);

  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <View style={globalStyles.globalViewItem}>
        {item.map((ele, ind) => {
          return (
            <View key={ind} style={globalStyles.viewItem}>
              <Text style={globalStyles.itemText}>{ele.label}:</Text>
              <Text> {ele.textVal}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={globalStyles.title}>Your Submissions List:</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
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
