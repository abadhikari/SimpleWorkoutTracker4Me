import React, { useEffect, useState, useRef } from 'react';
import { 
  Animated,
  View, 
  Text,
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
} from 'react-native';
import ExerciseButton from '../components/Button/ExerciseButton';

type Props = {
  route: any;
};

const WorkoutScreen = ({ route }: Props) => {
  const { workoutType } = route.params;
  const [ exercises, setExercises ] = useState<string[]>([]);
  const [ newExercise, setNewExercise ] = useState<string>('');

  const handleAddExercise = () => {
    if (newExercise) {
      setExercises([...exercises, newExercise]);
      setNewExercise('');
    }
  };

  useEffect(() => {
    console.log('exercises:', exercises);
  }, [exercises]);

  const removeExercise = (indexToRemove: number) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises];
      updatedExercises.splice(indexToRemove, 1);
      const temp = updatedExercises[0];
      return updatedExercises;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subheader}>Exercises:</Text>
      <View style={styles.exerciseList}>
        {exercises.map((exercise, index) => (
          <ExerciseButton key={index} exercise={exercise} index={index} buttonWidth={0} removeExercise={removeExercise} />
        ))}
      </View>
      <View style={styles.addExerciseContainer}>
        <TextInput
          style={styles.addExerciseInput}
          onChangeText={(text) => setNewExercise(text)}
          value={newExercise}
        />
        <TouchableOpacity style={styles.addExerciseButton} onPress={handleAddExercise}>
          <Text style={styles.addExerciseButtonText}>Add Exercise</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseList: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseButtonText: {
    fontSize: 16,
  },
  addExerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  addExerciseInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
  },
  addExerciseButton: {
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  addExerciseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default WorkoutScreen;