import React from 'react';
import { StyleSheet, View } from 'react-native';
import BasicButton from '../components/Button/BasicButton';

type Props = {
  navigation: any;
};

const WorkoutTypeSelector = ({ navigation }: Props) => {
  const handleWorkoutTypeSelect = (workoutType: string) => {
    navigation.navigate('Workout', { workoutType });
  };

  return (
    <View style={styles.container}>
      <BasicButton title = "Push Day" onPress={() => handleWorkoutTypeSelect('Push Day')} />
      <BasicButton title = "Pull Day" onPress={() => handleWorkoutTypeSelect('Pull Day')} />
      <BasicButton title = "Leg Day" onPress={() => handleWorkoutTypeSelect('Leg Day')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default WorkoutTypeSelector;