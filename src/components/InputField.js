import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const InputField = ({ value, onChangeText, placeholder, leftIcon, rightIcon }) => {
  const [isFocused, setIsFocused] = useState(false); 

  return (
    <View
      style={[
        styles.inputContainer,
        { borderBottomColor: isFocused ? theme.colors.black : theme.colors.border },
      ]}
    >
      {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
      <TextInput
        style={[styles.input, { marginLeft: leftIcon ? 40 : 0 }]} 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
        underlineColorAndroid="transparent"
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)} 
      />
      {rightIcon && <View style={styles.rightIconContainer}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    marginBottom: theme.spacing.medium,
    borderRadius: 30,
  },
  input: {
    flex: 1,
    paddingVertical: theme.spacing.small,
    fontSize: theme.fontSizes.regular,
    color: theme.colors.text,
    outlineStyle: 'none', 
  },
  leftIconContainer: {
    position: 'absolute',
    left: 5,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  rightIconContainer: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
});
export default InputField;
