import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { FULL_WIDTH } from '../Components/Typography';
import { LIGHT_GREY, THEME_GREEN } from '../Components/Colors';

const CustomProgressBar = ({ currentStep, totalSteps }) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const progress = (currentStep / totalSteps) * 100;

    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentStep, totalSteps]);

  const widthInterpolated = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.wrapper}>
      {/* <Text style={styles.label}>
        {currentStep} of {totalSteps} answered
      </Text> */}
      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressFill, { width: widthInterpolated }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 0,
    width:FULL_WIDTH,alignSelf:'center',
    borderRadius:0
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: '#444',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: LIGHT_GREY,
    overflow: 'hidden',
    borderRadius:0
  },
  progressFill: {
    height: '100%',
    backgroundColor: THEME_GREEN,
  },
});

export default CustomProgressBar;
