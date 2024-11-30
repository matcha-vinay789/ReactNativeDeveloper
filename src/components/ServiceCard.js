import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../styles/theme';

const ServiceCard = ({ iconName, iconLibrary = 'MaterialIcons', text }) => {
  // Dynamically select the icon library
  const IconComponent =
    iconLibrary === 'Ionicons'
      ? Ionicons
      : iconLibrary === 'MaterialCommunityIcons'
      ? MaterialCommunityIcons
      : MaterialIcons;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.content}>
      <View style={styles.iconContainer}>
        <IconComponent name={iconName} size={30} color="#71a1c9" />
      </View>
      <Text style={styles.cardText}>{text}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '30%', 
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#ebf3fa', 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#bbdefc', 
    padding: 12, 
  },
  content: {
    flexDirection: 'column', 
    alignItems: 'flex-start', 
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#bbdefc', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    marginTop: 8,
    textAlign: 'start',
    fontSize: theme.fontSizes.medium,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default ServiceCard;
