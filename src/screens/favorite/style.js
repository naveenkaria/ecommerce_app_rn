import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: globalStyle['padding-vertical'],
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
});
