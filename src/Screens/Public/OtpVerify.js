import React, { useRef } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import FormContainer from '../../Components/FormContainer';
import AuthHeader from '../../Components/AuthHeader';
import Typography, { FULL_WIDTH } from '../../Components/Typography';
import BottomThemeImg from '../../Components/BottomThemeImg';
import { THEME_IMG_2 } from '../../Components/ImageAssets';
import OTPTextView from 'react-native-otp-textinput';
import { THEME_ORANGE } from '../../Components/Colors';
import CommonButton from '../../Components/CommonButton';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/Slices';

const OtpVerify = () => {
  const otpRef = useRef(null);
 const dispatch = useDispatch()
  return (
    <FormContainer>
      <AuthHeader
        title="Verify your phone number"
        title2="Enter the code that was sent to"
        number="9588815676"
      />
      <View style={styles.otpContainer}>
        <OTPTextView
          ref={otpRef}
          inputCount={6}
          tintColor={THEME_ORANGE}
          autoFocus={false}
          textInputStyle={styles.otpInput}
          handleTextChange={(e) => {
            console.log(e);
          }}
        />
      </View>

      <Typography style={styles.resendText}>
        Did not receive the code?{' '}
        <Typography
          textDecorationLine="underline"
          color={THEME_ORANGE}
          onPress={() => {
            Alert.alert('Resending code...');
          }}
        >
          Resend code
        </Typography>
      </Typography>

      <CommonButton title="Submit" style={styles.submitButton} onPress={()=>{
         dispatch(setUser('True'))
      }} />
      <BottomThemeImg source={THEME_IMG_2} />
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    width: FULL_WIDTH - 60,
    alignSelf: 'center',
    padding: 5,
    marginVertical: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  resendText: {
    marginHorizontal: 20,
  },
  submitButton: {
    marginVertical: 20,
  },
});

export default OtpVerify;
