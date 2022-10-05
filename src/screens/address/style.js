import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color['background-color'],
    paddingHorizontal: globalStyle['padding-horizontal'],
  },
  textInputContainer: {
    top: globalStyle['space-top'] + 5,
    zIndex: 999,
  },
  textInput: {
    height: globalStyle['height'] + 5,
    fontSize: globalStyle['fontsize-medium'] + 2,
    fontFamily: globalStyle['fontfamily-medium'],
    elevation: 1,
  },
  address_button: {
    height: globalStyle['height'] + 10,
    width: '100%',
    borderRadius: globalStyle['border-radius'],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color['primary-color'],
    bottom: globalStyle['space-bottom'] + 5,
    // ...globalStyle['shadow-effect'],
  },
  address_button_text: {
    fontFamily: globalStyle['fontfamily-medium'],
    fontSize: globalStyle['fontsize-large'],
    color: color['white-color'],
  },
});
