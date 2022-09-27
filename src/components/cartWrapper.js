import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {color, globalStyle, Icons} from '../consts';

export default function CartWrapper() {
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
        <View style={styles.closeIcon}>
          <Icons
            type={'MaterialCommunityIcons'}
            name={'close'}
            color={color['secondary-color']}
            size={25}
          />
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconButton}>
            <Icons
              type={'Entypo'}
              name={'minus'}
              color={color['secondary-color']}
              size={25}
            />
          </View>
          <Text style={styles.qtyText}>1</Text>
          <View style={styles.iconButton}>
            <Icons
              type={'Entypo'}
              name={'plus'}
              color={color['primary-color']}
              size={25}
            />
          </View>
        </View>
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
  closeIcon: {
    width: '100%',
    alignItems: 'flex-end',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  iconButton: {
    borderWidth: 1,
    borderColor: color['background-color'],
    borderRadius: globalStyle['border-radius'],
  },
  qtyText: {
    fontSize: globalStyle['fontsize-large'] + 1,
    fontFamily: globalStyle['fontfamily-medium'],
    marginHorizontal: globalStyle['margin-horizontal'] + 5,
  },
});
