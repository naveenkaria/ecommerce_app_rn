import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: globalStyle['padding-vertical'],
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
  notificationContainer: {
    height: globalStyle.height + 80,
    width: '100%',
    borderRadius: globalStyle['border-radius'],
    marginBottom: globalStyle['space-bottom'] + 5,
    elevation: 1,
  },
  notificationImage: {
    height: globalStyle.height + 80,
    width: '100%',
    borderRadius: globalStyle['border-radius'],
  },
});
