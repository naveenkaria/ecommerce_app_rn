import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {color, globalStyle} from '../consts';

export default function SearchCategoryWrapper() {
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
    width: 180,
    height: globalStyle['height'] + 150,
    backgroundColor: color['white-color'],
    borderRadius: globalStyle['border-radius'],
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: globalStyle['margin-vertical'] - 5,
    borderWidth: 1,
    borderColor: color['border-color'],
  },
  categoryImage: {
    width: 90,
    height: globalStyle['height'] + 40,
  },
  categoryText: {
    marginHorizontal: globalStyle['margin-horizontal'] - 7,
    fontSize: globalStyle['fontsize-large'] - 3,
    fontFamily: globalStyle['fontfamily-medium'],
    color: color['black-color'],
    top: globalStyle['space-top'],
  },
});
