import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../redux/action';
import globalStyles from '../globalStyles/globalStyles';

const maxLengthName = 20;
const maxLengthSurname = 40;

const AddSubmission = ({navigation}) => {
  const data = useSelector(state => state.reducerApp.formFields);

  const [inputFields, setInputFields] = useState([]);
  const dispatch = useDispatch('');

  const changeHandler = (index, event) => {
    data[index].value = event;

    setInputFields(data);
  };

  const addHandler = () => {
    dispatch(add(inputFields));
    navigation.navigate('QueryList');
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Add your Query here!</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={globalStyles.subContainer}>
          {data.map((input, index) => {
            return (
              <>
                <Text style={globalStyles.text}>{input.label}</Text>

                <TextInput
                  key={index}
                  style={globalStyles.textInput}
                  onChangeText={val => changeHandler(index, val)}
                  value={inputFields}
                  placeholder={input.placeholder}
                  maxLength={input.maxLength}
                />
              </>
            );
          })}
        </ScrollView>
        <View style={globalStyles.buttonContainer}>
          <View style={globalStyles.buttonSubcontainer}>
            <Button
              color="black"
              onPress={() => {
                navigation.navigate('SubmissionsList');
              }}
              title={'Cancel'}
            />
          </View>
          <View style={globalStyles.buttonSubcontainer}>
            <Button color="black" onPress={addHandler} title={'Add'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddSubmission;
