import React from 'react';
import {
  Text
} from 'react-native';

const Demo = ({ current, notCurrent }) => {
  return <Text>This component can be used both here ({current}) and {notCurrent}</Text>
}

export default Demo;
