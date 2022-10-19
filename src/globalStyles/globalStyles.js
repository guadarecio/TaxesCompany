import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    margin: 40,
    marginTop: 30,
  },
  title: {
    padding: 5,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#252850',
  },
  subContainer: {
    marginTop: 40,
  },
  text: {
    marginBottom: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#252850',
  },

  textInput: {
    backgroundColor: '#7FFFD4',
    padding: 20,
    marginBottom: 20,
    borderRadius: 30,
  },

  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },

  buttonSubcontainer: {
    margin: 15,
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: '#f6a700',
    borderRadius: 30,
  },

  globalViewItem: {
    margin: 15,
    backgroundColor: '#7FFFD4',
    padding: 20,
    marginBottom: 5,
    borderRadius: 40,
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemText: {
    textAlign: 'center',
    marginBottom: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#252850',
  },

  submissionsButton: {
    backgroundColor: '#f6a700',
    position: 'absolute',
    bottom: 50,
    right: 25,
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default globalStyles;
