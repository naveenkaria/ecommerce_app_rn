import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';

export default function Notification() {
  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
        <Image
          resizeMode="cover"
          style={styles.notificationImage}
          source={require('../../assets/images/banner.jpg')}
        />
      </View>
    </View>
  );
}
