import React, { useState } from 'react';
import { View, StyleSheet,  } from 'react-native';
import InputField from './InputField';
import Button from './Button';
import theme from '../styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const ClaimForm = () => {
  const [claimType, setClaimType] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [caseReference, setCaseReference] = useState('');

  return (
    <View style={styles.card}>
      <InputField
        placeholder="Claim Type"
        value={claimType}
        onChangeText={setClaimType}
        rightIcon={<Icon name="keyboard-arrow-down" size={24} color="#333" />}
      />
      <InputField
        placeholder="National ID / IQAMA No."
        value={nationalId}
        onChangeText={setNationalId}
        leftIcon={<Icon name="credit-card" size={24} color="#333" />}
        rightIcon={<Icon name="info-outline" size={24} color="#333" />}
      />
      <InputField
        placeholder="Case Reference No."
        value={caseReference}
        onChangeText={setCaseReference}
        leftIcon={<Icon name="credit-card" size={24} color="#333" />}
        rightIcon={<Icon name="info-outline" size={24} color="#333" />}
      />
      <Button
        title="Register a Claim"
        onPress={() => console.log('Claim Registered')}
        rightIcon={<Icon name="arrow-forward" size={24} color="#cc042c" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.large,
    borderRadius: 10,
    marginBottom: theme.spacing.large,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  
});

export default ClaimForm;
