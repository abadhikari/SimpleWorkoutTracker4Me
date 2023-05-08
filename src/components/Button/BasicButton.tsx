import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './ButtonCss';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const BasicButton = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.basicButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BasicButton;