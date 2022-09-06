import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

export default function Login({navigation}) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.keyboard_avoid_view}>
      <View style={styles.main_container}>
        <View style={styles.container2}>
          <Text style={styles.container2_text}>Logo</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.container3_first_text}>Loging</Text>
          <Text style={styles.container3_secondary_text}>
            Enter your email and password
          </Text>
          <View style={styles.input_container}>
            <TextInput placeholder="Email Address" style={styles.input_style} />
          </View>
          <View style={styles.input_container}>
            <TextInput placeholder="Password" style={styles.input_style} />
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('forgotpassword')}>
            <Text style={styles.forgot_password_text}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity activeOpacity={0.8} style={styles.login_button}>
            <Text style={styles.login_button_text}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.signup_text}>
            Don't have account?{' '}
            <TouchableOpacity
              onPress={() => navigation.navigate('signup')}
              activeOpacity={0.9}>
              <Text style={styles.signup_link_text}> Signup</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
