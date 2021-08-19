import React from 'react';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
const {View} = Animated;

export default function Dot({index, currentIndex}) {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View
      style={{
        opacity,
        backgroundColor: '#2CB9B0',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        transform: [
          {
            scale,
          },
        ],
      }}></View>
  );
}
