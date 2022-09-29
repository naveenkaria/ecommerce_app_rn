import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {color, globalStyle, Icons} from '../consts';

import Login from '../screens/login';
import Signup from '../screens/signup';
import ForgotPassword from '../screens/forgotpassword';
import ChangePassword from '../screens/changepassword';
import VerifyOtp from '../screens/verifyotp';
import Notification from '../screens/notification';
import ProductListing from '../screens/productListing';
import TabBar from './tabBar';

const backButton = (navigation, specificColor) => (
  <View
    style={{marginRight: specificColor === 'white' ? 10 : 0, marginLeft: -5}}>
    <Icons
      type={'AntDesign'}
      onPress={() => navigation.goBack()}
      name="arrowleft"
      size={25}
      color={
        specificColor === 'white' ? color['white-color'] : color['black-color']
      }
    />
  </View>
);

const screenOptions = navigation => ({
  headerStyle: {backgroundColor: color['background-color']},
  title: null,
  headerShadowVisible: false,
  headerLeft: () => backButton(navigation),
});

const optionsScreen = (title, navigation) => ({
  title: title,
  headerTitleStyle: {
    fontFamily: globalStyle['fontfamily-bold'],
    color: color['white-color'],
  },
  headerStyle: {
    backgroundColor: color['primary-color'],
    ...globalStyle['shadow-effect'],
  },
  headerLeft: () => backButton(navigation, 'white'),
});

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => screenOptions(navigation)}>
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="forgotpassword" component={ForgotPassword} />
        <Stack.Screen name="verifyotp" component={VerifyOtp} />
        <Stack.Screen name="changepassword" component={ChangePassword} />
        <Stack.Screen
          options={({navigation}) => optionsScreen('Notification', navigation)}
          name="notification"
          component={Notification}
        />
        <Stack.Screen
          options={({route, navigation}) =>
            optionsScreen(route.params.title, navigation)
          }
          name="productlisting"
          component={ProductListing}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="tab_bar"
          component={TabBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
