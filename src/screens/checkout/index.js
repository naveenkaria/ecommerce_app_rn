import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import CartWrapper from '../../components/cartWrapper';
import {color, Icons, Permissions} from '../../consts';

export default function Checkout({navigation}) {
  async function addressScreen() {
    const chckLocationPermission =
      await Permissions.requestLocationPermission();
    if (chckLocationPermission) {
      navigation.navigate('address');
    }
    return;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.extraTxt}>Orders</Text>
          <CartWrapper />
          <CartWrapper />
        </View>

        <View>
          <Text style={styles.extraTxt}>Shipping Address</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTxt}>
              Saddar Town, Karachi, Pakistan
            </Text>
            <Icons
              onPress={() => addressScreen()}
              type={'Feather'}
              name={'edit'}
              color={color['primary-color']}
              size={22}
            />
          </View>
        </View>

        <View>
          <Text style={styles.extraTxt}>Apply Voucher</Text>
          <TextInput placeholder="Voucher Code" style={styles.voucherInput} />
          <TouchableOpacity activeOpacity={0.8} style={styles.voucherbtn}>
            <Text style={styles.voucherBtnTxt}>Apply</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.extraTxt}>Payment By</Text>
          <View style={styles.paymentContainer}>
            <Text style={styles.paymentTxt}>Cash on Delivery</Text>
            <Icons
              onPress={() => navigation.navigate('wallet')}
              type={'Feather'}
              name={'edit'}
              color={color['primary-color']}
              size={22}
            />
          </View>
        </View>

        <View>
          <Text style={styles.extraTxt}>Billing Slip</Text>
          <View style={styles.billContainer}>
            <View style={styles.billAmountView}>
              <Text style={styles.billAmountlabel}>Sub Total:</Text>
              <Text style={styles.billAmountPriceTxt}>Rs.30</Text>
            </View>
            <View style={styles.billAmountView}>
              <Text style={styles.billAmountlabel}>Discount:</Text>
              <Text style={styles.billAmountPriceTxt}>0%</Text>
            </View>
            <View style={styles.billAmountView}>
              <Text style={styles.billAmountlabel}>Shipping Charges:</Text>
              <Text style={styles.billAmountPriceTxt}>Rs.10</Text>
            </View>
            <View style={styles.billAmountView}>
              <Text style={styles.billAmountlabel}>Total Amount:</Text>
              <Text style={styles.billAmountPriceTxt}>Rs.40</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.orderbtn}>
            <Text style={styles.orderBtnTxt}>Proceed to Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
