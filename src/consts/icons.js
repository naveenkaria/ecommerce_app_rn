import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Icons({type, name, color, size, onPress, style}) {
  switch (type) {
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          onPress={onPress}
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          onPress={onPress}
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5
          onPress={onPress}
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    case 'Entypo':
      return <Entypo onPress={onPress} name={name} color={color} size={size} />;
    case 'MaterialIcons':
      return (
        <MaterialIcons
          onPress={onPress}
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    case 'Feather':
      return (
        <Feather
          onPress={onPress}
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    case 'AntDesign':
      return (
        <AntDesign
          onPress={onPress}
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          onPress={onPress}
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    default:
      return null;
  }
}
