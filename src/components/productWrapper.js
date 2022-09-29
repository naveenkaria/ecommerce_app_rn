import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {color, globalStyle, Icons} from '../consts';

export default function ProductWrapper() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.productImage}
        source={require('../assets/images/mango.png')}
      />
      <View style={{width: '100%'}}>
        <Text style={styles.productTitle}>Mango</Text>
        <Text style={styles.productDetail}>7pcs, Priceg</Text>
      </View>
      <View style={styles.price_add_button_container}>
        <Text style={styles.priceText}>Rs.100</Text>
        <Icons
          type={'FontAwesome'}
          name={'plus-square'}
          size={33}
          color={color['primary-color']}
        />
      </View>
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
    marginVertical: globalStyle['margin-vertical'],
    marginRight: globalStyle['space-right'] + 5,
    borderWidth: 1,
    borderColor: color['border-color'],
  },
  productImage: {
    width: 90,
    height: globalStyle['height'] + 40,
    marginVertical: globalStyle['margin-vertical'] - 7,
  },
  productTitle: {
    textAlign: 'left',
    fontSize: globalStyle['fontsize-medium'] + 3,
    fontFamily: globalStyle['fontfamily-bold'],
    marginVertical: globalStyle['margin-vertical'] - 7,
    color: color['black-color'],
  },
  productDetail: {
    textAlign: 'left',
    fontSize: globalStyle['fontsize-medium'] - 1,
    fontFamily: globalStyle['fontfamily-medium'],
  },
  price_add_button_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: globalStyle['margin-vertical'] - 7,
  },
  priceText: {
    textAlign: 'left',
    fontSize: globalStyle['fontsize-large'] - 2,
    fontFamily: globalStyle['fontfamily-bold'],
    color: color['black-color'],
  },
});
