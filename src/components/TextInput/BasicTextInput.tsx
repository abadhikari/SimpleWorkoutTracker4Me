import React, { ReactNode } from 'react';
import { TextInput, KeyboardType } from 'react-native';
import styles from './TextInputCss';

type BasicTextInputProps = {
  placeholder: string;
  keyboardType: KeyboardType;
  value: string;
  onChangeText: (value: string) => void;
};

const BasicTextInput = ({ placeholder, keyboardType, value, onChangeText }: BasicTextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default BasicTextInput;