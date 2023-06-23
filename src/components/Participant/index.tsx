import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import {styles} from './styles';

const Participant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
          Leonardo Geja
      </Text>
      <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>
    </View>
  );
}

export default Participant