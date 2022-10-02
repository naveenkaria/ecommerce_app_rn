import React, {useEffect} from 'react';
import {View} from 'react-native';
import MapWrapper from '../../components/mapWrapper';
import Geolocation from '@react-native-community/geolocation';
import {styles} from './style';

export default function Address() {
  useEffect(() => {
    const getPosition = () => {
      Geolocation.getCurrentPosition(
        pos => {
          console.log(JSON.stringify(pos));
        },
        e => console.log(e.message),
      );
      getPosition;
      return () => getPosition;
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapWrapper />
    </View>
  );
}
