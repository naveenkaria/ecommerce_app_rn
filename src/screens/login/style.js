import {StyleSheet} from 'react-native';
import {globalStyle, color} from '../../consts';

const styles = StyleSheet.create({
  keyboard_avoid_view: {
    flex: 1,
  },
  main_container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: globalStyle['padding-horizontal'],
    backgroundColor: color['white-color'],
  },
  container2: {
    flex: 1.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 3,
    width: '100%',
  },
  container4: {
    flex: 2,
    width: '100%',
  },
  container2_text: {
    fontSize: globalStyle['fontsize-Xlarge'] + 10,
    color: color['black-color'],
    fontFamily: 'Montserrat-Bold',
  },
  container3_first_text: {
    fontSize: globalStyle['fontsize-Xlarge'],
    color: color['black-color'],
    fontFamily: 'Montserrat-Medium',
  },
  container3_secondary_text: {
    fontSize: globalStyle['fontsize-medium'],
    color: color['secondary-color'],
    fontFamily: 'Montserrat-Medium',
    marginTop: globalStyle['space-top'] + 5,
  },
  input_container: {
    width: '100%',
    height: 50,
    marginVertical: globalStyle['margin-vertical'] + 5,
  },
  input_style: {
    borderBottomColor: color['border-color'],
    borderBottomWidth: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: globalStyle['fontsize-medium'],
    color: color['black-color'],
    marginVertical: 5,
  },
  forgot_password_text: {
    textAlign: 'right',
    fontSize: globalStyle['fontsize-regular'],
    fontFamily: 'Montserrat-Regular',
    color: color['black-color'],
  },
  login_button: {
    height: 60,
    width: '100%',
    borderRadius: globalStyle['border-radius'],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color['primary-color'],
  },
  login_button_text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: globalStyle['fontsize-large'],
    color: color['white-color'],
  },
  signup_text: {
    textAlign: 'center',
    marginTop: globalStyle['space-top'] + 15,
    fontSize: globalStyle['fontsize-regular'],
    fontFamily: 'Montserrat-Medium',
  },
  signup_link_text: {
    color: color['primary-color'],
    fontFamily: 'Montserrat-Medium',
  },
});

export default styles;
