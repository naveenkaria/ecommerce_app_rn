import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CartWrapper from '../../components/cartWrapper';
import {styles} from './style';

export default function Cart() {
  return (
    <View style={styles.container}>
      <View>
        <CartWrapper />
      </View>

      <TouchableOpacity activeOpacity={0.9} style={styles.checkoutBtn}>
        <Text style={styles.checkoutBtnTxt}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
