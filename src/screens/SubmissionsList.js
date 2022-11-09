import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyles from '../globalStyles/globalStyles';

const SubmissionsList = ({navigation}) => {
  const data = useSelector(state => state.reducerApp.submissions);

  const renderItem = ({item}) => {
    return (
      <View style={globalStyles.globalViewItem}>
        {item.map((ele, index) => {
          return (
            <View key={index} style={globalStyles.viewItem}>
              <Text style={globalStyles.itemText}>{ele.label}:</Text>
              <Text> {ele.value}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={globalStyles.title}>Query list:</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={globalStyles.submissionsButton}>
        <Button
          onPress={() => navigation.navigate('AddQuery')}
          title="+"
          color="#252850"
        />
      </View>
    </View>
  );
};

export default SubmissionsList;
