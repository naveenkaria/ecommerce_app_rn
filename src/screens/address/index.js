import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '../../config';
import MapWrapper from '../../components/mapWrapper';
import {styles} from './style';

export default function Address({navigation}) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        autoFocus={false}
        returnKeyType={'search'}
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
          console.log('hi');
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
        }}
        onFail={error => console.error(error)}
      />
      <MapWrapper />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
        style={styles.address_button}>
        <Text style={styles.address_button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
