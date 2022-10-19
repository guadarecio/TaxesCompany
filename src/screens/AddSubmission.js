import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, View, Button, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {add} from '../redux/action';
import globalStyles from '../globalStyles/globalStyles';

const maxLengthName = 20;
const maxLengthSurname = 40;

const AddSubmission = ({navigation}) => {
  const dispatch = useDispatch('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(0);

  const newSub = {
    id: Date.now(),
    Name: name,
    Surname: surname,
    Age: age,
  };

  const addHandler = () => {
    if (name === '' || surname === '' || age === '') {
      Alert.alert('Please, complete the required fields');
    } else {
      dispatch(add(newSub));
      setName('');
      setSurname('');
      setAge('');

      navigation.navigate('SubmissionsList');
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Add your Submission now!</Text>
        <View style={globalStyles.subContainer}>
          <Text style={globalStyles.text}>Name:</Text>
          <TextInput
            style={globalStyles.textInput}
            onChangeText={a => setName(a)}
            value={name}
            placeholder="Your first name"
            type="text"
            maxLength={maxLengthName}
          />
          <Text style={globalStyles.text}>Surname:</Text>
          <TextInput
            style={globalStyles.textInput}
            onChangeText={a => setSurname(a)}
            value={surname}
            placeholder="Your last name"
            type="text"
            maxLength={maxLengthSurname}
          />
          <Text style={globalStyles.text}>Age:</Text>
          <TextInput
            style={globalStyles.textInput}
            onChangeText={a => setAge(a)}
            value={age}
            placeholder="Your age"
            type="number"
            keyboardType="numeric"
          />
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
      </View>
    </SafeAreaView>
  );
};

export default AddSubmission;
