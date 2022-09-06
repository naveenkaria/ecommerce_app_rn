import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

export default function VerifyOtp({navigation}) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.keyboard_avoid_view}>
      <View style={styles.main_container}>
        <View style={styles.container2}>
          <Text style={styles.container2_text}>Logo</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.container3_first_text}>Verification</Text>
          <Text style={styles.container3_secondary_text}>
            Enter your otp code
          </Text>
          <View style={styles.input_container}>
            <TextInput placeholder="0" style={styles.input_style} />
            <TextInput placeholder="0" style={styles.input_style} />
            <TextInput placeholder="0" style={styles.input_style} />
            <TextInput placeholder="0" style={styles.input_style} />
            <TextInput placeholder="0" style={styles.input_style} />
            <TextInput placeholder="0" style={styles.input_style} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('changepassword')}
            activeOpacity={0.9}
            style={styles.login_button}>
            <Text style={styles.login_button_text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
