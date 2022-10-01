import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: globalStyle['padding-vertical'],
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
  alignmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: globalStyle['margin-vertical'],
  },
  extraTxt: {
    fontSize: globalStyle['fontsize-large'],
    fontFamily: globalStyle['fontfamily-medium'],
    color: color['black-color'],
  },
  addCardBtn: {
    height: globalStyle['height'] - 15,
    width: 90,
    backgroundColor: color['primary-color'],
    borderRadius: globalStyle['border-radius'] - 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardBtnTxt: {
    fontSize: globalStyle['fontsize-medium'] - 1,
    fontFamily: globalStyle['fontfamily-medium'],
    color: color['white-color'],
    elevation: 1,
  },
});
