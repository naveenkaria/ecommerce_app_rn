import {PermissionsAndroid, Alert} from 'react-native';

export const requestLocationPermission = async () => {
  const chckLocationPermission = PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (chckLocationPermission !== PermissionsAndroid.RESULTS.GRANTED) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Cool Location App required Location permission',
          'We required Location permission in order to get device location Please grant us.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
            onDismiss: () =>
              console.log(
                'This alert was dismissed by tapping outside of the alert dialog.',
              ),
          },
        );
      }
    } catch (err) {
      console.log('---location error:', err);
    }
    return chckLocationPermission;
  }
};
