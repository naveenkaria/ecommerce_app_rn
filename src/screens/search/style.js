import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: globalStyle['padding-vertical'],
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color['white-color'],
    height: globalStyle['height'],
    borderWidth: 1,
    borderColor: color['border-color'],
    paddingHorizontal: globalStyle['padding-horizontal'] - 3,
    borderRadius: globalStyle['border-radius'],
    // ...globalStyle['shadow-effect'],
  },
  searchInput: {
    width: '100%',
    height: '100%',
    fontSize: globalStyle['fontsize-large'] - 3,
    fontFamily: globalStyle['fontfamily-medium'],
  },
});
