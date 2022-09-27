import React from 'react';
import {View, Text, StatusBar, useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color, globalStyle, Icons} from '../consts';

import Home from '../screens/home';
import Favorite from '../screens/favorite';
import Search from '../screens/search';
import Cart from '../screens/cart';
import Profile from '../screens/profile';

const tabButton = (focused, type, name) => {
  return (
    <Icons
      type={type}
      name={name}
      color={focused ? color['primary-color'] : color['secondary-color']}
      size={focused ? 35 : 25}
    />
  );
};

const headerLeft = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: globalStyle['fontsize-large'],
          color: color['white-color'],
          fontFamily: 'Montserrat-Bold',
        }}>
        LOGO
      </Text>
    </View>
  );
};

const headerRight = navigation => {
  return (
    <Icons
      type={'Ionicons'}
      name={'notifications-outline'}
      color={color['white-color']}
      size={25}
      onPress={() => navigation.navigate('notification')}
    />
  );
};

const screenOptions = {
  tabBarStyle: {
    height: globalStyle['height'] + 5,
    paddingBottom: globalStyle['space-bottom'],
    ...globalStyle['shadow-effect'],
  },
  tabBarLabelStyle: {
    fontSize: globalStyle['fontsize-medium'] - 3,
    fontFamily: globalStyle['fontfamily-bold'],
  },
  title: null,
  headerLeftContainerStyle: {
    left: globalStyle['space-left'] + 5,
  },
  headerRightContainerStyle: {
    right: globalStyle['space-right'] + 5,
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: color['primary-color'],
    ...globalStyle['shadow-effect'],
  },
};

const Tab = createBottomTabNavigator();

export default function TabBar() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar
        backgroundColor={color['primary-color']}
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
      />

      <Tab.Navigator initialRouteName="home" screenOptions={screenOptions}>
        <Tab.Screen
          name="favorite"
          component={Favorite}
          options={({navigation}) => ({
            headerLeft: () => headerLeft(),
            headerRight: () => headerRight(navigation),
            tabBarLabel: 'Favorite',
            tabBarIcon: ({focused}) =>
              tabButton(focused, 'MaterialIcons', 'favorite-border'),
          })}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={({navigation}) => ({
            headerLeft: () => headerLeft(),
            headerRight: () => headerRight(navigation),
            tabBarLabel: 'Search',
            tabBarIcon: ({focused}) => tabButton(focused, 'Feather', 'search'),
          })}
        />
        <Tab.Screen
          name="home"
          component={Home}
          options={({navigation}) => ({
            headerLeft: () => headerLeft(),
            headerRight: () => headerRight(navigation),
            tabBarLabel: 'Shop',
            tabBarIcon: ({focused}) =>
              tabButton(
                focused,
                'MaterialCommunityIcons',
                'storefront-outline',
              ),
          })}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={({navigation}) => ({
            headerLeft: () => headerLeft(),
            headerRight: () => headerRight(navigation),
            tabBarLabel: 'Cart',
            tabBarIcon: ({focused}) =>
              tabButton(focused, 'MaterialCommunityIcons', 'cart-outline'),
          })}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={({navigation}) => ({
            headerLeft: () => headerLeft(),
            headerRight: () => headerRight(navigation),
            tabBarLabel: 'Account',
            tabBarIcon: ({focused}) =>
              tabButton(focused, 'MaterialCommunityIcons', 'account-outline'),
          })}
        />
      </Tab.Navigator>
    </>
  );
}
