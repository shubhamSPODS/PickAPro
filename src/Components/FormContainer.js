import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import { WHITE } from './Colors';

const FormContainer = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'heigth' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} 
      >
        <TouchableWithoutFeedback onPress={Keyboard?.dismiss}>
          <ScrollView
            contentContainerStyle={[styles.scrollContainer, style]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: WHITE, 
  },
  flex: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
});
