import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './style';

import ProductWrapper from '../../components/productWrapper';
import CategoryWrapper from '../../components/categoryWrapper';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            resizeMode="cover"
            style={styles.bannerImage}
            source={require('../../assets/images/banner.jpg')}
          />
        </View>
        <View style={styles.contentContainer}>
          {/* Category */}
          <View style={styles.offerHeadingContainer}>
            <Text style={styles.offerHeading}>Categories</Text>
            <Text style={styles.offerHeadingLink}>See all</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollHorizontal}>
            <CategoryWrapper />
            <CategoryWrapper />
            <CategoryWrapper />
          </ScrollView>
          {/* Category */}
          {/* Exclusive Offer */}
          <View style={styles.offerHeadingContainer}>
            <Text style={styles.offerHeading}>Exclusive Offer</Text>
            <Text style={styles.offerHeadingLink}>See all</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scrollHorizontal}>
            <ProductWrapper />
            <ProductWrapper />
            <ProductWrapper />
            <ProductWrapper />
          </ScrollView>
          <View style={styles.divider} />
          {/* Best Selling */}
          <View style={styles.offerHeadingContainer}>
            <Text style={styles.offerHeading}>Best Selling</Text>
            <Text style={styles.offerHeadingLink}>See all</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scrollHorizontal}>
            <ProductWrapper />
            <ProductWrapper />
            <ProductWrapper />
            <ProductWrapper />
          </ScrollView>
          <View style={styles.divider} />
          {/* Groceries */}
          <View style={styles.offerHeadingContainer}>
            <Text style={styles.offerHeading}>Groceries</Text>
            <Text style={styles.offerHeadingLink}>See all</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scrollHorizontal}>
            <ProductWrapper />
            <ProductWrapper />
            <ProductWrapper />
            <ProductWrapper />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
