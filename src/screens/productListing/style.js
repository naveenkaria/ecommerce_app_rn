import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: globalStyle['padding-vertical'],
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
  categoryContanier: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: globalStyle['space-top'] + 5,
  },
  scrollHorizontal: {
    flexDirection: 'row',
  },
});
