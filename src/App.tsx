import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WorkoutTypeSelector from './screens/WorkoutTypeSelector';
import WorkoutScreen from './screens/WorkoutScreen';

export type RootStackParamList = {
  SelectWorkoutType: undefined;
  Workout: { workoutType: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SelectWorkoutType"
          component={WorkoutTypeSelector}
          options={{ title: 'Select Workout Day' }}
        />
        <Stack.Screen
          name="Workout"
          component={WorkoutScreen}
          options={({ route }) => ({ title: route.params.workoutType })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;