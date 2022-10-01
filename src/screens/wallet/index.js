import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import WalletCardWrapper from '../../components/walletCardWrapper';
import {styles} from './style';

export default function Wallet() {
  return (
    <View style={styles.container}>
      <View style={styles.alignmentContainer}>
        <Text style={styles.extraTxt}>Available Cards</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.addCardBtn}>
          <Text style={styles.addCardBtnTxt}>Add New</Text>
        </TouchableOpacity>
      </View>
      <View>
        <WalletCardWrapper />
      </View>
    </View>
  );
}
