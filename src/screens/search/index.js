import React from 'react';
import {View, TextInput, ScrollView} from 'react-native';
import {color, Icons} from '../../consts';
import {styles} from './style';

import FavSearchProductWrapper from '../../components/fav_search_product_wrapper';

export default function Search() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icons
            type={'Feather'}
            name={'search'}
            color={color['primary-color']}
            size={20}
          />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>

        <View>
          <FavSearchProductWrapper />
        </View>
      </View>
    </ScrollView>
  );
}
