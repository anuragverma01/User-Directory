import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

  iconview: {
    flex: 1,
  },
  icon: {
    left: 10,
    top: 10,
  },
  personal: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#f00',
  },
  name: {
    marginTop: 20,
  },
  parent: {
    backgroundColor: '#fff',
    padding: 20,
  },
  shadow: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  info: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default style;
