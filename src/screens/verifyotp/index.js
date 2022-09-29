import React, {useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

export default function VerifyOtp({navigation}) {
  const [firstOtpTxt, setfirstOtpTxt] = useState('');
  const [secondOtpTxt, setsecondOtpTxt] = useState('');
  const [thirdOtpTxt, setthirdOtpTxt] = useState('');
  const [fourthOtpTxt, setfourthOtpTxt] = useState('');
  const firstBtnRef = useRef();
  const secondBtnRef = useRef();
  const thirdBtnRef = useRef();
  const fourthBtnRef = useRef();
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
            <TextInput
              ref={firstBtnRef}
              placeholder="0"
              style={styles.input_style}
              maxLength={1}
              returnKeyType={'next'}
              onChangeText={text => {
                setfirstOtpTxt(text);
                firstOtpTxt.length === 0 &&
                  text &&
                  secondBtnRef.current.focus();
              }}
              onSubmitEditing={() =>
                firstOtpTxt.length > 0 && secondBtnRef.current.focus()
              }
            />
            <TextInput
              ref={secondBtnRef}
              placeholder="0"
              maxLength={1}
              style={styles.input_style}
              returnKeyType={'next'}
              onChangeText={text => {
                setfirstOtpTxt(text);
                secondOtpTxt.length === 0 &&
                  text &&
                  thirdBtnRef.current.focus();
              }}
              onSubmitEditing={() =>
                secondOtpTxt.length > 0 && thirdBtnRef.current.focus()
              }
              onKeyPress={({nativeEvent}) => {
                nativeEvent.key === 'Backspace' && firstBtnRef.current.focus();
              }}
            />
            <TextInput
              ref={thirdBtnRef}
              placeholder="0"
              maxLength={1}
              style={styles.input_style}
              returnKeyType={'next'}
              onChangeText={text => {
                setfirstOtpTxt(text);
                thirdOtpTxt.length === 0 &&
                  text &&
                  fourthBtnRef.current.focus();
              }}
              onSubmitEditing={() =>
                thirdOtpTxt.length > 0 && fourthBtnRef.current.focus()
              }
              onKeyPress={({nativeEvent}) => {
                nativeEvent.key === 'Backspace' && secondBtnRef.current.focus();
              }}
            />
            <TextInput
              ref={fourthBtnRef}
              placeholder="0"
              maxLength={1}
              style={styles.input_style}
              onKeyPress={({nativeEvent}) => {
                nativeEvent.key === 'Backspace' && thirdBtnRef.current.focus();
              }}
            />
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
