import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

export default function Signup({navigation}) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.keyboard_avoid_view}>
      <ScrollView>
        <View style={styles.main_container}>
          <View style={styles.container2}>
            <Text style={styles.container2_text}>Logo</Text>
          </View>
          <View style={styles.container3}>
            <Text style={styles.container3_first_text}>Sign Up</Text>
            <Text style={styles.container3_secondary_text}>
              Enter your credentials to continue
            </Text>
            <View style={styles.input_container}>
              <TextInput placeholder="Username" style={styles.input_style} />
            </View>
            <View style={styles.input_container}>
              <TextInput
                placeholder="Email Address"
                style={styles.input_style}
              />
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder="Mobile No" style={styles.input_style} />
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder="Password" style={styles.input_style} />
            </View>
            <View style={styles.input_container}>
              <TextInput
                placeholder="Confirm Password"
                style={styles.input_style}
              />
            </View>
            <Text style={styles.terms_policy_text}>
              By continuing you agree to our
              <Text style={styles.terms_policy_link_text}>
                {' '}
                Terms of Service{' '}
              </Text>
              and{' '}
              <Text style={styles.terms_policy_link_text}>Privacy Policy</Text>
            </Text>
          </View>
          <View style={styles.container4}>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              activeOpacity={0.8}
              style={styles.signup_button}>
              <Text style={styles.signup_button_text}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
              <Text style={styles.signup_text}>Already have account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                activeOpacity={0.9}>
                <Text style={styles.signup_link_text}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
