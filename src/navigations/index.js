import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Login from '../screens/login';
import Signup from '../screens/signup';
import ForgotPassword from '../screens/forgotpassword';
import ChangePassword from '../screens/changepassword';
import VerifyOtp from '../screens/verifyotp';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: null,
            headerShadowVisible: false,
            headerLeft: () => (
              <AntDesign
                onPress={() => navigation.goBack()}
                name="arrowleft"
                size={25}
                color={'black'}
              />
            ),
          })}
          name="signup"
          component={Signup}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: null,
            headerShadowVisible: false,
            headerLeft: () => (
              <AntDesign
                onPress={() => navigation.goBack()}
                name="arrowleft"
                size={25}
                color={'black'}
              />
            ),
          })}
          name="forgotpassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: null,
            headerShadowVisible: false,
            headerLeft: () => (
              <AntDesign
                onPress={() => navigation.goBack()}
                name="arrowleft"
                size={25}
                color={'black'}
              />
            ),
          })}
          name="verifyotp"
          component={VerifyOtp}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: null,
            headerShadowVisible: false,
            headerLeft: () => (
              <AntDesign
                onPress={() => navigation.goBack()}
                name="arrowleft"
                size={25}
                color={'black'}
              />
            ),
          })}
          name="changepassword"
          component={ChangePassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
