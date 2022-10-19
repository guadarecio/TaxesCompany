import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput} from 'react-native';
import data from '../data/data.json';

const AddSubmission = () => {
  const form = data.inputFields;
  console.log(form);

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [age, setAge] = useState();

  return (
    <SafeAreaView>
      <Text>Name:</Text>

      <TextInput
        onChangeText={a => setName(a)}
        value={name}
        placeholder="Your first name"
        type="text"
        maxLength={20}
      />
      <Text>Surname:</Text>

      <TextInput
        onChangeText={a => setSurname(a)}
        value={surname}
        placeholder="Your last name"
        type="text"
        maxLength={40}
      />
      <Text>Age:</Text>

      <TextInput
        onChangeText={a => setAge(a)}
        value={age}
        placeholder="Your age"
        type="number"
      />
    </SafeAreaView>
  );
};

export default AddSubmission;
