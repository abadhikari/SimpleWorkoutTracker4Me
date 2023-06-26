import React, { useEffect, useState } from 'react';
import { 
    View, 
    Animated, 
    PanResponder, 
    LayoutChangeEvent,   
  } from 'react-native';

import styles from './ButtonCss';
import BasicButton from './BasicButton';

export interface ExerciseButtonProps {
  exercise: string;
  index: number;
  buttonWidth: number;
  removeExercise: (indexToRemove: number) => void;
}

const ExerciseButton = ({ exercise, index, buttonWidth, removeExercise }: ExerciseButtonProps) => {
  const [animatedValue] = useState(new Animated.ValueXY()); // create a separate Animated.ValueXY state for each button

  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animatedValue.setValue({ x: gesture.dx, y: gesture.dy }); // update only the Animated.ValueXY state of the current button
      },
      onPanResponderRelease: (event, gesture) => {
        Animated.spring(animatedValue, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
        if (gesture.dx < -100) {
          // Remove the exercise if the button is swiped left enough
          removeExercise(index); // remove the current button
        } 
      },
    }),
  );

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    if (width !== buttonWidth) {
      // Only update the buttonWidth if it has changed
      buttonWidth = width;
    }
  };

  return (
    <View key={index} style={{ alignItems: 'center' }}>
      <Animated.View
        style={[
          styles.exerciseButton,
          { transform: [{ translateX: animatedValue.x }, {translateY: animatedValue.y}] },
        ]}
        {...panResponder.panHandlers}
        onLayout={handleLayout}
      >
        <BasicButton title={exercise} onPress={() => {console.log('pressed')}} />
      </Animated.View>
    </View>
  );
};

export default ExerciseButton;