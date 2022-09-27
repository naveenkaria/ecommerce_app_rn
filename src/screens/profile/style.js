import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: globalStyle['padding-vertical'],
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
  input: {
    width: '100%',
    height: globalStyle['height'] + 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: globalStyle['space-top'] + 5,
    fontSize: globalStyle['fontsize-medium'] + 1,
    fontFamily: globalStyle['fontfamily-medium'],
    marginVertical: 3,
  },
  versionTxt: {
    position: 'absolute',
    bottom: globalStyle['space-bottom'],
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: globalStyle['fontsize-medium'] + 1,
    fontFamily: globalStyle['fontfamily-medium'],
  },
});
