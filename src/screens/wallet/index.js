import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import WalletCardWrapper from '../../components/walletCardWrapper';
import AddNewCardModal from './addNewCardModal';
import {styles} from './style';

export default function Wallet() {
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.alignmentContainer}>
        <Text style={styles.extraTxt}>Available Cards</Text>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          activeOpacity={0.8}
          style={styles.addCardBtn}>
          <Text style={styles.addCardBtnTxt}>Add New</Text>
        </TouchableOpacity>
      </View>
      <View>
        <WalletCardWrapper />
      </View>
      <View>
        <AddNewCardModal isVisible={isVisible} setVisible={setVisible} />
      </View>
    </View>
  );
}
