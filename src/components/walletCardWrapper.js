import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {globalStyle, color} from '../consts';

export default function WalletCardWrapper() {
  return (
    <View style={styles.container}>
      <Text style={styles.cardNumTxt}>555 .........</Text>
      <Image
        resizeMode="contain"
        style={{width: 50, height: 50}}
        source={require('../assets/images/visacard.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: globalStyle['height'],
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: globalStyle['padding-horizontal'],
    borderRadius: globalStyle['border-radius'] - 2,
    backgroundColor: color['white-color'],
    marginVertical: globalStyle['margin-vertical'],
    elevation: 1,
  },
  cardNumTxt: {
    fontSize: globalStyle['fontsize-medium'],
    fontFamily: globalStyle['fontfamily-medium'],
    color: color['black-color'],
  },
});
