import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './style';

export default function Profile() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Phone No" style={styles.input} />

      <Text style={styles.versionTxt}>E-Commerce v0.1</Text>
    </View>
  );
}
