import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  safearea: {
   
  },
  inputview: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  filterview: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  filtericon: {
    width: 20,
    height: 20,
  },
  card: {
    backgroundColor: '#fff',
    height: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  textview: {
    flex: 1,
    paddingLeft: 30,
  },
  name: {fontSize: 18, fontWeight: 'bold'},
  email: {fontSize: 14, fontWeight: 'medium'},
  spinnerview: {flex: 1},
  spinner: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  no: {width: 70, height: 70},
  ListEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalOption: {
    width: '100%',
    padding: 5,
    backgroundColor: '#441752',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  modalOptionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FF5733',
  },
});

export default style;
