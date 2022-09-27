import {StyleSheet} from 'react-native';
import {color, globalStyle} from '../../consts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: globalStyle['padding-vertical'],
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
  bannerContainer: {
    height: globalStyle.height + 80,
    width: '100%',
    borderRadius: globalStyle['border-radius'],
    ...globalStyle['shadow-effect'],
    marginBottom: globalStyle['space-bottom'] + 5,
  },
  bannerImage: {
    height: globalStyle.height + 80,
    width: '100%',
    borderRadius: globalStyle['border-radius'],
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    marginVertical: globalStyle['margin-vertical'],
  },
  offerHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: globalStyle['space-bottom'],
  },
  offerHeading: {
    fontSize: globalStyle['fontsize-large'] + 2,
    fontFamily: globalStyle['fontfamily-bold'],
    color: color['black-color'],
  },
  offerHeadingLink: {
    fontSize: globalStyle['fontsize-medium'] + 2,
    fontFamily: globalStyle['fontfamily-medium'],
    color: color['primary-color'],
    textDecorationLine: 'underline',
  },
  divider: {
    height: 10,
  },
  scrollHorizontal: {
    flexDirection: 'row',
  },
});
