import {StyleSheet} from 'react-native';
import {globalStyle, color} from '../../consts';

const styles = StyleSheet.create({
  keyboard_avoid_view: {
    flex: 1,
    backgroundColor: color['background-color'],
  },
  main_container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['background-color'],
  },
  container2: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 4,
    width: '100%',
  },
  container2_text: {
    fontSize: globalStyle['fontsize-Xlarge'] + 10,
    color: color['black-color'],
    fontFamily: globalStyle['fontfamily-bold'],
  },
  container3_first_text: {
    fontSize: globalStyle['fontsize-Xlarge'],
    color: color['black-color'],
    fontFamily: globalStyle['fontfamily-medium'],
  },
  container3_secondary_text: {
    fontSize: globalStyle['fontsize-medium'],
    color: color['secondary-color'],
    fontFamily: globalStyle['fontfamily-medium'],
    marginTop: globalStyle['space-top'] + 5,
  },
  input_container: {
    width: '100%',
    height: globalStyle['height'],
    marginVertical: globalStyle['margin-vertical'] + 5,
  },
  input_style: {
    borderBottomColor: color['border-color'],
    borderBottomWidth: 1,
    fontFamily: globalStyle['fontfamily-medium'],
    fontSize: globalStyle['fontsize-medium'],
    color: color['black-color'],
    marginVertical: globalStyle['margin-vertical'] - 5,
  },
  login_button: {
    height: globalStyle['height'] + 10,
    width: '100%',
    borderRadius: globalStyle['border-radius'],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color['primary-color'],
    // ...globalStyle['shadow-effect'],
    elevation: 1,
  },
  login_button_text: {
    fontFamily: globalStyle['fontfamily-medium'],
    fontSize: globalStyle['fontsize-large'],
    color: color['white-color'],
  },
});

export default styles;
