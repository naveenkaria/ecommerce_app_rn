import React from 'react';
import {View, Text} from 'react-native';
import FavSearchProductWrapper from '../../components/fav_search_product_wrapper';
import {styles} from './style';

export default function Favorite() {
  return (
    <View style={styles.container}>
      <FavSearchProductWrapper />
    </View>
  );
}
