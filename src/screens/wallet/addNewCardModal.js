import React from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {color, globalStyle} from '../../consts';

export default function AddNewCardModal({isVisible, setVisible}) {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={() => setVisible(!isVisible)}
      transparent={true}>
      <Pressable
        style={styles.container}
        onPress={() => setVisible(!isVisible)}>
        <View style={styles.contentContainer}>
          <TextInput placeholder="Card Holder Name" style={styles.input} />
          <View style={styles.divider} />
          <TextInput placeholder="Card Number" style={styles.input} />
          <View style={styles.divider} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <TextInput placeholder="Expiry Date" style={styles.input2} />
            <TextInput placeholder="CVV" style={styles.input2} />
          </View>
          <TouchableOpacity
            onPress={() => setVisible(!isVisible)}
            activeOpacity={0.8}
            style={styles.addBtn}>
            <Text style={styles.addBtnTxt}>Add</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: globalStyle['border-radius'],
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: globalStyle['padding-horizontal'],
    paddingVertical: globalStyle['padding-vertical'],
  },
  input: {
    height: globalStyle['height'] + 5,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: globalStyle['border-radius'] - 2,
    paddingLeft: globalStyle['space-left'] + 5,
    fontSize: globalStyle['fontsize-medium'],
    fontFamily: globalStyle['fontfamily-medium'],
  },
  input2: {
    height: globalStyle['height'] + 5,
    width: '47%',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: globalStyle['border-radius'] - 2,
    paddingLeft: globalStyle['space-left'] + 5,
    fontSize: globalStyle['fontsize-medium'],
    fontFamily: globalStyle['fontfamily-medium'],
  },
  divider: {
    height: 10,
  },
  addBtn: {
    width: '100%',
    height: globalStyle['height'] + 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyle['border-radius'] - 2,
    backgroundColor: color['primary-color'],
    marginTop: globalStyle['space-top'] + 5,
  },
  addBtnTxt: {
    fontSize: globalStyle['fontsize-medium'] + 1,
    fontFamily: globalStyle['fontfamily-medium'],
    color: color['white-color'],
  },
});
