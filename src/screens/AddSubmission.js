import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  View,
  Button,
} from 'react-native';

const AddSubmission = ({navigation}) => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [age, setAge] = useState();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Name:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={a => setName(a)}
          value={name}
          placeholder="Your first name"
          type="text"
          maxLength={20}
        />
        <Text style={styles.text}>Surname:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={a => setSurname(a)}
          value={surname}
          placeholder="Your last name"
          type="text"
          maxLength={40}
        />
        <Text style={styles.text}>Age:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={a => setAge(a)}
          value={age}
          placeholder="Your age"
          type="number"
        />
        <Button
          onPress={() => navigation.navigate('SubmissionsList')}
          title="Add"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
    marginTop: 100,
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
  },

  textInput: {
    backgroundColor: '#7FFFD4',
    color: 'white',
    padding: 20,
    marginBottom: 50,
    borderRadius: 30,
  },
});

export default AddSubmission;
