import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: globalStyle['padding-vertical'],
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
  checkoutBtn: {
    width: '100%',
    height: globalStyle['height'] + 10,
    borderRadius: globalStyle['border-radius'],
    backgroundColor: color['primary-color'],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: globalStyle['space-bottom'] + 5,
  },
  checkoutBtnTxt: {
    fontSize: globalStyle['fontsize-large'],
    fontFamily: globalStyle['fontfamily-medium'],
    color: color['white-color'],
  },
});
