import React, { useEffect, useRef } from 'react';
import { Animated, Modal, StyleSheet, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { FULL_HEIGHT } from './Typography';

const { height } = Dimensions.get('window');

const AnimatedRbSheet = ({ visible, onClose, children, sheetHeight = FULL_HEIGHT ,sheetStyle}) => {
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: height - sheetHeight,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.overlay,{...sheetStyle}]}>
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.sheetContainer, { top: slideAnim, height: sheetHeight }]}>
              {children}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AnimatedRbSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheetContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
