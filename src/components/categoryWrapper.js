import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {color, globalStyle} from '../consts';

export default function CategoryWrapper() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.categoryImage}
        source={require('../assets/images/mango.png')}
      />
      <Text style={styles.categoryText}>Mango</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: globalStyle['height'] + 30,
    width: 160,
    borderRadius: globalStyle['border-radius'],
    backgroundColor: color['white-color'],
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: globalStyle['margin-vertical'],
    marginBottom: globalStyle['space-bottom'] + 15,
    marginRight: globalStyle['space-right'] + 5,
    borderWidth: 1,
    borderColor: color['border-color'],
  },
  categoryImage: {
    width: 50,
    height: globalStyle['height'],
  },
  categoryText: {
    fontSize: globalStyle['fontsize-large'] - 2,
    fontFamily: globalStyle['fontfamily-bold'],
    left: globalStyle['space-left'],
    color: color['black-color'],
  },
});
