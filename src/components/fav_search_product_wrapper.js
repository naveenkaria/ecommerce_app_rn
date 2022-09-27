import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {color, globalStyle, Icons} from '../consts';

export default function FavSearchProductWrapper() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={require('../assets/images/mango.png')}
        />
      </View>
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>Mango</Text>
          <Text style={styles.categoryText}>category</Text>
        </View>
        <Text style={styles.priceText}>Rs.20</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Icons
          type={'MaterialCommunityIcons'}
          name={'heart-outline'}
          color={color['primary-color']}
          size={30}
        />
        <View style={styles.divider} />
        <TouchableOpacity activeOpacity={0.9} style={styles.addToCart}>
          <Text style={styles.addToCart_text}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: globalStyle['height'] + 70,
    width: '100%',
    borderRadius: globalStyle['border-radius'],
    backgroundColor: color['white-color'],
    marginVertical: globalStyle['margin-vertical'] - 5,
    paddingHorizontal: globalStyle['padding-horizontal'],
    paddingVertical: globalStyle['padding-vertical'],
    borderWidth: 1,
    borderColor: color['border-color'],
  },
  imageContainer: {
    height: '80%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: globalStyle['height'] + 10,
    width: 60,
  },
  detailContainer: {
    height: '100%',
    width: '45%',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: globalStyle['fontsize-large'],
    fontFamily: globalStyle['fontfamily-medium'],
    color: color['black-color'],
  },
  categoryText: {
    fontSize: globalStyle['fontsize-medium'],
    fontFamily: globalStyle['fontfamily-medium'],
  },
  priceText: {
    fontSize: globalStyle['fontsize-large'],
    fontFamily: globalStyle['fontfamily-bold'],
    color: color['black-color'],
  },
  buttonContainer: {
    height: '100%',
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    borderWidth: 0.6,
    borderColor: 'lightgray',
  },
  addToCart: {
    height: globalStyle['height'] - 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyle['border-radius'] - 2,
    backgroundColor: color['primary-color'],
  },
  addToCart_text: {
    fontSize: globalStyle['fontsize-medium'] - 1,
    fontFamily: globalStyle['fontfamily-bold'],
    color: color['background-color'],
  },
});
