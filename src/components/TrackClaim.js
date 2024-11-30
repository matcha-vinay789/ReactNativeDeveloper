// /components/TrackClaim.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const TrackClaim = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.redSection} />

      <View style={styles.row}>
        
        <View style={styles.iconContainer}>
          <View style={styles.iconCircleTwo}>
            <Icon name="format-list-bulleted" size={30} color="#fff" /> {/* Checklist icon */}
          </View>
        </View>

       
        <View style={styles.textContainer}>
          <Text style={styles.title}>Track Your Claim</Text>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text.
          </Text>
        </View>

       
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Icon name="arrow-forward" size={30} color="#fff" /> {/* Arrow icon */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d4675', 
    padding: theme.spacing.large, 
    borderRadius: 20, 
    marginBottom: theme.spacing.large, 
    borderLeftWidth: 5, 
    borderLeftColor: '#ff4c4c', 
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  textContainer: {
    flex: 1, 
    marginHorizontal: theme.spacing.medium, 
  },
  title: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.white, 
    fontWeight: 'bold', 
  },
  text: {
    color: theme.colors.lightColor, 
    fontSize: theme.fontSizes.small, 
    marginTop: theme.spacing.small, 
    color: theme.colors.white,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#71a1c9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleTwo: {
    width: 55,
    height: 55,
    borderRadius: 25,
    backgroundColor: '#295d91', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TrackClaim;
