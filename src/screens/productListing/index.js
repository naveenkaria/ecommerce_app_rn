import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './style';

import ProductWrapper from '../../components/productWrapper';
import SearchCategoryWrapper from '../../components/searchCategoryWrapper';

export default function ProductListing() {
  return (
    <View style={styles.container}>
      {/* category listing */}
      <View style={styles.categoryContanier}>
        <SearchCategoryWrapper />
        <SearchCategoryWrapper />
      </View>
      {/* product listing */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollHorizontal}>
        <ProductWrapper />
        <ProductWrapper />
      </ScrollView>
    </View>
  );
}
